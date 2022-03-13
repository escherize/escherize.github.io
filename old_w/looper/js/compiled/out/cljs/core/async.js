// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t29950 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29950 = (function (f,fn_handler,meta29951){
this.f = f;
this.fn_handler = fn_handler;
this.meta29951 = meta29951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29950.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29952){
var self__ = this;
var _29952__$1 = this;
return self__.meta29951;
});

cljs.core.async.t29950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29952,meta29951__$1){
var self__ = this;
var _29952__$1 = this;
return (new cljs.core.async.t29950(self__.f,self__.fn_handler,meta29951__$1));
});

cljs.core.async.t29950.cljs$lang$type = true;

cljs.core.async.t29950.cljs$lang$ctorStr = "cljs.core.async/t29950";

cljs.core.async.t29950.cljs$lang$ctorPrWriter = (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async/t29950");
});

cljs.core.async.__GT_t29950 = (function cljs$core$async$fn_handler_$___GT_t29950(f__$1,fn_handler__$1,meta29951){
return (new cljs.core.async.t29950(f__$1,fn_handler__$1,meta29951));
});

}

return (new cljs.core.async.t29950(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__29954 = buff;
if(G__29954){
var bit__23048__auto__ = null;
if(cljs.core.truth_((function (){var or__22374__auto__ = bit__23048__auto__;
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
return G__29954.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29954.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29954);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29954);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__29956 = arguments.length;
switch (G__29956) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__29959 = arguments.length;
switch (G__29959) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29961 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29961);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29961,ret){
return (function (){
return fn1.call(null,val_29961);
});})(val_29961,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__29963 = arguments.length;
switch (G__29963) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
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
var n__23259__auto___29965 = n;
var x_29966 = (0);
while(true){
if((x_29966 < n__23259__auto___29965)){
(a[x_29966] = (0));

var G__29967 = (x_29966 + (1));
x_29966 = G__29967;
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

var G__29968 = (i + (1));
i = G__29968;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29972 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29972 = (function (flag,alt_flag,meta29973){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29973 = meta29973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29972.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29974){
var self__ = this;
var _29974__$1 = this;
return self__.meta29973;
});})(flag))
;

cljs.core.async.t29972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29974,meta29973__$1){
var self__ = this;
var _29974__$1 = this;
return (new cljs.core.async.t29972(self__.flag,self__.alt_flag,meta29973__$1));
});})(flag))
;

cljs.core.async.t29972.cljs$lang$type = true;

cljs.core.async.t29972.cljs$lang$ctorStr = "cljs.core.async/t29972";

cljs.core.async.t29972.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async/t29972");
});})(flag))
;

cljs.core.async.__GT_t29972 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t29972(flag__$1,alt_flag__$1,meta29973){
return (new cljs.core.async.t29972(flag__$1,alt_flag__$1,meta29973));
});})(flag))
;

}

return (new cljs.core.async.t29972(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t29978 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29978 = (function (cb,flag,alt_handler,meta29979){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29979 = meta29979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29978.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29980){
var self__ = this;
var _29980__$1 = this;
return self__.meta29979;
});

cljs.core.async.t29978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29980,meta29979__$1){
var self__ = this;
var _29980__$1 = this;
return (new cljs.core.async.t29978(self__.cb,self__.flag,self__.alt_handler,meta29979__$1));
});

cljs.core.async.t29978.cljs$lang$type = true;

cljs.core.async.t29978.cljs$lang$ctorStr = "cljs.core.async/t29978";

cljs.core.async.t29978.cljs$lang$ctorPrWriter = (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async/t29978");
});

cljs.core.async.__GT_t29978 = (function cljs$core$async$alt_handler_$___GT_t29978(cb__$1,flag__$1,alt_handler__$1,meta29979){
return (new cljs.core.async.t29978(cb__$1,flag__$1,alt_handler__$1,meta29979));
});

}

return (new cljs.core.async.t29978(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29981_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29981_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29982_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29982_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22374__auto__ = wport;
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29983 = (i + (1));
i = G__29983;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22374__auto__ = ret;
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__22362__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22362__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22362__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__23414__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23414__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29986){
var map__29987 = p__29986;
var map__29987__$1 = ((cljs.core.seq_QMARK_.call(null,map__29987))?cljs.core.apply.call(null,cljs.core.hash_map,map__29987):map__29987);
var opts = map__29987__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29984){
var G__29985 = cljs.core.first.call(null,seq29984);
var seq29984__$1 = cljs.core.next.call(null,seq29984);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29985,seq29984__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__29989 = arguments.length;
switch (G__29989) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25598__auto___30038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___30038){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___30038){
return (function (state_30013){
var state_val_30014 = (state_30013[(1)]);
if((state_val_30014 === (7))){
var inst_30009 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30015_30039 = state_30013__$1;
(statearr_30015_30039[(2)] = inst_30009);

(statearr_30015_30039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (1))){
var state_30013__$1 = state_30013;
var statearr_30016_30040 = state_30013__$1;
(statearr_30016_30040[(2)] = null);

(statearr_30016_30040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (4))){
var inst_29992 = (state_30013[(7)]);
var inst_29992__$1 = (state_30013[(2)]);
var inst_29993 = (inst_29992__$1 == null);
var state_30013__$1 = (function (){var statearr_30017 = state_30013;
(statearr_30017[(7)] = inst_29992__$1);

return statearr_30017;
})();
if(cljs.core.truth_(inst_29993)){
var statearr_30018_30041 = state_30013__$1;
(statearr_30018_30041[(1)] = (5));

} else {
var statearr_30019_30042 = state_30013__$1;
(statearr_30019_30042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (13))){
var state_30013__$1 = state_30013;
var statearr_30020_30043 = state_30013__$1;
(statearr_30020_30043[(2)] = null);

(statearr_30020_30043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (6))){
var inst_29992 = (state_30013[(7)]);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30013__$1,(11),to,inst_29992);
} else {
if((state_val_30014 === (3))){
var inst_30011 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30013__$1,inst_30011);
} else {
if((state_val_30014 === (12))){
var state_30013__$1 = state_30013;
var statearr_30021_30044 = state_30013__$1;
(statearr_30021_30044[(2)] = null);

(statearr_30021_30044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (2))){
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30013__$1,(4),from);
} else {
if((state_val_30014 === (11))){
var inst_30002 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
if(cljs.core.truth_(inst_30002)){
var statearr_30022_30045 = state_30013__$1;
(statearr_30022_30045[(1)] = (12));

} else {
var statearr_30023_30046 = state_30013__$1;
(statearr_30023_30046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (9))){
var state_30013__$1 = state_30013;
var statearr_30024_30047 = state_30013__$1;
(statearr_30024_30047[(2)] = null);

(statearr_30024_30047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (5))){
var state_30013__$1 = state_30013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30025_30048 = state_30013__$1;
(statearr_30025_30048[(1)] = (8));

} else {
var statearr_30026_30049 = state_30013__$1;
(statearr_30026_30049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (14))){
var inst_30007 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30027_30050 = state_30013__$1;
(statearr_30027_30050[(2)] = inst_30007);

(statearr_30027_30050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (10))){
var inst_29999 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30028_30051 = state_30013__$1;
(statearr_30028_30051[(2)] = inst_29999);

(statearr_30028_30051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (8))){
var inst_29996 = cljs.core.async.close_BANG_.call(null,to);
var state_30013__$1 = state_30013;
var statearr_30029_30052 = state_30013__$1;
(statearr_30029_30052[(2)] = inst_29996);

(statearr_30029_30052[(1)] = (10));


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
});})(c__25598__auto___30038))
;
return ((function (switch__25536__auto__,c__25598__auto___30038){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_30033 = [null,null,null,null,null,null,null,null];
(statearr_30033[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_30033[(1)] = (1));

return statearr_30033;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_30013){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_30013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e30034){if((e30034 instanceof Object)){
var ex__25540__auto__ = e30034;
var statearr_30035_30053 = state_30013;
(statearr_30035_30053[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30054 = state_30013;
state_30013 = G__30054;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_30013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_30013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___30038))
})();
var state__25600__auto__ = (function (){var statearr_30036 = f__25599__auto__.call(null);
(statearr_30036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___30038);

return statearr_30036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___30038))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30238){
var vec__30239 = p__30238;
var v = cljs.core.nth.call(null,vec__30239,(0),null);
var p = cljs.core.nth.call(null,vec__30239,(1),null);
var job = vec__30239;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25598__auto___30421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___30421,res,vec__30239,v,p,job,jobs,results){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___30421,res,vec__30239,v,p,job,jobs,results){
return (function (state_30244){
var state_val_30245 = (state_30244[(1)]);
if((state_val_30245 === (2))){
var inst_30241 = (state_30244[(2)]);
var inst_30242 = cljs.core.async.close_BANG_.call(null,res);
var state_30244__$1 = (function (){var statearr_30246 = state_30244;
(statearr_30246[(7)] = inst_30241);

return statearr_30246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30244__$1,inst_30242);
} else {
if((state_val_30245 === (1))){
var state_30244__$1 = state_30244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30244__$1,(2),res,v);
} else {
return null;
}
}
});})(c__25598__auto___30421,res,vec__30239,v,p,job,jobs,results))
;
return ((function (switch__25536__auto__,c__25598__auto___30421,res,vec__30239,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0 = (function (){
var statearr_30250 = [null,null,null,null,null,null,null,null];
(statearr_30250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__);

(statearr_30250[(1)] = (1));

return statearr_30250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1 = (function (state_30244){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_30244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e30251){if((e30251 instanceof Object)){
var ex__25540__auto__ = e30251;
var statearr_30252_30422 = state_30244;
(statearr_30252_30422[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30423 = state_30244;
state_30244 = G__30423;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__ = function(state_30244){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1.call(this,state_30244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___30421,res,vec__30239,v,p,job,jobs,results))
})();
var state__25600__auto__ = (function (){var statearr_30253 = f__25599__auto__.call(null);
(statearr_30253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___30421);

return statearr_30253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___30421,res,vec__30239,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30254){
var vec__30255 = p__30254;
var v = cljs.core.nth.call(null,vec__30255,(0),null);
var p = cljs.core.nth.call(null,vec__30255,(1),null);
var job = vec__30255;
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
var n__23259__auto___30424 = n;
var __30425 = (0);
while(true){
if((__30425 < n__23259__auto___30424)){
var G__30256_30426 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30256_30426) {
case "async":
var c__25598__auto___30428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30425,c__25598__auto___30428,G__30256_30426,n__23259__auto___30424,jobs,results,process,async){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (__30425,c__25598__auto___30428,G__30256_30426,n__23259__auto___30424,jobs,results,process,async){
return (function (state_30269){
var state_val_30270 = (state_30269[(1)]);
if((state_val_30270 === (7))){
var inst_30265 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
var statearr_30271_30429 = state_30269__$1;
(statearr_30271_30429[(2)] = inst_30265);

(statearr_30271_30429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (6))){
var state_30269__$1 = state_30269;
var statearr_30272_30430 = state_30269__$1;
(statearr_30272_30430[(2)] = null);

(statearr_30272_30430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (5))){
var state_30269__$1 = state_30269;
var statearr_30273_30431 = state_30269__$1;
(statearr_30273_30431[(2)] = null);

(statearr_30273_30431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (4))){
var inst_30259 = (state_30269[(2)]);
var inst_30260 = async.call(null,inst_30259);
var state_30269__$1 = state_30269;
if(cljs.core.truth_(inst_30260)){
var statearr_30274_30432 = state_30269__$1;
(statearr_30274_30432[(1)] = (5));

} else {
var statearr_30275_30433 = state_30269__$1;
(statearr_30275_30433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (3))){
var inst_30267 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30269__$1,inst_30267);
} else {
if((state_val_30270 === (2))){
var state_30269__$1 = state_30269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30269__$1,(4),jobs);
} else {
if((state_val_30270 === (1))){
var state_30269__$1 = state_30269;
var statearr_30276_30434 = state_30269__$1;
(statearr_30276_30434[(2)] = null);

(statearr_30276_30434[(1)] = (2));


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
});})(__30425,c__25598__auto___30428,G__30256_30426,n__23259__auto___30424,jobs,results,process,async))
;
return ((function (__30425,switch__25536__auto__,c__25598__auto___30428,G__30256_30426,n__23259__auto___30424,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0 = (function (){
var statearr_30280 = [null,null,null,null,null,null,null];
(statearr_30280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__);

(statearr_30280[(1)] = (1));

return statearr_30280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1 = (function (state_30269){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_30269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e30281){if((e30281 instanceof Object)){
var ex__25540__auto__ = e30281;
var statearr_30282_30435 = state_30269;
(statearr_30282_30435[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30436 = state_30269;
state_30269 = G__30436;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__ = function(state_30269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1.call(this,state_30269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__;
})()
;})(__30425,switch__25536__auto__,c__25598__auto___30428,G__30256_30426,n__23259__auto___30424,jobs,results,process,async))
})();
var state__25600__auto__ = (function (){var statearr_30283 = f__25599__auto__.call(null);
(statearr_30283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___30428);

return statearr_30283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(__30425,c__25598__auto___30428,G__30256_30426,n__23259__auto___30424,jobs,results,process,async))
);


break;
case "compute":
var c__25598__auto___30437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30425,c__25598__auto___30437,G__30256_30426,n__23259__auto___30424,jobs,results,process,async){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (__30425,c__25598__auto___30437,G__30256_30426,n__23259__auto___30424,jobs,results,process,async){
return (function (state_30296){
var state_val_30297 = (state_30296[(1)]);
if((state_val_30297 === (7))){
var inst_30292 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30298_30438 = state_30296__$1;
(statearr_30298_30438[(2)] = inst_30292);

(statearr_30298_30438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (6))){
var state_30296__$1 = state_30296;
var statearr_30299_30439 = state_30296__$1;
(statearr_30299_30439[(2)] = null);

(statearr_30299_30439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (5))){
var state_30296__$1 = state_30296;
var statearr_30300_30440 = state_30296__$1;
(statearr_30300_30440[(2)] = null);

(statearr_30300_30440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (4))){
var inst_30286 = (state_30296[(2)]);
var inst_30287 = process.call(null,inst_30286);
var state_30296__$1 = state_30296;
if(cljs.core.truth_(inst_30287)){
var statearr_30301_30441 = state_30296__$1;
(statearr_30301_30441[(1)] = (5));

} else {
var statearr_30302_30442 = state_30296__$1;
(statearr_30302_30442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (3))){
var inst_30294 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30296__$1,inst_30294);
} else {
if((state_val_30297 === (2))){
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30296__$1,(4),jobs);
} else {
if((state_val_30297 === (1))){
var state_30296__$1 = state_30296;
var statearr_30303_30443 = state_30296__$1;
(statearr_30303_30443[(2)] = null);

(statearr_30303_30443[(1)] = (2));


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
});})(__30425,c__25598__auto___30437,G__30256_30426,n__23259__auto___30424,jobs,results,process,async))
;
return ((function (__30425,switch__25536__auto__,c__25598__auto___30437,G__30256_30426,n__23259__auto___30424,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0 = (function (){
var statearr_30307 = [null,null,null,null,null,null,null];
(statearr_30307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__);

(statearr_30307[(1)] = (1));

return statearr_30307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1 = (function (state_30296){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_30296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e30308){if((e30308 instanceof Object)){
var ex__25540__auto__ = e30308;
var statearr_30309_30444 = state_30296;
(statearr_30309_30444[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30445 = state_30296;
state_30296 = G__30445;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__ = function(state_30296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1.call(this,state_30296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__;
})()
;})(__30425,switch__25536__auto__,c__25598__auto___30437,G__30256_30426,n__23259__auto___30424,jobs,results,process,async))
})();
var state__25600__auto__ = (function (){var statearr_30310 = f__25599__auto__.call(null);
(statearr_30310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___30437);

return statearr_30310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(__30425,c__25598__auto___30437,G__30256_30426,n__23259__auto___30424,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30446 = (__30425 + (1));
__30425 = G__30446;
continue;
} else {
}
break;
}

var c__25598__auto___30447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___30447,jobs,results,process,async){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___30447,jobs,results,process,async){
return (function (state_30332){
var state_val_30333 = (state_30332[(1)]);
if((state_val_30333 === (9))){
var inst_30325 = (state_30332[(2)]);
var state_30332__$1 = (function (){var statearr_30334 = state_30332;
(statearr_30334[(7)] = inst_30325);

return statearr_30334;
})();
var statearr_30335_30448 = state_30332__$1;
(statearr_30335_30448[(2)] = null);

(statearr_30335_30448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30333 === (8))){
var inst_30318 = (state_30332[(8)]);
var inst_30323 = (state_30332[(2)]);
var state_30332__$1 = (function (){var statearr_30336 = state_30332;
(statearr_30336[(9)] = inst_30323);

return statearr_30336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30332__$1,(9),results,inst_30318);
} else {
if((state_val_30333 === (7))){
var inst_30328 = (state_30332[(2)]);
var state_30332__$1 = state_30332;
var statearr_30337_30449 = state_30332__$1;
(statearr_30337_30449[(2)] = inst_30328);

(statearr_30337_30449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30333 === (6))){
var inst_30318 = (state_30332[(8)]);
var inst_30313 = (state_30332[(10)]);
var inst_30318__$1 = cljs.core.async.chan.call(null,(1));
var inst_30319 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30320 = [inst_30313,inst_30318__$1];
var inst_30321 = (new cljs.core.PersistentVector(null,2,(5),inst_30319,inst_30320,null));
var state_30332__$1 = (function (){var statearr_30338 = state_30332;
(statearr_30338[(8)] = inst_30318__$1);

return statearr_30338;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30332__$1,(8),jobs,inst_30321);
} else {
if((state_val_30333 === (5))){
var inst_30316 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30332__$1 = state_30332;
var statearr_30339_30450 = state_30332__$1;
(statearr_30339_30450[(2)] = inst_30316);

(statearr_30339_30450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30333 === (4))){
var inst_30313 = (state_30332[(10)]);
var inst_30313__$1 = (state_30332[(2)]);
var inst_30314 = (inst_30313__$1 == null);
var state_30332__$1 = (function (){var statearr_30340 = state_30332;
(statearr_30340[(10)] = inst_30313__$1);

return statearr_30340;
})();
if(cljs.core.truth_(inst_30314)){
var statearr_30341_30451 = state_30332__$1;
(statearr_30341_30451[(1)] = (5));

} else {
var statearr_30342_30452 = state_30332__$1;
(statearr_30342_30452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30333 === (3))){
var inst_30330 = (state_30332[(2)]);
var state_30332__$1 = state_30332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30332__$1,inst_30330);
} else {
if((state_val_30333 === (2))){
var state_30332__$1 = state_30332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30332__$1,(4),from);
} else {
if((state_val_30333 === (1))){
var state_30332__$1 = state_30332;
var statearr_30343_30453 = state_30332__$1;
(statearr_30343_30453[(2)] = null);

(statearr_30343_30453[(1)] = (2));


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
});})(c__25598__auto___30447,jobs,results,process,async))
;
return ((function (switch__25536__auto__,c__25598__auto___30447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0 = (function (){
var statearr_30347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__);

(statearr_30347[(1)] = (1));

return statearr_30347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1 = (function (state_30332){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_30332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e30348){if((e30348 instanceof Object)){
var ex__25540__auto__ = e30348;
var statearr_30349_30454 = state_30332;
(statearr_30349_30454[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30455 = state_30332;
state_30332 = G__30455;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__ = function(state_30332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1.call(this,state_30332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___30447,jobs,results,process,async))
})();
var state__25600__auto__ = (function (){var statearr_30350 = f__25599__auto__.call(null);
(statearr_30350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___30447);

return statearr_30350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___30447,jobs,results,process,async))
);


var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__,jobs,results,process,async){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__,jobs,results,process,async){
return (function (state_30388){
var state_val_30389 = (state_30388[(1)]);
if((state_val_30389 === (7))){
var inst_30384 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
var statearr_30390_30456 = state_30388__$1;
(statearr_30390_30456[(2)] = inst_30384);

(statearr_30390_30456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (20))){
var state_30388__$1 = state_30388;
var statearr_30391_30457 = state_30388__$1;
(statearr_30391_30457[(2)] = null);

(statearr_30391_30457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (1))){
var state_30388__$1 = state_30388;
var statearr_30392_30458 = state_30388__$1;
(statearr_30392_30458[(2)] = null);

(statearr_30392_30458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (4))){
var inst_30353 = (state_30388[(7)]);
var inst_30353__$1 = (state_30388[(2)]);
var inst_30354 = (inst_30353__$1 == null);
var state_30388__$1 = (function (){var statearr_30393 = state_30388;
(statearr_30393[(7)] = inst_30353__$1);

return statearr_30393;
})();
if(cljs.core.truth_(inst_30354)){
var statearr_30394_30459 = state_30388__$1;
(statearr_30394_30459[(1)] = (5));

} else {
var statearr_30395_30460 = state_30388__$1;
(statearr_30395_30460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (15))){
var inst_30366 = (state_30388[(8)]);
var state_30388__$1 = state_30388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30388__$1,(18),to,inst_30366);
} else {
if((state_val_30389 === (21))){
var inst_30379 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
var statearr_30396_30461 = state_30388__$1;
(statearr_30396_30461[(2)] = inst_30379);

(statearr_30396_30461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (13))){
var inst_30381 = (state_30388[(2)]);
var state_30388__$1 = (function (){var statearr_30397 = state_30388;
(statearr_30397[(9)] = inst_30381);

return statearr_30397;
})();
var statearr_30398_30462 = state_30388__$1;
(statearr_30398_30462[(2)] = null);

(statearr_30398_30462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (6))){
var inst_30353 = (state_30388[(7)]);
var state_30388__$1 = state_30388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30388__$1,(11),inst_30353);
} else {
if((state_val_30389 === (17))){
var inst_30374 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
if(cljs.core.truth_(inst_30374)){
var statearr_30399_30463 = state_30388__$1;
(statearr_30399_30463[(1)] = (19));

} else {
var statearr_30400_30464 = state_30388__$1;
(statearr_30400_30464[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (3))){
var inst_30386 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30388__$1,inst_30386);
} else {
if((state_val_30389 === (12))){
var inst_30363 = (state_30388[(10)]);
var state_30388__$1 = state_30388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30388__$1,(14),inst_30363);
} else {
if((state_val_30389 === (2))){
var state_30388__$1 = state_30388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30388__$1,(4),results);
} else {
if((state_val_30389 === (19))){
var state_30388__$1 = state_30388;
var statearr_30401_30465 = state_30388__$1;
(statearr_30401_30465[(2)] = null);

(statearr_30401_30465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (11))){
var inst_30363 = (state_30388[(2)]);
var state_30388__$1 = (function (){var statearr_30402 = state_30388;
(statearr_30402[(10)] = inst_30363);

return statearr_30402;
})();
var statearr_30403_30466 = state_30388__$1;
(statearr_30403_30466[(2)] = null);

(statearr_30403_30466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (9))){
var state_30388__$1 = state_30388;
var statearr_30404_30467 = state_30388__$1;
(statearr_30404_30467[(2)] = null);

(statearr_30404_30467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (5))){
var state_30388__$1 = state_30388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30405_30468 = state_30388__$1;
(statearr_30405_30468[(1)] = (8));

} else {
var statearr_30406_30469 = state_30388__$1;
(statearr_30406_30469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (14))){
var inst_30368 = (state_30388[(11)]);
var inst_30366 = (state_30388[(8)]);
var inst_30366__$1 = (state_30388[(2)]);
var inst_30367 = (inst_30366__$1 == null);
var inst_30368__$1 = cljs.core.not.call(null,inst_30367);
var state_30388__$1 = (function (){var statearr_30407 = state_30388;
(statearr_30407[(11)] = inst_30368__$1);

(statearr_30407[(8)] = inst_30366__$1);

return statearr_30407;
})();
if(inst_30368__$1){
var statearr_30408_30470 = state_30388__$1;
(statearr_30408_30470[(1)] = (15));

} else {
var statearr_30409_30471 = state_30388__$1;
(statearr_30409_30471[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (16))){
var inst_30368 = (state_30388[(11)]);
var state_30388__$1 = state_30388;
var statearr_30410_30472 = state_30388__$1;
(statearr_30410_30472[(2)] = inst_30368);

(statearr_30410_30472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (10))){
var inst_30360 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
var statearr_30411_30473 = state_30388__$1;
(statearr_30411_30473[(2)] = inst_30360);

(statearr_30411_30473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (18))){
var inst_30371 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
var statearr_30412_30474 = state_30388__$1;
(statearr_30412_30474[(2)] = inst_30371);

(statearr_30412_30474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (8))){
var inst_30357 = cljs.core.async.close_BANG_.call(null,to);
var state_30388__$1 = state_30388;
var statearr_30413_30475 = state_30388__$1;
(statearr_30413_30475[(2)] = inst_30357);

(statearr_30413_30475[(1)] = (10));


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
});})(c__25598__auto__,jobs,results,process,async))
;
return ((function (switch__25536__auto__,c__25598__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0 = (function (){
var statearr_30417 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__);

(statearr_30417[(1)] = (1));

return statearr_30417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1 = (function (state_30388){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_30388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e30418){if((e30418 instanceof Object)){
var ex__25540__auto__ = e30418;
var statearr_30419_30476 = state_30388;
(statearr_30419_30476[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30477 = state_30388;
state_30388 = G__30477;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__ = function(state_30388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1.call(this,state_30388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__,jobs,results,process,async))
})();
var state__25600__auto__ = (function (){var statearr_30420 = f__25599__auto__.call(null);
(statearr_30420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_30420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__,jobs,results,process,async))
);

return c__25598__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__30479 = arguments.length;
switch (G__30479) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__30482 = arguments.length;
switch (G__30482) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__30485 = arguments.length;
switch (G__30485) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25598__auto___30537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___30537,tc,fc){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___30537,tc,fc){
return (function (state_30511){
var state_val_30512 = (state_30511[(1)]);
if((state_val_30512 === (7))){
var inst_30507 = (state_30511[(2)]);
var state_30511__$1 = state_30511;
var statearr_30513_30538 = state_30511__$1;
(statearr_30513_30538[(2)] = inst_30507);

(statearr_30513_30538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (1))){
var state_30511__$1 = state_30511;
var statearr_30514_30539 = state_30511__$1;
(statearr_30514_30539[(2)] = null);

(statearr_30514_30539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (4))){
var inst_30488 = (state_30511[(7)]);
var inst_30488__$1 = (state_30511[(2)]);
var inst_30489 = (inst_30488__$1 == null);
var state_30511__$1 = (function (){var statearr_30515 = state_30511;
(statearr_30515[(7)] = inst_30488__$1);

return statearr_30515;
})();
if(cljs.core.truth_(inst_30489)){
var statearr_30516_30540 = state_30511__$1;
(statearr_30516_30540[(1)] = (5));

} else {
var statearr_30517_30541 = state_30511__$1;
(statearr_30517_30541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (13))){
var state_30511__$1 = state_30511;
var statearr_30518_30542 = state_30511__$1;
(statearr_30518_30542[(2)] = null);

(statearr_30518_30542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (6))){
var inst_30488 = (state_30511[(7)]);
var inst_30494 = p.call(null,inst_30488);
var state_30511__$1 = state_30511;
if(cljs.core.truth_(inst_30494)){
var statearr_30519_30543 = state_30511__$1;
(statearr_30519_30543[(1)] = (9));

} else {
var statearr_30520_30544 = state_30511__$1;
(statearr_30520_30544[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (3))){
var inst_30509 = (state_30511[(2)]);
var state_30511__$1 = state_30511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30511__$1,inst_30509);
} else {
if((state_val_30512 === (12))){
var state_30511__$1 = state_30511;
var statearr_30521_30545 = state_30511__$1;
(statearr_30521_30545[(2)] = null);

(statearr_30521_30545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (2))){
var state_30511__$1 = state_30511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30511__$1,(4),ch);
} else {
if((state_val_30512 === (11))){
var inst_30488 = (state_30511[(7)]);
var inst_30498 = (state_30511[(2)]);
var state_30511__$1 = state_30511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30511__$1,(8),inst_30498,inst_30488);
} else {
if((state_val_30512 === (9))){
var state_30511__$1 = state_30511;
var statearr_30522_30546 = state_30511__$1;
(statearr_30522_30546[(2)] = tc);

(statearr_30522_30546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (5))){
var inst_30491 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30492 = cljs.core.async.close_BANG_.call(null,fc);
var state_30511__$1 = (function (){var statearr_30523 = state_30511;
(statearr_30523[(8)] = inst_30491);

return statearr_30523;
})();
var statearr_30524_30547 = state_30511__$1;
(statearr_30524_30547[(2)] = inst_30492);

(statearr_30524_30547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (14))){
var inst_30505 = (state_30511[(2)]);
var state_30511__$1 = state_30511;
var statearr_30525_30548 = state_30511__$1;
(statearr_30525_30548[(2)] = inst_30505);

(statearr_30525_30548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (10))){
var state_30511__$1 = state_30511;
var statearr_30526_30549 = state_30511__$1;
(statearr_30526_30549[(2)] = fc);

(statearr_30526_30549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (8))){
var inst_30500 = (state_30511[(2)]);
var state_30511__$1 = state_30511;
if(cljs.core.truth_(inst_30500)){
var statearr_30527_30550 = state_30511__$1;
(statearr_30527_30550[(1)] = (12));

} else {
var statearr_30528_30551 = state_30511__$1;
(statearr_30528_30551[(1)] = (13));

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
});})(c__25598__auto___30537,tc,fc))
;
return ((function (switch__25536__auto__,c__25598__auto___30537,tc,fc){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_30532 = [null,null,null,null,null,null,null,null,null];
(statearr_30532[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_30532[(1)] = (1));

return statearr_30532;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_30511){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_30511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e30533){if((e30533 instanceof Object)){
var ex__25540__auto__ = e30533;
var statearr_30534_30552 = state_30511;
(statearr_30534_30552[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30553 = state_30511;
state_30511 = G__30553;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_30511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_30511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___30537,tc,fc))
})();
var state__25600__auto__ = (function (){var statearr_30535 = f__25599__auto__.call(null);
(statearr_30535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___30537);

return statearr_30535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___30537,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__){
return (function (state_30600){
var state_val_30601 = (state_30600[(1)]);
if((state_val_30601 === (7))){
var inst_30596 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
var statearr_30602_30618 = state_30600__$1;
(statearr_30602_30618[(2)] = inst_30596);

(statearr_30602_30618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (6))){
var inst_30586 = (state_30600[(7)]);
var inst_30589 = (state_30600[(8)]);
var inst_30593 = f.call(null,inst_30586,inst_30589);
var inst_30586__$1 = inst_30593;
var state_30600__$1 = (function (){var statearr_30603 = state_30600;
(statearr_30603[(7)] = inst_30586__$1);

return statearr_30603;
})();
var statearr_30604_30619 = state_30600__$1;
(statearr_30604_30619[(2)] = null);

(statearr_30604_30619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (5))){
var inst_30586 = (state_30600[(7)]);
var state_30600__$1 = state_30600;
var statearr_30605_30620 = state_30600__$1;
(statearr_30605_30620[(2)] = inst_30586);

(statearr_30605_30620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (4))){
var inst_30589 = (state_30600[(8)]);
var inst_30589__$1 = (state_30600[(2)]);
var inst_30590 = (inst_30589__$1 == null);
var state_30600__$1 = (function (){var statearr_30606 = state_30600;
(statearr_30606[(8)] = inst_30589__$1);

return statearr_30606;
})();
if(cljs.core.truth_(inst_30590)){
var statearr_30607_30621 = state_30600__$1;
(statearr_30607_30621[(1)] = (5));

} else {
var statearr_30608_30622 = state_30600__$1;
(statearr_30608_30622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (3))){
var inst_30598 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30600__$1,inst_30598);
} else {
if((state_val_30601 === (2))){
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30600__$1,(4),ch);
} else {
if((state_val_30601 === (1))){
var inst_30586 = init;
var state_30600__$1 = (function (){var statearr_30609 = state_30600;
(statearr_30609[(7)] = inst_30586);

return statearr_30609;
})();
var statearr_30610_30623 = state_30600__$1;
(statearr_30610_30623[(2)] = null);

(statearr_30610_30623[(1)] = (2));


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
});})(c__25598__auto__))
;
return ((function (switch__25536__auto__,c__25598__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25537__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25537__auto____0 = (function (){
var statearr_30614 = [null,null,null,null,null,null,null,null,null];
(statearr_30614[(0)] = cljs$core$async$reduce_$_state_machine__25537__auto__);

(statearr_30614[(1)] = (1));

return statearr_30614;
});
var cljs$core$async$reduce_$_state_machine__25537__auto____1 = (function (state_30600){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_30600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e30615){if((e30615 instanceof Object)){
var ex__25540__auto__ = e30615;
var statearr_30616_30624 = state_30600;
(statearr_30616_30624[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30625 = state_30600;
state_30600 = G__30625;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25537__auto__ = function(state_30600){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25537__auto____1.call(this,state_30600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25537__auto____0;
cljs$core$async$reduce_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25537__auto____1;
return cljs$core$async$reduce_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__))
})();
var state__25600__auto__ = (function (){var statearr_30617 = f__25599__auto__.call(null);
(statearr_30617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_30617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__))
);

return c__25598__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__30627 = arguments.length;
switch (G__30627) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__){
return (function (state_30652){
var state_val_30653 = (state_30652[(1)]);
if((state_val_30653 === (7))){
var inst_30634 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
var statearr_30654_30678 = state_30652__$1;
(statearr_30654_30678[(2)] = inst_30634);

(statearr_30654_30678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (1))){
var inst_30628 = cljs.core.seq.call(null,coll);
var inst_30629 = inst_30628;
var state_30652__$1 = (function (){var statearr_30655 = state_30652;
(statearr_30655[(7)] = inst_30629);

return statearr_30655;
})();
var statearr_30656_30679 = state_30652__$1;
(statearr_30656_30679[(2)] = null);

(statearr_30656_30679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (4))){
var inst_30629 = (state_30652[(7)]);
var inst_30632 = cljs.core.first.call(null,inst_30629);
var state_30652__$1 = state_30652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30652__$1,(7),ch,inst_30632);
} else {
if((state_val_30653 === (13))){
var inst_30646 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
var statearr_30657_30680 = state_30652__$1;
(statearr_30657_30680[(2)] = inst_30646);

(statearr_30657_30680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (6))){
var inst_30637 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
if(cljs.core.truth_(inst_30637)){
var statearr_30658_30681 = state_30652__$1;
(statearr_30658_30681[(1)] = (8));

} else {
var statearr_30659_30682 = state_30652__$1;
(statearr_30659_30682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (3))){
var inst_30650 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30652__$1,inst_30650);
} else {
if((state_val_30653 === (12))){
var state_30652__$1 = state_30652;
var statearr_30660_30683 = state_30652__$1;
(statearr_30660_30683[(2)] = null);

(statearr_30660_30683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (2))){
var inst_30629 = (state_30652[(7)]);
var state_30652__$1 = state_30652;
if(cljs.core.truth_(inst_30629)){
var statearr_30661_30684 = state_30652__$1;
(statearr_30661_30684[(1)] = (4));

} else {
var statearr_30662_30685 = state_30652__$1;
(statearr_30662_30685[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (11))){
var inst_30643 = cljs.core.async.close_BANG_.call(null,ch);
var state_30652__$1 = state_30652;
var statearr_30663_30686 = state_30652__$1;
(statearr_30663_30686[(2)] = inst_30643);

(statearr_30663_30686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (9))){
var state_30652__$1 = state_30652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30664_30687 = state_30652__$1;
(statearr_30664_30687[(1)] = (11));

} else {
var statearr_30665_30688 = state_30652__$1;
(statearr_30665_30688[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (5))){
var inst_30629 = (state_30652[(7)]);
var state_30652__$1 = state_30652;
var statearr_30666_30689 = state_30652__$1;
(statearr_30666_30689[(2)] = inst_30629);

(statearr_30666_30689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (10))){
var inst_30648 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
var statearr_30667_30690 = state_30652__$1;
(statearr_30667_30690[(2)] = inst_30648);

(statearr_30667_30690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (8))){
var inst_30629 = (state_30652[(7)]);
var inst_30639 = cljs.core.next.call(null,inst_30629);
var inst_30629__$1 = inst_30639;
var state_30652__$1 = (function (){var statearr_30668 = state_30652;
(statearr_30668[(7)] = inst_30629__$1);

return statearr_30668;
})();
var statearr_30669_30691 = state_30652__$1;
(statearr_30669_30691[(2)] = null);

(statearr_30669_30691[(1)] = (2));


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
});})(c__25598__auto__))
;
return ((function (switch__25536__auto__,c__25598__auto__){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_30673 = [null,null,null,null,null,null,null,null];
(statearr_30673[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_30673[(1)] = (1));

return statearr_30673;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_30652){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_30652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e30674){if((e30674 instanceof Object)){
var ex__25540__auto__ = e30674;
var statearr_30675_30692 = state_30652;
(statearr_30675_30692[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30693 = state_30652;
state_30652 = G__30693;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_30652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_30652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__))
})();
var state__25600__auto__ = (function (){var statearr_30676 = f__25599__auto__.call(null);
(statearr_30676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_30676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__))
);

return c__25598__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj30695 = {};
return obj30695;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__22362__auto__ = _;
if(and__22362__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__22362__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__23010__auto__ = (((_ == null))?null:_);
return (function (){var or__22374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj30697 = {};
return obj30697;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__22362__auto__ = m;
if(and__22362__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__22362__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__23010__auto__ = (((m == null))?null:m);
return (function (){var or__22374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__22362__auto__ = m;
if(and__22362__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__22362__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__23010__auto__ = (((m == null))?null:m);
return (function (){var or__22374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__22362__auto__ = m;
if(and__22362__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__22362__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__23010__auto__ = (((m == null))?null:m);
return (function (){var or__22374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t30919 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30919 = (function (cs,ch,mult,meta30920){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30920 = meta30920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30919.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30919.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30919.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30919.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30919.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30921){
var self__ = this;
var _30921__$1 = this;
return self__.meta30920;
});})(cs))
;

cljs.core.async.t30919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30921,meta30920__$1){
var self__ = this;
var _30921__$1 = this;
return (new cljs.core.async.t30919(self__.cs,self__.ch,self__.mult,meta30920__$1));
});})(cs))
;

cljs.core.async.t30919.cljs$lang$type = true;

cljs.core.async.t30919.cljs$lang$ctorStr = "cljs.core.async/t30919";

cljs.core.async.t30919.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async/t30919");
});})(cs))
;

cljs.core.async.__GT_t30919 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t30919(cs__$1,ch__$1,mult__$1,meta30920){
return (new cljs.core.async.t30919(cs__$1,ch__$1,mult__$1,meta30920));
});})(cs))
;

}

return (new cljs.core.async.t30919(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25598__auto___31140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___31140,cs,m,dchan,dctr,done){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___31140,cs,m,dchan,dctr,done){
return (function (state_31052){
var state_val_31053 = (state_31052[(1)]);
if((state_val_31053 === (7))){
var inst_31048 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31054_31141 = state_31052__$1;
(statearr_31054_31141[(2)] = inst_31048);

(statearr_31054_31141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (20))){
var inst_30953 = (state_31052[(7)]);
var inst_30963 = cljs.core.first.call(null,inst_30953);
var inst_30964 = cljs.core.nth.call(null,inst_30963,(0),null);
var inst_30965 = cljs.core.nth.call(null,inst_30963,(1),null);
var state_31052__$1 = (function (){var statearr_31055 = state_31052;
(statearr_31055[(8)] = inst_30964);

return statearr_31055;
})();
if(cljs.core.truth_(inst_30965)){
var statearr_31056_31142 = state_31052__$1;
(statearr_31056_31142[(1)] = (22));

} else {
var statearr_31057_31143 = state_31052__$1;
(statearr_31057_31143[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (27))){
var inst_30924 = (state_31052[(9)]);
var inst_31000 = (state_31052[(10)]);
var inst_30995 = (state_31052[(11)]);
var inst_30993 = (state_31052[(12)]);
var inst_31000__$1 = cljs.core._nth.call(null,inst_30993,inst_30995);
var inst_31001 = cljs.core.async.put_BANG_.call(null,inst_31000__$1,inst_30924,done);
var state_31052__$1 = (function (){var statearr_31058 = state_31052;
(statearr_31058[(10)] = inst_31000__$1);

return statearr_31058;
})();
if(cljs.core.truth_(inst_31001)){
var statearr_31059_31144 = state_31052__$1;
(statearr_31059_31144[(1)] = (30));

} else {
var statearr_31060_31145 = state_31052__$1;
(statearr_31060_31145[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (1))){
var state_31052__$1 = state_31052;
var statearr_31061_31146 = state_31052__$1;
(statearr_31061_31146[(2)] = null);

(statearr_31061_31146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (24))){
var inst_30953 = (state_31052[(7)]);
var inst_30970 = (state_31052[(2)]);
var inst_30971 = cljs.core.next.call(null,inst_30953);
var inst_30933 = inst_30971;
var inst_30934 = null;
var inst_30935 = (0);
var inst_30936 = (0);
var state_31052__$1 = (function (){var statearr_31062 = state_31052;
(statearr_31062[(13)] = inst_30936);

(statearr_31062[(14)] = inst_30934);

(statearr_31062[(15)] = inst_30933);

(statearr_31062[(16)] = inst_30935);

(statearr_31062[(17)] = inst_30970);

return statearr_31062;
})();
var statearr_31063_31147 = state_31052__$1;
(statearr_31063_31147[(2)] = null);

(statearr_31063_31147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (39))){
var state_31052__$1 = state_31052;
var statearr_31067_31148 = state_31052__$1;
(statearr_31067_31148[(2)] = null);

(statearr_31067_31148[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (4))){
var inst_30924 = (state_31052[(9)]);
var inst_30924__$1 = (state_31052[(2)]);
var inst_30925 = (inst_30924__$1 == null);
var state_31052__$1 = (function (){var statearr_31068 = state_31052;
(statearr_31068[(9)] = inst_30924__$1);

return statearr_31068;
})();
if(cljs.core.truth_(inst_30925)){
var statearr_31069_31149 = state_31052__$1;
(statearr_31069_31149[(1)] = (5));

} else {
var statearr_31070_31150 = state_31052__$1;
(statearr_31070_31150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (15))){
var inst_30936 = (state_31052[(13)]);
var inst_30934 = (state_31052[(14)]);
var inst_30933 = (state_31052[(15)]);
var inst_30935 = (state_31052[(16)]);
var inst_30949 = (state_31052[(2)]);
var inst_30950 = (inst_30936 + (1));
var tmp31064 = inst_30934;
var tmp31065 = inst_30933;
var tmp31066 = inst_30935;
var inst_30933__$1 = tmp31065;
var inst_30934__$1 = tmp31064;
var inst_30935__$1 = tmp31066;
var inst_30936__$1 = inst_30950;
var state_31052__$1 = (function (){var statearr_31071 = state_31052;
(statearr_31071[(13)] = inst_30936__$1);

(statearr_31071[(14)] = inst_30934__$1);

(statearr_31071[(15)] = inst_30933__$1);

(statearr_31071[(16)] = inst_30935__$1);

(statearr_31071[(18)] = inst_30949);

return statearr_31071;
})();
var statearr_31072_31151 = state_31052__$1;
(statearr_31072_31151[(2)] = null);

(statearr_31072_31151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (21))){
var inst_30974 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31076_31152 = state_31052__$1;
(statearr_31076_31152[(2)] = inst_30974);

(statearr_31076_31152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (31))){
var inst_31000 = (state_31052[(10)]);
var inst_31004 = done.call(null,null);
var inst_31005 = cljs.core.async.untap_STAR_.call(null,m,inst_31000);
var state_31052__$1 = (function (){var statearr_31077 = state_31052;
(statearr_31077[(19)] = inst_31004);

return statearr_31077;
})();
var statearr_31078_31153 = state_31052__$1;
(statearr_31078_31153[(2)] = inst_31005);

(statearr_31078_31153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (32))){
var inst_30992 = (state_31052[(20)]);
var inst_30994 = (state_31052[(21)]);
var inst_30995 = (state_31052[(11)]);
var inst_30993 = (state_31052[(12)]);
var inst_31007 = (state_31052[(2)]);
var inst_31008 = (inst_30995 + (1));
var tmp31073 = inst_30992;
var tmp31074 = inst_30994;
var tmp31075 = inst_30993;
var inst_30992__$1 = tmp31073;
var inst_30993__$1 = tmp31075;
var inst_30994__$1 = tmp31074;
var inst_30995__$1 = inst_31008;
var state_31052__$1 = (function (){var statearr_31079 = state_31052;
(statearr_31079[(20)] = inst_30992__$1);

(statearr_31079[(22)] = inst_31007);

(statearr_31079[(21)] = inst_30994__$1);

(statearr_31079[(11)] = inst_30995__$1);

(statearr_31079[(12)] = inst_30993__$1);

return statearr_31079;
})();
var statearr_31080_31154 = state_31052__$1;
(statearr_31080_31154[(2)] = null);

(statearr_31080_31154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (40))){
var inst_31020 = (state_31052[(23)]);
var inst_31024 = done.call(null,null);
var inst_31025 = cljs.core.async.untap_STAR_.call(null,m,inst_31020);
var state_31052__$1 = (function (){var statearr_31081 = state_31052;
(statearr_31081[(24)] = inst_31024);

return statearr_31081;
})();
var statearr_31082_31155 = state_31052__$1;
(statearr_31082_31155[(2)] = inst_31025);

(statearr_31082_31155[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (33))){
var inst_31011 = (state_31052[(25)]);
var inst_31013 = cljs.core.chunked_seq_QMARK_.call(null,inst_31011);
var state_31052__$1 = state_31052;
if(inst_31013){
var statearr_31083_31156 = state_31052__$1;
(statearr_31083_31156[(1)] = (36));

} else {
var statearr_31084_31157 = state_31052__$1;
(statearr_31084_31157[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (13))){
var inst_30943 = (state_31052[(26)]);
var inst_30946 = cljs.core.async.close_BANG_.call(null,inst_30943);
var state_31052__$1 = state_31052;
var statearr_31085_31158 = state_31052__$1;
(statearr_31085_31158[(2)] = inst_30946);

(statearr_31085_31158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (22))){
var inst_30964 = (state_31052[(8)]);
var inst_30967 = cljs.core.async.close_BANG_.call(null,inst_30964);
var state_31052__$1 = state_31052;
var statearr_31086_31159 = state_31052__$1;
(statearr_31086_31159[(2)] = inst_30967);

(statearr_31086_31159[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (36))){
var inst_31011 = (state_31052[(25)]);
var inst_31015 = cljs.core.chunk_first.call(null,inst_31011);
var inst_31016 = cljs.core.chunk_rest.call(null,inst_31011);
var inst_31017 = cljs.core.count.call(null,inst_31015);
var inst_30992 = inst_31016;
var inst_30993 = inst_31015;
var inst_30994 = inst_31017;
var inst_30995 = (0);
var state_31052__$1 = (function (){var statearr_31087 = state_31052;
(statearr_31087[(20)] = inst_30992);

(statearr_31087[(21)] = inst_30994);

(statearr_31087[(11)] = inst_30995);

(statearr_31087[(12)] = inst_30993);

return statearr_31087;
})();
var statearr_31088_31160 = state_31052__$1;
(statearr_31088_31160[(2)] = null);

(statearr_31088_31160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (41))){
var inst_31011 = (state_31052[(25)]);
var inst_31027 = (state_31052[(2)]);
var inst_31028 = cljs.core.next.call(null,inst_31011);
var inst_30992 = inst_31028;
var inst_30993 = null;
var inst_30994 = (0);
var inst_30995 = (0);
var state_31052__$1 = (function (){var statearr_31089 = state_31052;
(statearr_31089[(20)] = inst_30992);

(statearr_31089[(21)] = inst_30994);

(statearr_31089[(11)] = inst_30995);

(statearr_31089[(27)] = inst_31027);

(statearr_31089[(12)] = inst_30993);

return statearr_31089;
})();
var statearr_31090_31161 = state_31052__$1;
(statearr_31090_31161[(2)] = null);

(statearr_31090_31161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (43))){
var state_31052__$1 = state_31052;
var statearr_31091_31162 = state_31052__$1;
(statearr_31091_31162[(2)] = null);

(statearr_31091_31162[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (29))){
var inst_31036 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31092_31163 = state_31052__$1;
(statearr_31092_31163[(2)] = inst_31036);

(statearr_31092_31163[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (44))){
var inst_31045 = (state_31052[(2)]);
var state_31052__$1 = (function (){var statearr_31093 = state_31052;
(statearr_31093[(28)] = inst_31045);

return statearr_31093;
})();
var statearr_31094_31164 = state_31052__$1;
(statearr_31094_31164[(2)] = null);

(statearr_31094_31164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (6))){
var inst_30984 = (state_31052[(29)]);
var inst_30983 = cljs.core.deref.call(null,cs);
var inst_30984__$1 = cljs.core.keys.call(null,inst_30983);
var inst_30985 = cljs.core.count.call(null,inst_30984__$1);
var inst_30986 = cljs.core.reset_BANG_.call(null,dctr,inst_30985);
var inst_30991 = cljs.core.seq.call(null,inst_30984__$1);
var inst_30992 = inst_30991;
var inst_30993 = null;
var inst_30994 = (0);
var inst_30995 = (0);
var state_31052__$1 = (function (){var statearr_31095 = state_31052;
(statearr_31095[(20)] = inst_30992);

(statearr_31095[(21)] = inst_30994);

(statearr_31095[(30)] = inst_30986);

(statearr_31095[(29)] = inst_30984__$1);

(statearr_31095[(11)] = inst_30995);

(statearr_31095[(12)] = inst_30993);

return statearr_31095;
})();
var statearr_31096_31165 = state_31052__$1;
(statearr_31096_31165[(2)] = null);

(statearr_31096_31165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (28))){
var inst_30992 = (state_31052[(20)]);
var inst_31011 = (state_31052[(25)]);
var inst_31011__$1 = cljs.core.seq.call(null,inst_30992);
var state_31052__$1 = (function (){var statearr_31097 = state_31052;
(statearr_31097[(25)] = inst_31011__$1);

return statearr_31097;
})();
if(inst_31011__$1){
var statearr_31098_31166 = state_31052__$1;
(statearr_31098_31166[(1)] = (33));

} else {
var statearr_31099_31167 = state_31052__$1;
(statearr_31099_31167[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (25))){
var inst_30994 = (state_31052[(21)]);
var inst_30995 = (state_31052[(11)]);
var inst_30997 = (inst_30995 < inst_30994);
var inst_30998 = inst_30997;
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_30998)){
var statearr_31100_31168 = state_31052__$1;
(statearr_31100_31168[(1)] = (27));

} else {
var statearr_31101_31169 = state_31052__$1;
(statearr_31101_31169[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (34))){
var state_31052__$1 = state_31052;
var statearr_31102_31170 = state_31052__$1;
(statearr_31102_31170[(2)] = null);

(statearr_31102_31170[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (17))){
var state_31052__$1 = state_31052;
var statearr_31103_31171 = state_31052__$1;
(statearr_31103_31171[(2)] = null);

(statearr_31103_31171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (3))){
var inst_31050 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31052__$1,inst_31050);
} else {
if((state_val_31053 === (12))){
var inst_30979 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31104_31172 = state_31052__$1;
(statearr_31104_31172[(2)] = inst_30979);

(statearr_31104_31172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (2))){
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(4),ch);
} else {
if((state_val_31053 === (23))){
var state_31052__$1 = state_31052;
var statearr_31105_31173 = state_31052__$1;
(statearr_31105_31173[(2)] = null);

(statearr_31105_31173[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (35))){
var inst_31034 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31106_31174 = state_31052__$1;
(statearr_31106_31174[(2)] = inst_31034);

(statearr_31106_31174[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (19))){
var inst_30953 = (state_31052[(7)]);
var inst_30957 = cljs.core.chunk_first.call(null,inst_30953);
var inst_30958 = cljs.core.chunk_rest.call(null,inst_30953);
var inst_30959 = cljs.core.count.call(null,inst_30957);
var inst_30933 = inst_30958;
var inst_30934 = inst_30957;
var inst_30935 = inst_30959;
var inst_30936 = (0);
var state_31052__$1 = (function (){var statearr_31107 = state_31052;
(statearr_31107[(13)] = inst_30936);

(statearr_31107[(14)] = inst_30934);

(statearr_31107[(15)] = inst_30933);

(statearr_31107[(16)] = inst_30935);

return statearr_31107;
})();
var statearr_31108_31175 = state_31052__$1;
(statearr_31108_31175[(2)] = null);

(statearr_31108_31175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (11))){
var inst_30933 = (state_31052[(15)]);
var inst_30953 = (state_31052[(7)]);
var inst_30953__$1 = cljs.core.seq.call(null,inst_30933);
var state_31052__$1 = (function (){var statearr_31109 = state_31052;
(statearr_31109[(7)] = inst_30953__$1);

return statearr_31109;
})();
if(inst_30953__$1){
var statearr_31110_31176 = state_31052__$1;
(statearr_31110_31176[(1)] = (16));

} else {
var statearr_31111_31177 = state_31052__$1;
(statearr_31111_31177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (9))){
var inst_30981 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31112_31178 = state_31052__$1;
(statearr_31112_31178[(2)] = inst_30981);

(statearr_31112_31178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (5))){
var inst_30931 = cljs.core.deref.call(null,cs);
var inst_30932 = cljs.core.seq.call(null,inst_30931);
var inst_30933 = inst_30932;
var inst_30934 = null;
var inst_30935 = (0);
var inst_30936 = (0);
var state_31052__$1 = (function (){var statearr_31113 = state_31052;
(statearr_31113[(13)] = inst_30936);

(statearr_31113[(14)] = inst_30934);

(statearr_31113[(15)] = inst_30933);

(statearr_31113[(16)] = inst_30935);

return statearr_31113;
})();
var statearr_31114_31179 = state_31052__$1;
(statearr_31114_31179[(2)] = null);

(statearr_31114_31179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (14))){
var state_31052__$1 = state_31052;
var statearr_31115_31180 = state_31052__$1;
(statearr_31115_31180[(2)] = null);

(statearr_31115_31180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (45))){
var inst_31042 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31116_31181 = state_31052__$1;
(statearr_31116_31181[(2)] = inst_31042);

(statearr_31116_31181[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (26))){
var inst_30984 = (state_31052[(29)]);
var inst_31038 = (state_31052[(2)]);
var inst_31039 = cljs.core.seq.call(null,inst_30984);
var state_31052__$1 = (function (){var statearr_31117 = state_31052;
(statearr_31117[(31)] = inst_31038);

return statearr_31117;
})();
if(inst_31039){
var statearr_31118_31182 = state_31052__$1;
(statearr_31118_31182[(1)] = (42));

} else {
var statearr_31119_31183 = state_31052__$1;
(statearr_31119_31183[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (16))){
var inst_30953 = (state_31052[(7)]);
var inst_30955 = cljs.core.chunked_seq_QMARK_.call(null,inst_30953);
var state_31052__$1 = state_31052;
if(inst_30955){
var statearr_31120_31184 = state_31052__$1;
(statearr_31120_31184[(1)] = (19));

} else {
var statearr_31121_31185 = state_31052__$1;
(statearr_31121_31185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (38))){
var inst_31031 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31122_31186 = state_31052__$1;
(statearr_31122_31186[(2)] = inst_31031);

(statearr_31122_31186[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (30))){
var state_31052__$1 = state_31052;
var statearr_31123_31187 = state_31052__$1;
(statearr_31123_31187[(2)] = null);

(statearr_31123_31187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (10))){
var inst_30936 = (state_31052[(13)]);
var inst_30934 = (state_31052[(14)]);
var inst_30942 = cljs.core._nth.call(null,inst_30934,inst_30936);
var inst_30943 = cljs.core.nth.call(null,inst_30942,(0),null);
var inst_30944 = cljs.core.nth.call(null,inst_30942,(1),null);
var state_31052__$1 = (function (){var statearr_31124 = state_31052;
(statearr_31124[(26)] = inst_30943);

return statearr_31124;
})();
if(cljs.core.truth_(inst_30944)){
var statearr_31125_31188 = state_31052__$1;
(statearr_31125_31188[(1)] = (13));

} else {
var statearr_31126_31189 = state_31052__$1;
(statearr_31126_31189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (18))){
var inst_30977 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31127_31190 = state_31052__$1;
(statearr_31127_31190[(2)] = inst_30977);

(statearr_31127_31190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (42))){
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(45),dchan);
} else {
if((state_val_31053 === (37))){
var inst_30924 = (state_31052[(9)]);
var inst_31020 = (state_31052[(23)]);
var inst_31011 = (state_31052[(25)]);
var inst_31020__$1 = cljs.core.first.call(null,inst_31011);
var inst_31021 = cljs.core.async.put_BANG_.call(null,inst_31020__$1,inst_30924,done);
var state_31052__$1 = (function (){var statearr_31128 = state_31052;
(statearr_31128[(23)] = inst_31020__$1);

return statearr_31128;
})();
if(cljs.core.truth_(inst_31021)){
var statearr_31129_31191 = state_31052__$1;
(statearr_31129_31191[(1)] = (39));

} else {
var statearr_31130_31192 = state_31052__$1;
(statearr_31130_31192[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (8))){
var inst_30936 = (state_31052[(13)]);
var inst_30935 = (state_31052[(16)]);
var inst_30938 = (inst_30936 < inst_30935);
var inst_30939 = inst_30938;
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_30939)){
var statearr_31131_31193 = state_31052__$1;
(statearr_31131_31193[(1)] = (10));

} else {
var statearr_31132_31194 = state_31052__$1;
(statearr_31132_31194[(1)] = (11));

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
});})(c__25598__auto___31140,cs,m,dchan,dctr,done))
;
return ((function (switch__25536__auto__,c__25598__auto___31140,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25537__auto__ = null;
var cljs$core$async$mult_$_state_machine__25537__auto____0 = (function (){
var statearr_31136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31136[(0)] = cljs$core$async$mult_$_state_machine__25537__auto__);

(statearr_31136[(1)] = (1));

return statearr_31136;
});
var cljs$core$async$mult_$_state_machine__25537__auto____1 = (function (state_31052){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_31052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e31137){if((e31137 instanceof Object)){
var ex__25540__auto__ = e31137;
var statearr_31138_31195 = state_31052;
(statearr_31138_31195[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31196 = state_31052;
state_31052 = G__31196;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25537__auto__ = function(state_31052){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25537__auto____1.call(this,state_31052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25537__auto____0;
cljs$core$async$mult_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25537__auto____1;
return cljs$core$async$mult_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___31140,cs,m,dchan,dctr,done))
})();
var state__25600__auto__ = (function (){var statearr_31139 = f__25599__auto__.call(null);
(statearr_31139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___31140);

return statearr_31139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___31140,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__31198 = arguments.length;
switch (G__31198) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj31201 = {};
return obj31201;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__22362__auto__ = m;
if(and__22362__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__22362__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__23010__auto__ = (((m == null))?null:m);
return (function (){var or__22374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__22362__auto__ = m;
if(and__22362__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__22362__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__23010__auto__ = (((m == null))?null:m);
return (function (){var or__22374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__22362__auto__ = m;
if(and__22362__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__22362__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__23010__auto__ = (((m == null))?null:m);
return (function (){var or__22374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__22362__auto__ = m;
if(and__22362__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__22362__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__23010__auto__ = (((m == null))?null:m);
return (function (){var or__22374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__22362__auto__ = m;
if(and__22362__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__22362__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__23010__auto__ = (((m == null))?null:m);
return (function (){var or__22374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__23414__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23414__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31206){
var map__31207 = p__31206;
var map__31207__$1 = ((cljs.core.seq_QMARK_.call(null,map__31207))?cljs.core.apply.call(null,cljs.core.hash_map,map__31207):map__31207);
var opts = map__31207__$1;
var statearr_31208_31211 = state;
(statearr_31208_31211[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31207,map__31207__$1,opts){
return (function (val){
var statearr_31209_31212 = state;
(statearr_31209_31212[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31207,map__31207__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_31210_31213 = state;
(statearr_31210_31213[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31202){
var G__31203 = cljs.core.first.call(null,seq31202);
var seq31202__$1 = cljs.core.next.call(null,seq31202);
var G__31204 = cljs.core.first.call(null,seq31202__$1);
var seq31202__$2 = cljs.core.next.call(null,seq31202__$1);
var G__31205 = cljs.core.first.call(null,seq31202__$2);
var seq31202__$3 = cljs.core.next.call(null,seq31202__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31203,G__31204,G__31205,seq31202__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t31333 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31333 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31334){
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
this.meta31334 = meta31334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31333.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31333.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31333.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31333.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31333.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31333.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31333.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31335){
var self__ = this;
var _31335__$1 = this;
return self__.meta31334;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31335,meta31334__$1){
var self__ = this;
var _31335__$1 = this;
return (new cljs.core.async.t31333(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31334__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31333.cljs$lang$type = true;

cljs.core.async.t31333.cljs$lang$ctorStr = "cljs.core.async/t31333";

cljs.core.async.t31333.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async/t31333");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31333 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t31333(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31334){
return (new cljs.core.async.t31333(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31334));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31333(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25598__auto___31452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___31452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___31452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31405){
var state_val_31406 = (state_31405[(1)]);
if((state_val_31406 === (7))){
var inst_31349 = (state_31405[(7)]);
var inst_31354 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31349);
var state_31405__$1 = state_31405;
var statearr_31407_31453 = state_31405__$1;
(statearr_31407_31453[(2)] = inst_31354);

(statearr_31407_31453[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (20))){
var inst_31364 = (state_31405[(8)]);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31405__$1,(23),out,inst_31364);
} else {
if((state_val_31406 === (1))){
var inst_31339 = (state_31405[(9)]);
var inst_31339__$1 = calc_state.call(null);
var inst_31340 = cljs.core.seq_QMARK_.call(null,inst_31339__$1);
var state_31405__$1 = (function (){var statearr_31408 = state_31405;
(statearr_31408[(9)] = inst_31339__$1);

return statearr_31408;
})();
if(inst_31340){
var statearr_31409_31454 = state_31405__$1;
(statearr_31409_31454[(1)] = (2));

} else {
var statearr_31410_31455 = state_31405__$1;
(statearr_31410_31455[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (24))){
var inst_31357 = (state_31405[(10)]);
var inst_31349 = inst_31357;
var state_31405__$1 = (function (){var statearr_31411 = state_31405;
(statearr_31411[(7)] = inst_31349);

return statearr_31411;
})();
var statearr_31412_31456 = state_31405__$1;
(statearr_31412_31456[(2)] = null);

(statearr_31412_31456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (4))){
var inst_31339 = (state_31405[(9)]);
var inst_31345 = (state_31405[(2)]);
var inst_31346 = cljs.core.get.call(null,inst_31345,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31347 = cljs.core.get.call(null,inst_31345,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31348 = cljs.core.get.call(null,inst_31345,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31349 = inst_31339;
var state_31405__$1 = (function (){var statearr_31413 = state_31405;
(statearr_31413[(11)] = inst_31347);

(statearr_31413[(12)] = inst_31348);

(statearr_31413[(7)] = inst_31349);

(statearr_31413[(13)] = inst_31346);

return statearr_31413;
})();
var statearr_31414_31457 = state_31405__$1;
(statearr_31414_31457[(2)] = null);

(statearr_31414_31457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (15))){
var state_31405__$1 = state_31405;
var statearr_31415_31458 = state_31405__$1;
(statearr_31415_31458[(2)] = null);

(statearr_31415_31458[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (21))){
var inst_31357 = (state_31405[(10)]);
var inst_31349 = inst_31357;
var state_31405__$1 = (function (){var statearr_31416 = state_31405;
(statearr_31416[(7)] = inst_31349);

return statearr_31416;
})();
var statearr_31417_31459 = state_31405__$1;
(statearr_31417_31459[(2)] = null);

(statearr_31417_31459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (13))){
var inst_31401 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31418_31460 = state_31405__$1;
(statearr_31418_31460[(2)] = inst_31401);

(statearr_31418_31460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (22))){
var inst_31399 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31419_31461 = state_31405__$1;
(statearr_31419_31461[(2)] = inst_31399);

(statearr_31419_31461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (6))){
var inst_31403 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31405__$1,inst_31403);
} else {
if((state_val_31406 === (25))){
var state_31405__$1 = state_31405;
var statearr_31420_31462 = state_31405__$1;
(statearr_31420_31462[(2)] = null);

(statearr_31420_31462[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (17))){
var inst_31379 = (state_31405[(14)]);
var state_31405__$1 = state_31405;
var statearr_31421_31463 = state_31405__$1;
(statearr_31421_31463[(2)] = inst_31379);

(statearr_31421_31463[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (3))){
var inst_31339 = (state_31405[(9)]);
var state_31405__$1 = state_31405;
var statearr_31422_31464 = state_31405__$1;
(statearr_31422_31464[(2)] = inst_31339);

(statearr_31422_31464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (12))){
var inst_31365 = (state_31405[(15)]);
var inst_31360 = (state_31405[(16)]);
var inst_31379 = (state_31405[(14)]);
var inst_31379__$1 = inst_31360.call(null,inst_31365);
var state_31405__$1 = (function (){var statearr_31423 = state_31405;
(statearr_31423[(14)] = inst_31379__$1);

return statearr_31423;
})();
if(cljs.core.truth_(inst_31379__$1)){
var statearr_31424_31465 = state_31405__$1;
(statearr_31424_31465[(1)] = (17));

} else {
var statearr_31425_31466 = state_31405__$1;
(statearr_31425_31466[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (2))){
var inst_31339 = (state_31405[(9)]);
var inst_31342 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31339);
var state_31405__$1 = state_31405;
var statearr_31426_31467 = state_31405__$1;
(statearr_31426_31467[(2)] = inst_31342);

(statearr_31426_31467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (23))){
var inst_31390 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
if(cljs.core.truth_(inst_31390)){
var statearr_31427_31468 = state_31405__$1;
(statearr_31427_31468[(1)] = (24));

} else {
var statearr_31428_31469 = state_31405__$1;
(statearr_31428_31469[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (19))){
var inst_31387 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
if(cljs.core.truth_(inst_31387)){
var statearr_31429_31470 = state_31405__$1;
(statearr_31429_31470[(1)] = (20));

} else {
var statearr_31430_31471 = state_31405__$1;
(statearr_31430_31471[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (11))){
var inst_31364 = (state_31405[(8)]);
var inst_31370 = (inst_31364 == null);
var state_31405__$1 = state_31405;
if(cljs.core.truth_(inst_31370)){
var statearr_31431_31472 = state_31405__$1;
(statearr_31431_31472[(1)] = (14));

} else {
var statearr_31432_31473 = state_31405__$1;
(statearr_31432_31473[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (9))){
var inst_31357 = (state_31405[(10)]);
var inst_31357__$1 = (state_31405[(2)]);
var inst_31358 = cljs.core.get.call(null,inst_31357__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31359 = cljs.core.get.call(null,inst_31357__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31360 = cljs.core.get.call(null,inst_31357__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31405__$1 = (function (){var statearr_31433 = state_31405;
(statearr_31433[(16)] = inst_31360);

(statearr_31433[(17)] = inst_31359);

(statearr_31433[(10)] = inst_31357__$1);

return statearr_31433;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31405__$1,(10),inst_31358);
} else {
if((state_val_31406 === (5))){
var inst_31349 = (state_31405[(7)]);
var inst_31352 = cljs.core.seq_QMARK_.call(null,inst_31349);
var state_31405__$1 = state_31405;
if(inst_31352){
var statearr_31434_31474 = state_31405__$1;
(statearr_31434_31474[(1)] = (7));

} else {
var statearr_31435_31475 = state_31405__$1;
(statearr_31435_31475[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (14))){
var inst_31365 = (state_31405[(15)]);
var inst_31372 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31365);
var state_31405__$1 = state_31405;
var statearr_31436_31476 = state_31405__$1;
(statearr_31436_31476[(2)] = inst_31372);

(statearr_31436_31476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (26))){
var inst_31395 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31437_31477 = state_31405__$1;
(statearr_31437_31477[(2)] = inst_31395);

(statearr_31437_31477[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (16))){
var inst_31375 = (state_31405[(2)]);
var inst_31376 = calc_state.call(null);
var inst_31349 = inst_31376;
var state_31405__$1 = (function (){var statearr_31438 = state_31405;
(statearr_31438[(18)] = inst_31375);

(statearr_31438[(7)] = inst_31349);

return statearr_31438;
})();
var statearr_31439_31478 = state_31405__$1;
(statearr_31439_31478[(2)] = null);

(statearr_31439_31478[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (10))){
var inst_31365 = (state_31405[(15)]);
var inst_31364 = (state_31405[(8)]);
var inst_31363 = (state_31405[(2)]);
var inst_31364__$1 = cljs.core.nth.call(null,inst_31363,(0),null);
var inst_31365__$1 = cljs.core.nth.call(null,inst_31363,(1),null);
var inst_31366 = (inst_31364__$1 == null);
var inst_31367 = cljs.core._EQ_.call(null,inst_31365__$1,change);
var inst_31368 = (inst_31366) || (inst_31367);
var state_31405__$1 = (function (){var statearr_31440 = state_31405;
(statearr_31440[(15)] = inst_31365__$1);

(statearr_31440[(8)] = inst_31364__$1);

return statearr_31440;
})();
if(cljs.core.truth_(inst_31368)){
var statearr_31441_31479 = state_31405__$1;
(statearr_31441_31479[(1)] = (11));

} else {
var statearr_31442_31480 = state_31405__$1;
(statearr_31442_31480[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (18))){
var inst_31365 = (state_31405[(15)]);
var inst_31360 = (state_31405[(16)]);
var inst_31359 = (state_31405[(17)]);
var inst_31382 = cljs.core.empty_QMARK_.call(null,inst_31360);
var inst_31383 = inst_31359.call(null,inst_31365);
var inst_31384 = cljs.core.not.call(null,inst_31383);
var inst_31385 = (inst_31382) && (inst_31384);
var state_31405__$1 = state_31405;
var statearr_31443_31481 = state_31405__$1;
(statearr_31443_31481[(2)] = inst_31385);

(statearr_31443_31481[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (8))){
var inst_31349 = (state_31405[(7)]);
var state_31405__$1 = state_31405;
var statearr_31444_31482 = state_31405__$1;
(statearr_31444_31482[(2)] = inst_31349);

(statearr_31444_31482[(1)] = (9));


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
});})(c__25598__auto___31452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25536__auto__,c__25598__auto___31452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25537__auto__ = null;
var cljs$core$async$mix_$_state_machine__25537__auto____0 = (function (){
var statearr_31448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31448[(0)] = cljs$core$async$mix_$_state_machine__25537__auto__);

(statearr_31448[(1)] = (1));

return statearr_31448;
});
var cljs$core$async$mix_$_state_machine__25537__auto____1 = (function (state_31405){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_31405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e31449){if((e31449 instanceof Object)){
var ex__25540__auto__ = e31449;
var statearr_31450_31483 = state_31405;
(statearr_31450_31483[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31484 = state_31405;
state_31405 = G__31484;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25537__auto__ = function(state_31405){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25537__auto____1.call(this,state_31405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25537__auto____0;
cljs$core$async$mix_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25537__auto____1;
return cljs$core$async$mix_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___31452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25600__auto__ = (function (){var statearr_31451 = f__25599__auto__.call(null);
(statearr_31451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___31452);

return statearr_31451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___31452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj31486 = {};
return obj31486;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__22362__auto__ = p;
if(and__22362__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__22362__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__23010__auto__ = (((p == null))?null:p);
return (function (){var or__22374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__22362__auto__ = p;
if(and__22362__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__22362__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__23010__auto__ = (((p == null))?null:p);
return (function (){var or__22374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__31488 = arguments.length;
switch (G__31488) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__22362__auto__ = p;
if(and__22362__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__22362__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23010__auto__ = (((p == null))?null:p);
return (function (){var or__22374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__22362__auto__ = p;
if(and__22362__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__22362__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__23010__auto__ = (((p == null))?null:p);
return (function (){var or__22374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23010__auto__)]);
if(or__22374__auto__){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__22374__auto____$1){
return or__22374__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__31492 = arguments.length;
switch (G__31492) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22374__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22374__auto__,mults){
return (function (p1__31490_SHARP_){
if(cljs.core.truth_(p1__31490_SHARP_.call(null,topic))){
return p1__31490_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31490_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22374__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31493 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31493 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta31494){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta31494 = meta31494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31493.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31493.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31493.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t31493.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31493.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31493.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31495){
var self__ = this;
var _31495__$1 = this;
return self__.meta31494;
});})(mults,ensure_mult))
;

cljs.core.async.t31493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31495,meta31494__$1){
var self__ = this;
var _31495__$1 = this;
return (new cljs.core.async.t31493(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta31494__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31493.cljs$lang$type = true;

cljs.core.async.t31493.cljs$lang$ctorStr = "cljs.core.async/t31493";

cljs.core.async.t31493.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async/t31493");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31493 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t31493(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta31494){
return (new cljs.core.async.t31493(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta31494));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31493(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25598__auto___31616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___31616,mults,ensure_mult,p){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___31616,mults,ensure_mult,p){
return (function (state_31567){
var state_val_31568 = (state_31567[(1)]);
if((state_val_31568 === (7))){
var inst_31563 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31569_31617 = state_31567__$1;
(statearr_31569_31617[(2)] = inst_31563);

(statearr_31569_31617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (20))){
var state_31567__$1 = state_31567;
var statearr_31570_31618 = state_31567__$1;
(statearr_31570_31618[(2)] = null);

(statearr_31570_31618[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (1))){
var state_31567__$1 = state_31567;
var statearr_31571_31619 = state_31567__$1;
(statearr_31571_31619[(2)] = null);

(statearr_31571_31619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (24))){
var inst_31546 = (state_31567[(7)]);
var inst_31555 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31546);
var state_31567__$1 = state_31567;
var statearr_31572_31620 = state_31567__$1;
(statearr_31572_31620[(2)] = inst_31555);

(statearr_31572_31620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (4))){
var inst_31498 = (state_31567[(8)]);
var inst_31498__$1 = (state_31567[(2)]);
var inst_31499 = (inst_31498__$1 == null);
var state_31567__$1 = (function (){var statearr_31573 = state_31567;
(statearr_31573[(8)] = inst_31498__$1);

return statearr_31573;
})();
if(cljs.core.truth_(inst_31499)){
var statearr_31574_31621 = state_31567__$1;
(statearr_31574_31621[(1)] = (5));

} else {
var statearr_31575_31622 = state_31567__$1;
(statearr_31575_31622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (15))){
var inst_31540 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31576_31623 = state_31567__$1;
(statearr_31576_31623[(2)] = inst_31540);

(statearr_31576_31623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (21))){
var inst_31560 = (state_31567[(2)]);
var state_31567__$1 = (function (){var statearr_31577 = state_31567;
(statearr_31577[(9)] = inst_31560);

return statearr_31577;
})();
var statearr_31578_31624 = state_31567__$1;
(statearr_31578_31624[(2)] = null);

(statearr_31578_31624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (13))){
var inst_31522 = (state_31567[(10)]);
var inst_31524 = cljs.core.chunked_seq_QMARK_.call(null,inst_31522);
var state_31567__$1 = state_31567;
if(inst_31524){
var statearr_31579_31625 = state_31567__$1;
(statearr_31579_31625[(1)] = (16));

} else {
var statearr_31580_31626 = state_31567__$1;
(statearr_31580_31626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (22))){
var inst_31552 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
if(cljs.core.truth_(inst_31552)){
var statearr_31581_31627 = state_31567__$1;
(statearr_31581_31627[(1)] = (23));

} else {
var statearr_31582_31628 = state_31567__$1;
(statearr_31582_31628[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (6))){
var inst_31546 = (state_31567[(7)]);
var inst_31548 = (state_31567[(11)]);
var inst_31498 = (state_31567[(8)]);
var inst_31546__$1 = topic_fn.call(null,inst_31498);
var inst_31547 = cljs.core.deref.call(null,mults);
var inst_31548__$1 = cljs.core.get.call(null,inst_31547,inst_31546__$1);
var state_31567__$1 = (function (){var statearr_31583 = state_31567;
(statearr_31583[(7)] = inst_31546__$1);

(statearr_31583[(11)] = inst_31548__$1);

return statearr_31583;
})();
if(cljs.core.truth_(inst_31548__$1)){
var statearr_31584_31629 = state_31567__$1;
(statearr_31584_31629[(1)] = (19));

} else {
var statearr_31585_31630 = state_31567__$1;
(statearr_31585_31630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (25))){
var inst_31557 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31586_31631 = state_31567__$1;
(statearr_31586_31631[(2)] = inst_31557);

(statearr_31586_31631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (17))){
var inst_31522 = (state_31567[(10)]);
var inst_31531 = cljs.core.first.call(null,inst_31522);
var inst_31532 = cljs.core.async.muxch_STAR_.call(null,inst_31531);
var inst_31533 = cljs.core.async.close_BANG_.call(null,inst_31532);
var inst_31534 = cljs.core.next.call(null,inst_31522);
var inst_31508 = inst_31534;
var inst_31509 = null;
var inst_31510 = (0);
var inst_31511 = (0);
var state_31567__$1 = (function (){var statearr_31587 = state_31567;
(statearr_31587[(12)] = inst_31508);

(statearr_31587[(13)] = inst_31533);

(statearr_31587[(14)] = inst_31511);

(statearr_31587[(15)] = inst_31510);

(statearr_31587[(16)] = inst_31509);

return statearr_31587;
})();
var statearr_31588_31632 = state_31567__$1;
(statearr_31588_31632[(2)] = null);

(statearr_31588_31632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (3))){
var inst_31565 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31567__$1,inst_31565);
} else {
if((state_val_31568 === (12))){
var inst_31542 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31589_31633 = state_31567__$1;
(statearr_31589_31633[(2)] = inst_31542);

(statearr_31589_31633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (2))){
var state_31567__$1 = state_31567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31567__$1,(4),ch);
} else {
if((state_val_31568 === (23))){
var state_31567__$1 = state_31567;
var statearr_31590_31634 = state_31567__$1;
(statearr_31590_31634[(2)] = null);

(statearr_31590_31634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (19))){
var inst_31548 = (state_31567[(11)]);
var inst_31498 = (state_31567[(8)]);
var inst_31550 = cljs.core.async.muxch_STAR_.call(null,inst_31548);
var state_31567__$1 = state_31567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31567__$1,(22),inst_31550,inst_31498);
} else {
if((state_val_31568 === (11))){
var inst_31508 = (state_31567[(12)]);
var inst_31522 = (state_31567[(10)]);
var inst_31522__$1 = cljs.core.seq.call(null,inst_31508);
var state_31567__$1 = (function (){var statearr_31591 = state_31567;
(statearr_31591[(10)] = inst_31522__$1);

return statearr_31591;
})();
if(inst_31522__$1){
var statearr_31592_31635 = state_31567__$1;
(statearr_31592_31635[(1)] = (13));

} else {
var statearr_31593_31636 = state_31567__$1;
(statearr_31593_31636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (9))){
var inst_31544 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31594_31637 = state_31567__$1;
(statearr_31594_31637[(2)] = inst_31544);

(statearr_31594_31637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (5))){
var inst_31505 = cljs.core.deref.call(null,mults);
var inst_31506 = cljs.core.vals.call(null,inst_31505);
var inst_31507 = cljs.core.seq.call(null,inst_31506);
var inst_31508 = inst_31507;
var inst_31509 = null;
var inst_31510 = (0);
var inst_31511 = (0);
var state_31567__$1 = (function (){var statearr_31595 = state_31567;
(statearr_31595[(12)] = inst_31508);

(statearr_31595[(14)] = inst_31511);

(statearr_31595[(15)] = inst_31510);

(statearr_31595[(16)] = inst_31509);

return statearr_31595;
})();
var statearr_31596_31638 = state_31567__$1;
(statearr_31596_31638[(2)] = null);

(statearr_31596_31638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (14))){
var state_31567__$1 = state_31567;
var statearr_31600_31639 = state_31567__$1;
(statearr_31600_31639[(2)] = null);

(statearr_31600_31639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (16))){
var inst_31522 = (state_31567[(10)]);
var inst_31526 = cljs.core.chunk_first.call(null,inst_31522);
var inst_31527 = cljs.core.chunk_rest.call(null,inst_31522);
var inst_31528 = cljs.core.count.call(null,inst_31526);
var inst_31508 = inst_31527;
var inst_31509 = inst_31526;
var inst_31510 = inst_31528;
var inst_31511 = (0);
var state_31567__$1 = (function (){var statearr_31601 = state_31567;
(statearr_31601[(12)] = inst_31508);

(statearr_31601[(14)] = inst_31511);

(statearr_31601[(15)] = inst_31510);

(statearr_31601[(16)] = inst_31509);

return statearr_31601;
})();
var statearr_31602_31640 = state_31567__$1;
(statearr_31602_31640[(2)] = null);

(statearr_31602_31640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (10))){
var inst_31508 = (state_31567[(12)]);
var inst_31511 = (state_31567[(14)]);
var inst_31510 = (state_31567[(15)]);
var inst_31509 = (state_31567[(16)]);
var inst_31516 = cljs.core._nth.call(null,inst_31509,inst_31511);
var inst_31517 = cljs.core.async.muxch_STAR_.call(null,inst_31516);
var inst_31518 = cljs.core.async.close_BANG_.call(null,inst_31517);
var inst_31519 = (inst_31511 + (1));
var tmp31597 = inst_31508;
var tmp31598 = inst_31510;
var tmp31599 = inst_31509;
var inst_31508__$1 = tmp31597;
var inst_31509__$1 = tmp31599;
var inst_31510__$1 = tmp31598;
var inst_31511__$1 = inst_31519;
var state_31567__$1 = (function (){var statearr_31603 = state_31567;
(statearr_31603[(12)] = inst_31508__$1);

(statearr_31603[(14)] = inst_31511__$1);

(statearr_31603[(15)] = inst_31510__$1);

(statearr_31603[(17)] = inst_31518);

(statearr_31603[(16)] = inst_31509__$1);

return statearr_31603;
})();
var statearr_31604_31641 = state_31567__$1;
(statearr_31604_31641[(2)] = null);

(statearr_31604_31641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (18))){
var inst_31537 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31605_31642 = state_31567__$1;
(statearr_31605_31642[(2)] = inst_31537);

(statearr_31605_31642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (8))){
var inst_31511 = (state_31567[(14)]);
var inst_31510 = (state_31567[(15)]);
var inst_31513 = (inst_31511 < inst_31510);
var inst_31514 = inst_31513;
var state_31567__$1 = state_31567;
if(cljs.core.truth_(inst_31514)){
var statearr_31606_31643 = state_31567__$1;
(statearr_31606_31643[(1)] = (10));

} else {
var statearr_31607_31644 = state_31567__$1;
(statearr_31607_31644[(1)] = (11));

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
});})(c__25598__auto___31616,mults,ensure_mult,p))
;
return ((function (switch__25536__auto__,c__25598__auto___31616,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_31611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31611[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_31611[(1)] = (1));

return statearr_31611;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_31567){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_31567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e31612){if((e31612 instanceof Object)){
var ex__25540__auto__ = e31612;
var statearr_31613_31645 = state_31567;
(statearr_31613_31645[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31646 = state_31567;
state_31567 = G__31646;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_31567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_31567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___31616,mults,ensure_mult,p))
})();
var state__25600__auto__ = (function (){var statearr_31614 = f__25599__auto__.call(null);
(statearr_31614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___31616);

return statearr_31614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___31616,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__31648 = arguments.length;
switch (G__31648) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__31651 = arguments.length;
switch (G__31651) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__31654 = arguments.length;
switch (G__31654) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__25598__auto___31724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___31724,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___31724,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31693){
var state_val_31694 = (state_31693[(1)]);
if((state_val_31694 === (7))){
var state_31693__$1 = state_31693;
var statearr_31695_31725 = state_31693__$1;
(statearr_31695_31725[(2)] = null);

(statearr_31695_31725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (1))){
var state_31693__$1 = state_31693;
var statearr_31696_31726 = state_31693__$1;
(statearr_31696_31726[(2)] = null);

(statearr_31696_31726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (4))){
var inst_31657 = (state_31693[(7)]);
var inst_31659 = (inst_31657 < cnt);
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31659)){
var statearr_31697_31727 = state_31693__$1;
(statearr_31697_31727[(1)] = (6));

} else {
var statearr_31698_31728 = state_31693__$1;
(statearr_31698_31728[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (15))){
var inst_31689 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31699_31729 = state_31693__$1;
(statearr_31699_31729[(2)] = inst_31689);

(statearr_31699_31729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (13))){
var inst_31682 = cljs.core.async.close_BANG_.call(null,out);
var state_31693__$1 = state_31693;
var statearr_31700_31730 = state_31693__$1;
(statearr_31700_31730[(2)] = inst_31682);

(statearr_31700_31730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (6))){
var state_31693__$1 = state_31693;
var statearr_31701_31731 = state_31693__$1;
(statearr_31701_31731[(2)] = null);

(statearr_31701_31731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (3))){
var inst_31691 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31693__$1,inst_31691);
} else {
if((state_val_31694 === (12))){
var inst_31679 = (state_31693[(8)]);
var inst_31679__$1 = (state_31693[(2)]);
var inst_31680 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31679__$1);
var state_31693__$1 = (function (){var statearr_31702 = state_31693;
(statearr_31702[(8)] = inst_31679__$1);

return statearr_31702;
})();
if(cljs.core.truth_(inst_31680)){
var statearr_31703_31732 = state_31693__$1;
(statearr_31703_31732[(1)] = (13));

} else {
var statearr_31704_31733 = state_31693__$1;
(statearr_31704_31733[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (2))){
var inst_31656 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31657 = (0);
var state_31693__$1 = (function (){var statearr_31705 = state_31693;
(statearr_31705[(7)] = inst_31657);

(statearr_31705[(9)] = inst_31656);

return statearr_31705;
})();
var statearr_31706_31734 = state_31693__$1;
(statearr_31706_31734[(2)] = null);

(statearr_31706_31734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (11))){
var inst_31657 = (state_31693[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31693,(10),Object,null,(9));
var inst_31666 = chs__$1.call(null,inst_31657);
var inst_31667 = done.call(null,inst_31657);
var inst_31668 = cljs.core.async.take_BANG_.call(null,inst_31666,inst_31667);
var state_31693__$1 = state_31693;
var statearr_31707_31735 = state_31693__$1;
(statearr_31707_31735[(2)] = inst_31668);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (9))){
var inst_31657 = (state_31693[(7)]);
var inst_31670 = (state_31693[(2)]);
var inst_31671 = (inst_31657 + (1));
var inst_31657__$1 = inst_31671;
var state_31693__$1 = (function (){var statearr_31708 = state_31693;
(statearr_31708[(7)] = inst_31657__$1);

(statearr_31708[(10)] = inst_31670);

return statearr_31708;
})();
var statearr_31709_31736 = state_31693__$1;
(statearr_31709_31736[(2)] = null);

(statearr_31709_31736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (5))){
var inst_31677 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31710 = state_31693;
(statearr_31710[(11)] = inst_31677);

return statearr_31710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(12),dchan);
} else {
if((state_val_31694 === (14))){
var inst_31679 = (state_31693[(8)]);
var inst_31684 = cljs.core.apply.call(null,f,inst_31679);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31693__$1,(16),out,inst_31684);
} else {
if((state_val_31694 === (16))){
var inst_31686 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31711 = state_31693;
(statearr_31711[(12)] = inst_31686);

return statearr_31711;
})();
var statearr_31712_31737 = state_31693__$1;
(statearr_31712_31737[(2)] = null);

(statearr_31712_31737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (10))){
var inst_31661 = (state_31693[(2)]);
var inst_31662 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31693__$1 = (function (){var statearr_31713 = state_31693;
(statearr_31713[(13)] = inst_31661);

return statearr_31713;
})();
var statearr_31714_31738 = state_31693__$1;
(statearr_31714_31738[(2)] = inst_31662);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (8))){
var inst_31675 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31715_31739 = state_31693__$1;
(statearr_31715_31739[(2)] = inst_31675);

(statearr_31715_31739[(1)] = (5));


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
});})(c__25598__auto___31724,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25536__auto__,c__25598__auto___31724,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_31719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31719[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_31719[(1)] = (1));

return statearr_31719;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_31693){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_31693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e31720){if((e31720 instanceof Object)){
var ex__25540__auto__ = e31720;
var statearr_31721_31740 = state_31693;
(statearr_31721_31740[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31741 = state_31693;
state_31693 = G__31741;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_31693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_31693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___31724,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25600__auto__ = (function (){var statearr_31722 = f__25599__auto__.call(null);
(statearr_31722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___31724);

return statearr_31722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___31724,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__31744 = arguments.length;
switch (G__31744) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25598__auto___31799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___31799,out){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___31799,out){
return (function (state_31774){
var state_val_31775 = (state_31774[(1)]);
if((state_val_31775 === (7))){
var inst_31754 = (state_31774[(7)]);
var inst_31753 = (state_31774[(8)]);
var inst_31753__$1 = (state_31774[(2)]);
var inst_31754__$1 = cljs.core.nth.call(null,inst_31753__$1,(0),null);
var inst_31755 = cljs.core.nth.call(null,inst_31753__$1,(1),null);
var inst_31756 = (inst_31754__$1 == null);
var state_31774__$1 = (function (){var statearr_31776 = state_31774;
(statearr_31776[(9)] = inst_31755);

(statearr_31776[(7)] = inst_31754__$1);

(statearr_31776[(8)] = inst_31753__$1);

return statearr_31776;
})();
if(cljs.core.truth_(inst_31756)){
var statearr_31777_31800 = state_31774__$1;
(statearr_31777_31800[(1)] = (8));

} else {
var statearr_31778_31801 = state_31774__$1;
(statearr_31778_31801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (1))){
var inst_31745 = cljs.core.vec.call(null,chs);
var inst_31746 = inst_31745;
var state_31774__$1 = (function (){var statearr_31779 = state_31774;
(statearr_31779[(10)] = inst_31746);

return statearr_31779;
})();
var statearr_31780_31802 = state_31774__$1;
(statearr_31780_31802[(2)] = null);

(statearr_31780_31802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (4))){
var inst_31746 = (state_31774[(10)]);
var state_31774__$1 = state_31774;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31774__$1,(7),inst_31746);
} else {
if((state_val_31775 === (6))){
var inst_31770 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31781_31803 = state_31774__$1;
(statearr_31781_31803[(2)] = inst_31770);

(statearr_31781_31803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (3))){
var inst_31772 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31774__$1,inst_31772);
} else {
if((state_val_31775 === (2))){
var inst_31746 = (state_31774[(10)]);
var inst_31748 = cljs.core.count.call(null,inst_31746);
var inst_31749 = (inst_31748 > (0));
var state_31774__$1 = state_31774;
if(cljs.core.truth_(inst_31749)){
var statearr_31783_31804 = state_31774__$1;
(statearr_31783_31804[(1)] = (4));

} else {
var statearr_31784_31805 = state_31774__$1;
(statearr_31784_31805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (11))){
var inst_31746 = (state_31774[(10)]);
var inst_31763 = (state_31774[(2)]);
var tmp31782 = inst_31746;
var inst_31746__$1 = tmp31782;
var state_31774__$1 = (function (){var statearr_31785 = state_31774;
(statearr_31785[(11)] = inst_31763);

(statearr_31785[(10)] = inst_31746__$1);

return statearr_31785;
})();
var statearr_31786_31806 = state_31774__$1;
(statearr_31786_31806[(2)] = null);

(statearr_31786_31806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (9))){
var inst_31754 = (state_31774[(7)]);
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31774__$1,(11),out,inst_31754);
} else {
if((state_val_31775 === (5))){
var inst_31768 = cljs.core.async.close_BANG_.call(null,out);
var state_31774__$1 = state_31774;
var statearr_31787_31807 = state_31774__$1;
(statearr_31787_31807[(2)] = inst_31768);

(statearr_31787_31807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (10))){
var inst_31766 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31788_31808 = state_31774__$1;
(statearr_31788_31808[(2)] = inst_31766);

(statearr_31788_31808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (8))){
var inst_31755 = (state_31774[(9)]);
var inst_31754 = (state_31774[(7)]);
var inst_31746 = (state_31774[(10)]);
var inst_31753 = (state_31774[(8)]);
var inst_31758 = (function (){var c = inst_31755;
var v = inst_31754;
var vec__31751 = inst_31753;
var cs = inst_31746;
return ((function (c,v,vec__31751,cs,inst_31755,inst_31754,inst_31746,inst_31753,state_val_31775,c__25598__auto___31799,out){
return (function (p1__31742_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31742_SHARP_);
});
;})(c,v,vec__31751,cs,inst_31755,inst_31754,inst_31746,inst_31753,state_val_31775,c__25598__auto___31799,out))
})();
var inst_31759 = cljs.core.filterv.call(null,inst_31758,inst_31746);
var inst_31746__$1 = inst_31759;
var state_31774__$1 = (function (){var statearr_31789 = state_31774;
(statearr_31789[(10)] = inst_31746__$1);

return statearr_31789;
})();
var statearr_31790_31809 = state_31774__$1;
(statearr_31790_31809[(2)] = null);

(statearr_31790_31809[(1)] = (2));


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
});})(c__25598__auto___31799,out))
;
return ((function (switch__25536__auto__,c__25598__auto___31799,out){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_31794 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31794[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_31794[(1)] = (1));

return statearr_31794;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_31774){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_31774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e31795){if((e31795 instanceof Object)){
var ex__25540__auto__ = e31795;
var statearr_31796_31810 = state_31774;
(statearr_31796_31810[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31811 = state_31774;
state_31774 = G__31811;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_31774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_31774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___31799,out))
})();
var state__25600__auto__ = (function (){var statearr_31797 = f__25599__auto__.call(null);
(statearr_31797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___31799);

return statearr_31797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___31799,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__31813 = arguments.length;
switch (G__31813) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25598__auto___31861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___31861,out){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___31861,out){
return (function (state_31837){
var state_val_31838 = (state_31837[(1)]);
if((state_val_31838 === (7))){
var inst_31819 = (state_31837[(7)]);
var inst_31819__$1 = (state_31837[(2)]);
var inst_31820 = (inst_31819__$1 == null);
var inst_31821 = cljs.core.not.call(null,inst_31820);
var state_31837__$1 = (function (){var statearr_31839 = state_31837;
(statearr_31839[(7)] = inst_31819__$1);

return statearr_31839;
})();
if(inst_31821){
var statearr_31840_31862 = state_31837__$1;
(statearr_31840_31862[(1)] = (8));

} else {
var statearr_31841_31863 = state_31837__$1;
(statearr_31841_31863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (1))){
var inst_31814 = (0);
var state_31837__$1 = (function (){var statearr_31842 = state_31837;
(statearr_31842[(8)] = inst_31814);

return statearr_31842;
})();
var statearr_31843_31864 = state_31837__$1;
(statearr_31843_31864[(2)] = null);

(statearr_31843_31864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (4))){
var state_31837__$1 = state_31837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31837__$1,(7),ch);
} else {
if((state_val_31838 === (6))){
var inst_31832 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
var statearr_31844_31865 = state_31837__$1;
(statearr_31844_31865[(2)] = inst_31832);

(statearr_31844_31865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (3))){
var inst_31834 = (state_31837[(2)]);
var inst_31835 = cljs.core.async.close_BANG_.call(null,out);
var state_31837__$1 = (function (){var statearr_31845 = state_31837;
(statearr_31845[(9)] = inst_31834);

return statearr_31845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31837__$1,inst_31835);
} else {
if((state_val_31838 === (2))){
var inst_31814 = (state_31837[(8)]);
var inst_31816 = (inst_31814 < n);
var state_31837__$1 = state_31837;
if(cljs.core.truth_(inst_31816)){
var statearr_31846_31866 = state_31837__$1;
(statearr_31846_31866[(1)] = (4));

} else {
var statearr_31847_31867 = state_31837__$1;
(statearr_31847_31867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (11))){
var inst_31814 = (state_31837[(8)]);
var inst_31824 = (state_31837[(2)]);
var inst_31825 = (inst_31814 + (1));
var inst_31814__$1 = inst_31825;
var state_31837__$1 = (function (){var statearr_31848 = state_31837;
(statearr_31848[(8)] = inst_31814__$1);

(statearr_31848[(10)] = inst_31824);

return statearr_31848;
})();
var statearr_31849_31868 = state_31837__$1;
(statearr_31849_31868[(2)] = null);

(statearr_31849_31868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (9))){
var state_31837__$1 = state_31837;
var statearr_31850_31869 = state_31837__$1;
(statearr_31850_31869[(2)] = null);

(statearr_31850_31869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (5))){
var state_31837__$1 = state_31837;
var statearr_31851_31870 = state_31837__$1;
(statearr_31851_31870[(2)] = null);

(statearr_31851_31870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (10))){
var inst_31829 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
var statearr_31852_31871 = state_31837__$1;
(statearr_31852_31871[(2)] = inst_31829);

(statearr_31852_31871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (8))){
var inst_31819 = (state_31837[(7)]);
var state_31837__$1 = state_31837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31837__$1,(11),out,inst_31819);
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
});})(c__25598__auto___31861,out))
;
return ((function (switch__25536__auto__,c__25598__auto___31861,out){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_31856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31856[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_31856[(1)] = (1));

return statearr_31856;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_31837){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_31837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e31857){if((e31857 instanceof Object)){
var ex__25540__auto__ = e31857;
var statearr_31858_31872 = state_31837;
(statearr_31858_31872[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31873 = state_31837;
state_31837 = G__31873;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_31837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_31837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___31861,out))
})();
var state__25600__auto__ = (function (){var statearr_31859 = f__25599__auto__.call(null);
(statearr_31859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___31861);

return statearr_31859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___31861,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t31881 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31881 = (function (ch,f,map_LT_,meta31882){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31882 = meta31882;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31881.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31881.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31884 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31884 = (function (fn1,_,meta31882,map_LT_,f,ch,meta31885){
this.fn1 = fn1;
this._ = _;
this.meta31882 = meta31882;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31885 = meta31885;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31884.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31884.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31884.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31874_SHARP_){
return f1.call(null,(((p1__31874_SHARP_ == null))?null:self__.f.call(null,p1__31874_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31886){
var self__ = this;
var _31886__$1 = this;
return self__.meta31885;
});})(___$1))
;

cljs.core.async.t31884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31886,meta31885__$1){
var self__ = this;
var _31886__$1 = this;
return (new cljs.core.async.t31884(self__.fn1,self__._,self__.meta31882,self__.map_LT_,self__.f,self__.ch,meta31885__$1));
});})(___$1))
;

cljs.core.async.t31884.cljs$lang$type = true;

cljs.core.async.t31884.cljs$lang$ctorStr = "cljs.core.async/t31884";

cljs.core.async.t31884.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async/t31884");
});})(___$1))
;

cljs.core.async.__GT_t31884 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t31884(fn1__$1,___$2,meta31882__$1,map_LT___$1,f__$1,ch__$1,meta31885){
return (new cljs.core.async.t31884(fn1__$1,___$2,meta31882__$1,map_LT___$1,f__$1,ch__$1,meta31885));
});})(___$1))
;

}

return (new cljs.core.async.t31884(fn1,___$1,self__.meta31882,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22362__auto__ = ret;
if(cljs.core.truth_(and__22362__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22362__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t31881.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31881.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31883){
var self__ = this;
var _31883__$1 = this;
return self__.meta31882;
});

cljs.core.async.t31881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31883,meta31882__$1){
var self__ = this;
var _31883__$1 = this;
return (new cljs.core.async.t31881(self__.ch,self__.f,self__.map_LT_,meta31882__$1));
});

cljs.core.async.t31881.cljs$lang$type = true;

cljs.core.async.t31881.cljs$lang$ctorStr = "cljs.core.async/t31881";

cljs.core.async.t31881.cljs$lang$ctorPrWriter = (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async/t31881");
});

cljs.core.async.__GT_t31881 = (function cljs$core$async$map_LT__$___GT_t31881(ch__$1,f__$1,map_LT___$1,meta31882){
return (new cljs.core.async.t31881(ch__$1,f__$1,map_LT___$1,meta31882));
});

}

return (new cljs.core.async.t31881(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t31890 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31890 = (function (ch,f,map_GT_,meta31891){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31891 = meta31891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31890.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31890.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31890.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31890.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31890.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31890.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31892){
var self__ = this;
var _31892__$1 = this;
return self__.meta31891;
});

cljs.core.async.t31890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31892,meta31891__$1){
var self__ = this;
var _31892__$1 = this;
return (new cljs.core.async.t31890(self__.ch,self__.f,self__.map_GT_,meta31891__$1));
});

cljs.core.async.t31890.cljs$lang$type = true;

cljs.core.async.t31890.cljs$lang$ctorStr = "cljs.core.async/t31890";

cljs.core.async.t31890.cljs$lang$ctorPrWriter = (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async/t31890");
});

cljs.core.async.__GT_t31890 = (function cljs$core$async$map_GT__$___GT_t31890(ch__$1,f__$1,map_GT___$1,meta31891){
return (new cljs.core.async.t31890(ch__$1,f__$1,map_GT___$1,meta31891));
});

}

return (new cljs.core.async.t31890(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t31896 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31896 = (function (ch,p,filter_GT_,meta31897){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31897 = meta31897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31898){
var self__ = this;
var _31898__$1 = this;
return self__.meta31897;
});

cljs.core.async.t31896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31898,meta31897__$1){
var self__ = this;
var _31898__$1 = this;
return (new cljs.core.async.t31896(self__.ch,self__.p,self__.filter_GT_,meta31897__$1));
});

cljs.core.async.t31896.cljs$lang$type = true;

cljs.core.async.t31896.cljs$lang$ctorStr = "cljs.core.async/t31896";

cljs.core.async.t31896.cljs$lang$ctorPrWriter = (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async/t31896");
});

cljs.core.async.__GT_t31896 = (function cljs$core$async$filter_GT__$___GT_t31896(ch__$1,p__$1,filter_GT___$1,meta31897){
return (new cljs.core.async.t31896(ch__$1,p__$1,filter_GT___$1,meta31897));
});

}

return (new cljs.core.async.t31896(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__31900 = arguments.length;
switch (G__31900) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25598__auto___31943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___31943,out){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___31943,out){
return (function (state_31921){
var state_val_31922 = (state_31921[(1)]);
if((state_val_31922 === (7))){
var inst_31917 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31923_31944 = state_31921__$1;
(statearr_31923_31944[(2)] = inst_31917);

(statearr_31923_31944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (1))){
var state_31921__$1 = state_31921;
var statearr_31924_31945 = state_31921__$1;
(statearr_31924_31945[(2)] = null);

(statearr_31924_31945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (4))){
var inst_31903 = (state_31921[(7)]);
var inst_31903__$1 = (state_31921[(2)]);
var inst_31904 = (inst_31903__$1 == null);
var state_31921__$1 = (function (){var statearr_31925 = state_31921;
(statearr_31925[(7)] = inst_31903__$1);

return statearr_31925;
})();
if(cljs.core.truth_(inst_31904)){
var statearr_31926_31946 = state_31921__$1;
(statearr_31926_31946[(1)] = (5));

} else {
var statearr_31927_31947 = state_31921__$1;
(statearr_31927_31947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (6))){
var inst_31903 = (state_31921[(7)]);
var inst_31908 = p.call(null,inst_31903);
var state_31921__$1 = state_31921;
if(cljs.core.truth_(inst_31908)){
var statearr_31928_31948 = state_31921__$1;
(statearr_31928_31948[(1)] = (8));

} else {
var statearr_31929_31949 = state_31921__$1;
(statearr_31929_31949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (3))){
var inst_31919 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31921__$1,inst_31919);
} else {
if((state_val_31922 === (2))){
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31921__$1,(4),ch);
} else {
if((state_val_31922 === (11))){
var inst_31911 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31930_31950 = state_31921__$1;
(statearr_31930_31950[(2)] = inst_31911);

(statearr_31930_31950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (9))){
var state_31921__$1 = state_31921;
var statearr_31931_31951 = state_31921__$1;
(statearr_31931_31951[(2)] = null);

(statearr_31931_31951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (5))){
var inst_31906 = cljs.core.async.close_BANG_.call(null,out);
var state_31921__$1 = state_31921;
var statearr_31932_31952 = state_31921__$1;
(statearr_31932_31952[(2)] = inst_31906);

(statearr_31932_31952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (10))){
var inst_31914 = (state_31921[(2)]);
var state_31921__$1 = (function (){var statearr_31933 = state_31921;
(statearr_31933[(8)] = inst_31914);

return statearr_31933;
})();
var statearr_31934_31953 = state_31921__$1;
(statearr_31934_31953[(2)] = null);

(statearr_31934_31953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (8))){
var inst_31903 = (state_31921[(7)]);
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31921__$1,(11),out,inst_31903);
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
});})(c__25598__auto___31943,out))
;
return ((function (switch__25536__auto__,c__25598__auto___31943,out){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_31938 = [null,null,null,null,null,null,null,null,null];
(statearr_31938[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_31938[(1)] = (1));

return statearr_31938;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_31921){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_31921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e31939){if((e31939 instanceof Object)){
var ex__25540__auto__ = e31939;
var statearr_31940_31954 = state_31921;
(statearr_31940_31954[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31955 = state_31921;
state_31921 = G__31955;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_31921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_31921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___31943,out))
})();
var state__25600__auto__ = (function (){var statearr_31941 = f__25599__auto__.call(null);
(statearr_31941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___31943);

return statearr_31941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___31943,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__31957 = arguments.length;
switch (G__31957) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__){
return (function (state_32124){
var state_val_32125 = (state_32124[(1)]);
if((state_val_32125 === (7))){
var inst_32120 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
var statearr_32126_32167 = state_32124__$1;
(statearr_32126_32167[(2)] = inst_32120);

(statearr_32126_32167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (20))){
var inst_32090 = (state_32124[(7)]);
var inst_32101 = (state_32124[(2)]);
var inst_32102 = cljs.core.next.call(null,inst_32090);
var inst_32076 = inst_32102;
var inst_32077 = null;
var inst_32078 = (0);
var inst_32079 = (0);
var state_32124__$1 = (function (){var statearr_32127 = state_32124;
(statearr_32127[(8)] = inst_32078);

(statearr_32127[(9)] = inst_32079);

(statearr_32127[(10)] = inst_32101);

(statearr_32127[(11)] = inst_32076);

(statearr_32127[(12)] = inst_32077);

return statearr_32127;
})();
var statearr_32128_32168 = state_32124__$1;
(statearr_32128_32168[(2)] = null);

(statearr_32128_32168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (1))){
var state_32124__$1 = state_32124;
var statearr_32129_32169 = state_32124__$1;
(statearr_32129_32169[(2)] = null);

(statearr_32129_32169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (4))){
var inst_32065 = (state_32124[(13)]);
var inst_32065__$1 = (state_32124[(2)]);
var inst_32066 = (inst_32065__$1 == null);
var state_32124__$1 = (function (){var statearr_32130 = state_32124;
(statearr_32130[(13)] = inst_32065__$1);

return statearr_32130;
})();
if(cljs.core.truth_(inst_32066)){
var statearr_32131_32170 = state_32124__$1;
(statearr_32131_32170[(1)] = (5));

} else {
var statearr_32132_32171 = state_32124__$1;
(statearr_32132_32171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (15))){
var state_32124__$1 = state_32124;
var statearr_32136_32172 = state_32124__$1;
(statearr_32136_32172[(2)] = null);

(statearr_32136_32172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (21))){
var state_32124__$1 = state_32124;
var statearr_32137_32173 = state_32124__$1;
(statearr_32137_32173[(2)] = null);

(statearr_32137_32173[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (13))){
var inst_32078 = (state_32124[(8)]);
var inst_32079 = (state_32124[(9)]);
var inst_32076 = (state_32124[(11)]);
var inst_32077 = (state_32124[(12)]);
var inst_32086 = (state_32124[(2)]);
var inst_32087 = (inst_32079 + (1));
var tmp32133 = inst_32078;
var tmp32134 = inst_32076;
var tmp32135 = inst_32077;
var inst_32076__$1 = tmp32134;
var inst_32077__$1 = tmp32135;
var inst_32078__$1 = tmp32133;
var inst_32079__$1 = inst_32087;
var state_32124__$1 = (function (){var statearr_32138 = state_32124;
(statearr_32138[(8)] = inst_32078__$1);

(statearr_32138[(14)] = inst_32086);

(statearr_32138[(9)] = inst_32079__$1);

(statearr_32138[(11)] = inst_32076__$1);

(statearr_32138[(12)] = inst_32077__$1);

return statearr_32138;
})();
var statearr_32139_32174 = state_32124__$1;
(statearr_32139_32174[(2)] = null);

(statearr_32139_32174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (22))){
var state_32124__$1 = state_32124;
var statearr_32140_32175 = state_32124__$1;
(statearr_32140_32175[(2)] = null);

(statearr_32140_32175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (6))){
var inst_32065 = (state_32124[(13)]);
var inst_32074 = f.call(null,inst_32065);
var inst_32075 = cljs.core.seq.call(null,inst_32074);
var inst_32076 = inst_32075;
var inst_32077 = null;
var inst_32078 = (0);
var inst_32079 = (0);
var state_32124__$1 = (function (){var statearr_32141 = state_32124;
(statearr_32141[(8)] = inst_32078);

(statearr_32141[(9)] = inst_32079);

(statearr_32141[(11)] = inst_32076);

(statearr_32141[(12)] = inst_32077);

return statearr_32141;
})();
var statearr_32142_32176 = state_32124__$1;
(statearr_32142_32176[(2)] = null);

(statearr_32142_32176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (17))){
var inst_32090 = (state_32124[(7)]);
var inst_32094 = cljs.core.chunk_first.call(null,inst_32090);
var inst_32095 = cljs.core.chunk_rest.call(null,inst_32090);
var inst_32096 = cljs.core.count.call(null,inst_32094);
var inst_32076 = inst_32095;
var inst_32077 = inst_32094;
var inst_32078 = inst_32096;
var inst_32079 = (0);
var state_32124__$1 = (function (){var statearr_32143 = state_32124;
(statearr_32143[(8)] = inst_32078);

(statearr_32143[(9)] = inst_32079);

(statearr_32143[(11)] = inst_32076);

(statearr_32143[(12)] = inst_32077);

return statearr_32143;
})();
var statearr_32144_32177 = state_32124__$1;
(statearr_32144_32177[(2)] = null);

(statearr_32144_32177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (3))){
var inst_32122 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32124__$1,inst_32122);
} else {
if((state_val_32125 === (12))){
var inst_32110 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
var statearr_32145_32178 = state_32124__$1;
(statearr_32145_32178[(2)] = inst_32110);

(statearr_32145_32178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (2))){
var state_32124__$1 = state_32124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32124__$1,(4),in$);
} else {
if((state_val_32125 === (23))){
var inst_32118 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
var statearr_32146_32179 = state_32124__$1;
(statearr_32146_32179[(2)] = inst_32118);

(statearr_32146_32179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (19))){
var inst_32105 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
var statearr_32147_32180 = state_32124__$1;
(statearr_32147_32180[(2)] = inst_32105);

(statearr_32147_32180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (11))){
var inst_32076 = (state_32124[(11)]);
var inst_32090 = (state_32124[(7)]);
var inst_32090__$1 = cljs.core.seq.call(null,inst_32076);
var state_32124__$1 = (function (){var statearr_32148 = state_32124;
(statearr_32148[(7)] = inst_32090__$1);

return statearr_32148;
})();
if(inst_32090__$1){
var statearr_32149_32181 = state_32124__$1;
(statearr_32149_32181[(1)] = (14));

} else {
var statearr_32150_32182 = state_32124__$1;
(statearr_32150_32182[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (9))){
var inst_32112 = (state_32124[(2)]);
var inst_32113 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32124__$1 = (function (){var statearr_32151 = state_32124;
(statearr_32151[(15)] = inst_32112);

return statearr_32151;
})();
if(cljs.core.truth_(inst_32113)){
var statearr_32152_32183 = state_32124__$1;
(statearr_32152_32183[(1)] = (21));

} else {
var statearr_32153_32184 = state_32124__$1;
(statearr_32153_32184[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (5))){
var inst_32068 = cljs.core.async.close_BANG_.call(null,out);
var state_32124__$1 = state_32124;
var statearr_32154_32185 = state_32124__$1;
(statearr_32154_32185[(2)] = inst_32068);

(statearr_32154_32185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (14))){
var inst_32090 = (state_32124[(7)]);
var inst_32092 = cljs.core.chunked_seq_QMARK_.call(null,inst_32090);
var state_32124__$1 = state_32124;
if(inst_32092){
var statearr_32155_32186 = state_32124__$1;
(statearr_32155_32186[(1)] = (17));

} else {
var statearr_32156_32187 = state_32124__$1;
(statearr_32156_32187[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (16))){
var inst_32108 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
var statearr_32157_32188 = state_32124__$1;
(statearr_32157_32188[(2)] = inst_32108);

(statearr_32157_32188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (10))){
var inst_32079 = (state_32124[(9)]);
var inst_32077 = (state_32124[(12)]);
var inst_32084 = cljs.core._nth.call(null,inst_32077,inst_32079);
var state_32124__$1 = state_32124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32124__$1,(13),out,inst_32084);
} else {
if((state_val_32125 === (18))){
var inst_32090 = (state_32124[(7)]);
var inst_32099 = cljs.core.first.call(null,inst_32090);
var state_32124__$1 = state_32124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32124__$1,(20),out,inst_32099);
} else {
if((state_val_32125 === (8))){
var inst_32078 = (state_32124[(8)]);
var inst_32079 = (state_32124[(9)]);
var inst_32081 = (inst_32079 < inst_32078);
var inst_32082 = inst_32081;
var state_32124__$1 = state_32124;
if(cljs.core.truth_(inst_32082)){
var statearr_32158_32189 = state_32124__$1;
(statearr_32158_32189[(1)] = (10));

} else {
var statearr_32159_32190 = state_32124__$1;
(statearr_32159_32190[(1)] = (11));

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
});})(c__25598__auto__))
;
return ((function (switch__25536__auto__,c__25598__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25537__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25537__auto____0 = (function (){
var statearr_32163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32163[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25537__auto__);

(statearr_32163[(1)] = (1));

return statearr_32163;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25537__auto____1 = (function (state_32124){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_32124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e32164){if((e32164 instanceof Object)){
var ex__25540__auto__ = e32164;
var statearr_32165_32191 = state_32124;
(statearr_32165_32191[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32192 = state_32124;
state_32124 = G__32192;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25537__auto__ = function(state_32124){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25537__auto____1.call(this,state_32124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25537__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25537__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__))
})();
var state__25600__auto__ = (function (){var statearr_32166 = f__25599__auto__.call(null);
(statearr_32166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_32166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__))
);

return c__25598__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__32194 = arguments.length;
switch (G__32194) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__32197 = arguments.length;
switch (G__32197) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__32200 = arguments.length;
switch (G__32200) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25598__auto___32250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___32250,out){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___32250,out){
return (function (state_32224){
var state_val_32225 = (state_32224[(1)]);
if((state_val_32225 === (7))){
var inst_32219 = (state_32224[(2)]);
var state_32224__$1 = state_32224;
var statearr_32226_32251 = state_32224__$1;
(statearr_32226_32251[(2)] = inst_32219);

(statearr_32226_32251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (1))){
var inst_32201 = null;
var state_32224__$1 = (function (){var statearr_32227 = state_32224;
(statearr_32227[(7)] = inst_32201);

return statearr_32227;
})();
var statearr_32228_32252 = state_32224__$1;
(statearr_32228_32252[(2)] = null);

(statearr_32228_32252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (4))){
var inst_32204 = (state_32224[(8)]);
var inst_32204__$1 = (state_32224[(2)]);
var inst_32205 = (inst_32204__$1 == null);
var inst_32206 = cljs.core.not.call(null,inst_32205);
var state_32224__$1 = (function (){var statearr_32229 = state_32224;
(statearr_32229[(8)] = inst_32204__$1);

return statearr_32229;
})();
if(inst_32206){
var statearr_32230_32253 = state_32224__$1;
(statearr_32230_32253[(1)] = (5));

} else {
var statearr_32231_32254 = state_32224__$1;
(statearr_32231_32254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (6))){
var state_32224__$1 = state_32224;
var statearr_32232_32255 = state_32224__$1;
(statearr_32232_32255[(2)] = null);

(statearr_32232_32255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (3))){
var inst_32221 = (state_32224[(2)]);
var inst_32222 = cljs.core.async.close_BANG_.call(null,out);
var state_32224__$1 = (function (){var statearr_32233 = state_32224;
(statearr_32233[(9)] = inst_32221);

return statearr_32233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32224__$1,inst_32222);
} else {
if((state_val_32225 === (2))){
var state_32224__$1 = state_32224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32224__$1,(4),ch);
} else {
if((state_val_32225 === (11))){
var inst_32204 = (state_32224[(8)]);
var inst_32213 = (state_32224[(2)]);
var inst_32201 = inst_32204;
var state_32224__$1 = (function (){var statearr_32234 = state_32224;
(statearr_32234[(7)] = inst_32201);

(statearr_32234[(10)] = inst_32213);

return statearr_32234;
})();
var statearr_32235_32256 = state_32224__$1;
(statearr_32235_32256[(2)] = null);

(statearr_32235_32256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (9))){
var inst_32204 = (state_32224[(8)]);
var state_32224__$1 = state_32224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32224__$1,(11),out,inst_32204);
} else {
if((state_val_32225 === (5))){
var inst_32204 = (state_32224[(8)]);
var inst_32201 = (state_32224[(7)]);
var inst_32208 = cljs.core._EQ_.call(null,inst_32204,inst_32201);
var state_32224__$1 = state_32224;
if(inst_32208){
var statearr_32237_32257 = state_32224__$1;
(statearr_32237_32257[(1)] = (8));

} else {
var statearr_32238_32258 = state_32224__$1;
(statearr_32238_32258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (10))){
var inst_32216 = (state_32224[(2)]);
var state_32224__$1 = state_32224;
var statearr_32239_32259 = state_32224__$1;
(statearr_32239_32259[(2)] = inst_32216);

(statearr_32239_32259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (8))){
var inst_32201 = (state_32224[(7)]);
var tmp32236 = inst_32201;
var inst_32201__$1 = tmp32236;
var state_32224__$1 = (function (){var statearr_32240 = state_32224;
(statearr_32240[(7)] = inst_32201__$1);

return statearr_32240;
})();
var statearr_32241_32260 = state_32224__$1;
(statearr_32241_32260[(2)] = null);

(statearr_32241_32260[(1)] = (2));


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
});})(c__25598__auto___32250,out))
;
return ((function (switch__25536__auto__,c__25598__auto___32250,out){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_32245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32245[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_32245[(1)] = (1));

return statearr_32245;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_32224){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_32224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e32246){if((e32246 instanceof Object)){
var ex__25540__auto__ = e32246;
var statearr_32247_32261 = state_32224;
(statearr_32247_32261[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32262 = state_32224;
state_32224 = G__32262;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_32224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_32224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___32250,out))
})();
var state__25600__auto__ = (function (){var statearr_32248 = f__25599__auto__.call(null);
(statearr_32248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___32250);

return statearr_32248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___32250,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__32264 = arguments.length;
switch (G__32264) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25598__auto___32333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___32333,out){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___32333,out){
return (function (state_32302){
var state_val_32303 = (state_32302[(1)]);
if((state_val_32303 === (7))){
var inst_32298 = (state_32302[(2)]);
var state_32302__$1 = state_32302;
var statearr_32304_32334 = state_32302__$1;
(statearr_32304_32334[(2)] = inst_32298);

(statearr_32304_32334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (1))){
var inst_32265 = (new Array(n));
var inst_32266 = inst_32265;
var inst_32267 = (0);
var state_32302__$1 = (function (){var statearr_32305 = state_32302;
(statearr_32305[(7)] = inst_32266);

(statearr_32305[(8)] = inst_32267);

return statearr_32305;
})();
var statearr_32306_32335 = state_32302__$1;
(statearr_32306_32335[(2)] = null);

(statearr_32306_32335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (4))){
var inst_32270 = (state_32302[(9)]);
var inst_32270__$1 = (state_32302[(2)]);
var inst_32271 = (inst_32270__$1 == null);
var inst_32272 = cljs.core.not.call(null,inst_32271);
var state_32302__$1 = (function (){var statearr_32307 = state_32302;
(statearr_32307[(9)] = inst_32270__$1);

return statearr_32307;
})();
if(inst_32272){
var statearr_32308_32336 = state_32302__$1;
(statearr_32308_32336[(1)] = (5));

} else {
var statearr_32309_32337 = state_32302__$1;
(statearr_32309_32337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (15))){
var inst_32292 = (state_32302[(2)]);
var state_32302__$1 = state_32302;
var statearr_32310_32338 = state_32302__$1;
(statearr_32310_32338[(2)] = inst_32292);

(statearr_32310_32338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (13))){
var state_32302__$1 = state_32302;
var statearr_32311_32339 = state_32302__$1;
(statearr_32311_32339[(2)] = null);

(statearr_32311_32339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (6))){
var inst_32267 = (state_32302[(8)]);
var inst_32288 = (inst_32267 > (0));
var state_32302__$1 = state_32302;
if(cljs.core.truth_(inst_32288)){
var statearr_32312_32340 = state_32302__$1;
(statearr_32312_32340[(1)] = (12));

} else {
var statearr_32313_32341 = state_32302__$1;
(statearr_32313_32341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (3))){
var inst_32300 = (state_32302[(2)]);
var state_32302__$1 = state_32302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32302__$1,inst_32300);
} else {
if((state_val_32303 === (12))){
var inst_32266 = (state_32302[(7)]);
var inst_32290 = cljs.core.vec.call(null,inst_32266);
var state_32302__$1 = state_32302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32302__$1,(15),out,inst_32290);
} else {
if((state_val_32303 === (2))){
var state_32302__$1 = state_32302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32302__$1,(4),ch);
} else {
if((state_val_32303 === (11))){
var inst_32282 = (state_32302[(2)]);
var inst_32283 = (new Array(n));
var inst_32266 = inst_32283;
var inst_32267 = (0);
var state_32302__$1 = (function (){var statearr_32314 = state_32302;
(statearr_32314[(7)] = inst_32266);

(statearr_32314[(8)] = inst_32267);

(statearr_32314[(10)] = inst_32282);

return statearr_32314;
})();
var statearr_32315_32342 = state_32302__$1;
(statearr_32315_32342[(2)] = null);

(statearr_32315_32342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (9))){
var inst_32266 = (state_32302[(7)]);
var inst_32280 = cljs.core.vec.call(null,inst_32266);
var state_32302__$1 = state_32302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32302__$1,(11),out,inst_32280);
} else {
if((state_val_32303 === (5))){
var inst_32266 = (state_32302[(7)]);
var inst_32270 = (state_32302[(9)]);
var inst_32267 = (state_32302[(8)]);
var inst_32275 = (state_32302[(11)]);
var inst_32274 = (inst_32266[inst_32267] = inst_32270);
var inst_32275__$1 = (inst_32267 + (1));
var inst_32276 = (inst_32275__$1 < n);
var state_32302__$1 = (function (){var statearr_32316 = state_32302;
(statearr_32316[(12)] = inst_32274);

(statearr_32316[(11)] = inst_32275__$1);

return statearr_32316;
})();
if(cljs.core.truth_(inst_32276)){
var statearr_32317_32343 = state_32302__$1;
(statearr_32317_32343[(1)] = (8));

} else {
var statearr_32318_32344 = state_32302__$1;
(statearr_32318_32344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (14))){
var inst_32295 = (state_32302[(2)]);
var inst_32296 = cljs.core.async.close_BANG_.call(null,out);
var state_32302__$1 = (function (){var statearr_32320 = state_32302;
(statearr_32320[(13)] = inst_32295);

return statearr_32320;
})();
var statearr_32321_32345 = state_32302__$1;
(statearr_32321_32345[(2)] = inst_32296);

(statearr_32321_32345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (10))){
var inst_32286 = (state_32302[(2)]);
var state_32302__$1 = state_32302;
var statearr_32322_32346 = state_32302__$1;
(statearr_32322_32346[(2)] = inst_32286);

(statearr_32322_32346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (8))){
var inst_32266 = (state_32302[(7)]);
var inst_32275 = (state_32302[(11)]);
var tmp32319 = inst_32266;
var inst_32266__$1 = tmp32319;
var inst_32267 = inst_32275;
var state_32302__$1 = (function (){var statearr_32323 = state_32302;
(statearr_32323[(7)] = inst_32266__$1);

(statearr_32323[(8)] = inst_32267);

return statearr_32323;
})();
var statearr_32324_32347 = state_32302__$1;
(statearr_32324_32347[(2)] = null);

(statearr_32324_32347[(1)] = (2));


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
});})(c__25598__auto___32333,out))
;
return ((function (switch__25536__auto__,c__25598__auto___32333,out){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_32328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32328[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_32328[(1)] = (1));

return statearr_32328;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_32302){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_32302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e32329){if((e32329 instanceof Object)){
var ex__25540__auto__ = e32329;
var statearr_32330_32348 = state_32302;
(statearr_32330_32348[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32349 = state_32302;
state_32302 = G__32349;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_32302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_32302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___32333,out))
})();
var state__25600__auto__ = (function (){var statearr_32331 = f__25599__auto__.call(null);
(statearr_32331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___32333);

return statearr_32331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___32333,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__32351 = arguments.length;
switch (G__32351) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25598__auto___32424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___32424,out){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___32424,out){
return (function (state_32393){
var state_val_32394 = (state_32393[(1)]);
if((state_val_32394 === (7))){
var inst_32389 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32395_32425 = state_32393__$1;
(statearr_32395_32425[(2)] = inst_32389);

(statearr_32395_32425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (1))){
var inst_32352 = [];
var inst_32353 = inst_32352;
var inst_32354 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32393__$1 = (function (){var statearr_32396 = state_32393;
(statearr_32396[(7)] = inst_32353);

(statearr_32396[(8)] = inst_32354);

return statearr_32396;
})();
var statearr_32397_32426 = state_32393__$1;
(statearr_32397_32426[(2)] = null);

(statearr_32397_32426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (4))){
var inst_32357 = (state_32393[(9)]);
var inst_32357__$1 = (state_32393[(2)]);
var inst_32358 = (inst_32357__$1 == null);
var inst_32359 = cljs.core.not.call(null,inst_32358);
var state_32393__$1 = (function (){var statearr_32398 = state_32393;
(statearr_32398[(9)] = inst_32357__$1);

return statearr_32398;
})();
if(inst_32359){
var statearr_32399_32427 = state_32393__$1;
(statearr_32399_32427[(1)] = (5));

} else {
var statearr_32400_32428 = state_32393__$1;
(statearr_32400_32428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (15))){
var inst_32383 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32401_32429 = state_32393__$1;
(statearr_32401_32429[(2)] = inst_32383);

(statearr_32401_32429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (13))){
var state_32393__$1 = state_32393;
var statearr_32402_32430 = state_32393__$1;
(statearr_32402_32430[(2)] = null);

(statearr_32402_32430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (6))){
var inst_32353 = (state_32393[(7)]);
var inst_32378 = inst_32353.length;
var inst_32379 = (inst_32378 > (0));
var state_32393__$1 = state_32393;
if(cljs.core.truth_(inst_32379)){
var statearr_32403_32431 = state_32393__$1;
(statearr_32403_32431[(1)] = (12));

} else {
var statearr_32404_32432 = state_32393__$1;
(statearr_32404_32432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (3))){
var inst_32391 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32393__$1,inst_32391);
} else {
if((state_val_32394 === (12))){
var inst_32353 = (state_32393[(7)]);
var inst_32381 = cljs.core.vec.call(null,inst_32353);
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32393__$1,(15),out,inst_32381);
} else {
if((state_val_32394 === (2))){
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32393__$1,(4),ch);
} else {
if((state_val_32394 === (11))){
var inst_32357 = (state_32393[(9)]);
var inst_32361 = (state_32393[(10)]);
var inst_32371 = (state_32393[(2)]);
var inst_32372 = [];
var inst_32373 = inst_32372.push(inst_32357);
var inst_32353 = inst_32372;
var inst_32354 = inst_32361;
var state_32393__$1 = (function (){var statearr_32405 = state_32393;
(statearr_32405[(11)] = inst_32373);

(statearr_32405[(7)] = inst_32353);

(statearr_32405[(8)] = inst_32354);

(statearr_32405[(12)] = inst_32371);

return statearr_32405;
})();
var statearr_32406_32433 = state_32393__$1;
(statearr_32406_32433[(2)] = null);

(statearr_32406_32433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (9))){
var inst_32353 = (state_32393[(7)]);
var inst_32369 = cljs.core.vec.call(null,inst_32353);
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32393__$1,(11),out,inst_32369);
} else {
if((state_val_32394 === (5))){
var inst_32357 = (state_32393[(9)]);
var inst_32354 = (state_32393[(8)]);
var inst_32361 = (state_32393[(10)]);
var inst_32361__$1 = f.call(null,inst_32357);
var inst_32362 = cljs.core._EQ_.call(null,inst_32361__$1,inst_32354);
var inst_32363 = cljs.core.keyword_identical_QMARK_.call(null,inst_32354,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32364 = (inst_32362) || (inst_32363);
var state_32393__$1 = (function (){var statearr_32407 = state_32393;
(statearr_32407[(10)] = inst_32361__$1);

return statearr_32407;
})();
if(cljs.core.truth_(inst_32364)){
var statearr_32408_32434 = state_32393__$1;
(statearr_32408_32434[(1)] = (8));

} else {
var statearr_32409_32435 = state_32393__$1;
(statearr_32409_32435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (14))){
var inst_32386 = (state_32393[(2)]);
var inst_32387 = cljs.core.async.close_BANG_.call(null,out);
var state_32393__$1 = (function (){var statearr_32411 = state_32393;
(statearr_32411[(13)] = inst_32386);

return statearr_32411;
})();
var statearr_32412_32436 = state_32393__$1;
(statearr_32412_32436[(2)] = inst_32387);

(statearr_32412_32436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (10))){
var inst_32376 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32413_32437 = state_32393__$1;
(statearr_32413_32437[(2)] = inst_32376);

(statearr_32413_32437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (8))){
var inst_32357 = (state_32393[(9)]);
var inst_32353 = (state_32393[(7)]);
var inst_32361 = (state_32393[(10)]);
var inst_32366 = inst_32353.push(inst_32357);
var tmp32410 = inst_32353;
var inst_32353__$1 = tmp32410;
var inst_32354 = inst_32361;
var state_32393__$1 = (function (){var statearr_32414 = state_32393;
(statearr_32414[(7)] = inst_32353__$1);

(statearr_32414[(8)] = inst_32354);

(statearr_32414[(14)] = inst_32366);

return statearr_32414;
})();
var statearr_32415_32438 = state_32393__$1;
(statearr_32415_32438[(2)] = null);

(statearr_32415_32438[(1)] = (2));


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
});})(c__25598__auto___32424,out))
;
return ((function (switch__25536__auto__,c__25598__auto___32424,out){
return (function() {
var cljs$core$async$state_machine__25537__auto__ = null;
var cljs$core$async$state_machine__25537__auto____0 = (function (){
var statearr_32419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32419[(0)] = cljs$core$async$state_machine__25537__auto__);

(statearr_32419[(1)] = (1));

return statearr_32419;
});
var cljs$core$async$state_machine__25537__auto____1 = (function (state_32393){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_32393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e32420){if((e32420 instanceof Object)){
var ex__25540__auto__ = e32420;
var statearr_32421_32439 = state_32393;
(statearr_32421_32439[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32440 = state_32393;
state_32393 = G__32440;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
cljs$core$async$state_machine__25537__auto__ = function(state_32393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25537__auto____1.call(this,state_32393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25537__auto____0;
cljs$core$async$state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25537__auto____1;
return cljs$core$async$state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___32424,out))
})();
var state__25600__auto__ = (function (){var statearr_32422 = f__25599__auto__.call(null);
(statearr_32422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___32424);

return statearr_32422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___32424,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1436273477433