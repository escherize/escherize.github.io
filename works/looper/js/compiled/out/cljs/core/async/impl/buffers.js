// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.buffers.acopy = (function cljs$core$async$impl$buffers$acopy(src,src_start,dest,dest_start,len){
var cnt = (0);
while(true){
if((cnt < len)){
(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));

var G__32539 = (cnt + (1));
cnt = G__32539;
continue;
} else {
return null;
}
break;
}
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
})
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){
var self__ = this;
var _ = this;
if((self__.length === (0))){
return null;
} else {
var x = (self__.arr[self__.tail]);
(self__.arr[self__.tail] = null);

self__.tail = ((self__.tail + (1)) % self__.arr.length);

self__.length = (self__.length - (1));

return x;
}
});

cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){
var self__ = this;
var _ = this;
(self__.arr[self__.head] = x);

self__.head = ((self__.head + (1)) % self__.arr.length);

self__.length = (self__.length + (1));

return null;
});

cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){
var self__ = this;
var this$ = this;
if(((self__.length + (1)) === self__.arr.length)){
this$.resize();
} else {
}

return this$.unshift(x);
});

cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){
var self__ = this;
var _ = this;
var new_arr_size = (self__.arr.length * (2));
var new_arr = (new Array(new_arr_size));
if((self__.tail < self__.head)){
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,(0),self__.length);

self__.tail = (0);

self__.head = self__.length;

return self__.arr = new_arr;
} else {
if((self__.tail > self__.head)){
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,(0),(self__.arr.length - self__.tail));

cljs.core.async.impl.buffers.acopy.call(null,self__.arr,(0),new_arr,(self__.arr.length - self__.tail),self__.head);

self__.tail = (0);

self__.head = self__.length;

return self__.arr = new_arr;
} else {
if((self__.tail === self__.head)){
self__.tail = (0);

self__.head = (0);

return self__.arr = new_arr;
} else {
return null;
}
}
}
});

cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){
var self__ = this;
var this$ = this;
var n__23259__auto__ = self__.length;
var x = (0);
while(true){
if((x < n__23259__auto__)){
var v_32540 = this$.pop();
if(keep_QMARK_.call(null,v_32540)){
this$.unshift(v_32540);
} else {
}

var G__32541 = (x + (1));
x = G__32541;
continue;
} else {
return null;
}
break;
}
});

cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";

cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});

cljs.core.async.impl.buffers.__GT_RingBuffer = (function cljs$core$async$impl$buffers$__GT_RingBuffer(head,tail,length,arr){
return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});

cljs.core.async.impl.buffers.ring_buffer = (function cljs$core$async$impl$buffers$ring_buffer(n){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),(0))))].join('')));
}

return (new cljs.core.async.impl.buffers.RingBuffer((0),(0),(0),(new Array(n))));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.buf.length === self__.n);
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
self__.buf.unbounded_unshift(itm);

return this$__$1;
});

cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";

cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});

cljs.core.async.impl.buffers.__GT_FixedBuffer = (function cljs$core$async$impl$buffers$__GT_FixedBuffer(buf,n){
return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});

cljs.core.async.impl.buffers.fixed_buffer = (function cljs$core$async$impl$buffers$fixed_buffer(n){
return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if((self__.buf.length === self__.n)){
} else {
self__.buf.unshift(itm);
}

return this$__$1;
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;

cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";

cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});

cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function cljs$core$async$impl$buffers$__GT_DroppingBuffer(buf,n){
return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});

cljs.core.async.impl.buffers.dropping_buffer = (function cljs$core$async$impl$buffers$dropping_buffer(n){
return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if((self__.buf.length === self__.n)){
cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else {
}

self__.buf.unshift(itm);

return this$__$1;
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;

cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";

cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});

cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function cljs$core$async$impl$buffers$__GT_SlidingBuffer(buf,n){
return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});

cljs.core.async.impl.buffers.sliding_buffer = (function cljs$core$async$impl$buffers$sliding_buffer(n){
return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

//# sourceMappingURL=buffers.js.map?rel=1436273478037