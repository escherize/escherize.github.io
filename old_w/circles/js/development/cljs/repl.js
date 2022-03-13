// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29314){
var map__29315 = p__29314;
var map__29315__$1 = ((((!((map__29315 == null)))?(((((map__29315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29315):map__29315);
var m = map__29315__$1;
var n = cljs.core.get.call(null,map__29315__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29315__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29317_29339 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29318_29340 = null;
var count__29319_29341 = (0);
var i__29320_29342 = (0);
while(true){
if((i__29320_29342 < count__29319_29341)){
var f_29343 = cljs.core._nth.call(null,chunk__29318_29340,i__29320_29342);
cljs.core.println.call(null,"  ",f_29343);


var G__29344 = seq__29317_29339;
var G__29345 = chunk__29318_29340;
var G__29346 = count__29319_29341;
var G__29347 = (i__29320_29342 + (1));
seq__29317_29339 = G__29344;
chunk__29318_29340 = G__29345;
count__29319_29341 = G__29346;
i__29320_29342 = G__29347;
continue;
} else {
var temp__5457__auto___29348 = cljs.core.seq.call(null,seq__29317_29339);
if(temp__5457__auto___29348){
var seq__29317_29349__$1 = temp__5457__auto___29348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29317_29349__$1)){
var c__4319__auto___29350 = cljs.core.chunk_first.call(null,seq__29317_29349__$1);
var G__29351 = cljs.core.chunk_rest.call(null,seq__29317_29349__$1);
var G__29352 = c__4319__auto___29350;
var G__29353 = cljs.core.count.call(null,c__4319__auto___29350);
var G__29354 = (0);
seq__29317_29339 = G__29351;
chunk__29318_29340 = G__29352;
count__29319_29341 = G__29353;
i__29320_29342 = G__29354;
continue;
} else {
var f_29355 = cljs.core.first.call(null,seq__29317_29349__$1);
cljs.core.println.call(null,"  ",f_29355);


var G__29356 = cljs.core.next.call(null,seq__29317_29349__$1);
var G__29357 = null;
var G__29358 = (0);
var G__29359 = (0);
seq__29317_29339 = G__29356;
chunk__29318_29340 = G__29357;
count__29319_29341 = G__29358;
i__29320_29342 = G__29359;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29360 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29360);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29360)))?cljs.core.second.call(null,arglists_29360):arglists_29360));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29321_29361 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29322_29362 = null;
var count__29323_29363 = (0);
var i__29324_29364 = (0);
while(true){
if((i__29324_29364 < count__29323_29363)){
var vec__29325_29365 = cljs.core._nth.call(null,chunk__29322_29362,i__29324_29364);
var name_29366 = cljs.core.nth.call(null,vec__29325_29365,(0),null);
var map__29328_29367 = cljs.core.nth.call(null,vec__29325_29365,(1),null);
var map__29328_29368__$1 = ((((!((map__29328_29367 == null)))?(((((map__29328_29367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29328_29367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29328_29367):map__29328_29367);
var doc_29369 = cljs.core.get.call(null,map__29328_29368__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29370 = cljs.core.get.call(null,map__29328_29368__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29366);

cljs.core.println.call(null," ",arglists_29370);

if(cljs.core.truth_(doc_29369)){
cljs.core.println.call(null," ",doc_29369);
} else {
}


var G__29371 = seq__29321_29361;
var G__29372 = chunk__29322_29362;
var G__29373 = count__29323_29363;
var G__29374 = (i__29324_29364 + (1));
seq__29321_29361 = G__29371;
chunk__29322_29362 = G__29372;
count__29323_29363 = G__29373;
i__29324_29364 = G__29374;
continue;
} else {
var temp__5457__auto___29375 = cljs.core.seq.call(null,seq__29321_29361);
if(temp__5457__auto___29375){
var seq__29321_29376__$1 = temp__5457__auto___29375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29321_29376__$1)){
var c__4319__auto___29377 = cljs.core.chunk_first.call(null,seq__29321_29376__$1);
var G__29378 = cljs.core.chunk_rest.call(null,seq__29321_29376__$1);
var G__29379 = c__4319__auto___29377;
var G__29380 = cljs.core.count.call(null,c__4319__auto___29377);
var G__29381 = (0);
seq__29321_29361 = G__29378;
chunk__29322_29362 = G__29379;
count__29323_29363 = G__29380;
i__29324_29364 = G__29381;
continue;
} else {
var vec__29330_29382 = cljs.core.first.call(null,seq__29321_29376__$1);
var name_29383 = cljs.core.nth.call(null,vec__29330_29382,(0),null);
var map__29333_29384 = cljs.core.nth.call(null,vec__29330_29382,(1),null);
var map__29333_29385__$1 = ((((!((map__29333_29384 == null)))?(((((map__29333_29384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29333_29384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29333_29384):map__29333_29384);
var doc_29386 = cljs.core.get.call(null,map__29333_29385__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29387 = cljs.core.get.call(null,map__29333_29385__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29383);

cljs.core.println.call(null," ",arglists_29387);

if(cljs.core.truth_(doc_29386)){
cljs.core.println.call(null," ",doc_29386);
} else {
}


var G__29388 = cljs.core.next.call(null,seq__29321_29376__$1);
var G__29389 = null;
var G__29390 = (0);
var G__29391 = (0);
seq__29321_29361 = G__29388;
chunk__29322_29362 = G__29389;
count__29323_29363 = G__29390;
i__29324_29364 = G__29391;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__29335 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29336 = null;
var count__29337 = (0);
var i__29338 = (0);
while(true){
if((i__29338 < count__29337)){
var role = cljs.core._nth.call(null,chunk__29336,i__29338);
var temp__5457__auto___29392__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29392__$1)){
var spec_29393 = temp__5457__auto___29392__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29393));
} else {
}


var G__29394 = seq__29335;
var G__29395 = chunk__29336;
var G__29396 = count__29337;
var G__29397 = (i__29338 + (1));
seq__29335 = G__29394;
chunk__29336 = G__29395;
count__29337 = G__29396;
i__29338 = G__29397;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29335);
if(temp__5457__auto____$1){
var seq__29335__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29335__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29335__$1);
var G__29398 = cljs.core.chunk_rest.call(null,seq__29335__$1);
var G__29399 = c__4319__auto__;
var G__29400 = cljs.core.count.call(null,c__4319__auto__);
var G__29401 = (0);
seq__29335 = G__29398;
chunk__29336 = G__29399;
count__29337 = G__29400;
i__29338 = G__29401;
continue;
} else {
var role = cljs.core.first.call(null,seq__29335__$1);
var temp__5457__auto___29402__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29402__$2)){
var spec_29403 = temp__5457__auto___29402__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29403));
} else {
}


var G__29404 = cljs.core.next.call(null,seq__29335__$1);
var G__29405 = null;
var G__29406 = (0);
var G__29407 = (0);
seq__29335 = G__29404;
chunk__29336 = G__29405;
count__29337 = G__29406;
i__29338 = G__29407;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1525371778577
