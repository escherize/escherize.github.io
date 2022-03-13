// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36201){
var map__36226 = p__36201;
var map__36226__$1 = ((((!((map__36226 == null)))?((((map__36226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36226):map__36226);
var m = map__36226__$1;
var n = cljs.core.get.call(null,map__36226__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36228_36250 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36229_36251 = null;
var count__36230_36252 = (0);
var i__36231_36253 = (0);
while(true){
if((i__36231_36253 < count__36230_36252)){
var f_36254 = cljs.core._nth.call(null,chunk__36229_36251,i__36231_36253);
cljs.core.println.call(null,"  ",f_36254);

var G__36255 = seq__36228_36250;
var G__36256 = chunk__36229_36251;
var G__36257 = count__36230_36252;
var G__36258 = (i__36231_36253 + (1));
seq__36228_36250 = G__36255;
chunk__36229_36251 = G__36256;
count__36230_36252 = G__36257;
i__36231_36253 = G__36258;
continue;
} else {
var temp__4657__auto___36259 = cljs.core.seq.call(null,seq__36228_36250);
if(temp__4657__auto___36259){
var seq__36228_36260__$1 = temp__4657__auto___36259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36228_36260__$1)){
var c__28211__auto___36261 = cljs.core.chunk_first.call(null,seq__36228_36260__$1);
var G__36262 = cljs.core.chunk_rest.call(null,seq__36228_36260__$1);
var G__36263 = c__28211__auto___36261;
var G__36264 = cljs.core.count.call(null,c__28211__auto___36261);
var G__36265 = (0);
seq__36228_36250 = G__36262;
chunk__36229_36251 = G__36263;
count__36230_36252 = G__36264;
i__36231_36253 = G__36265;
continue;
} else {
var f_36266 = cljs.core.first.call(null,seq__36228_36260__$1);
cljs.core.println.call(null,"  ",f_36266);

var G__36267 = cljs.core.next.call(null,seq__36228_36260__$1);
var G__36268 = null;
var G__36269 = (0);
var G__36270 = (0);
seq__36228_36250 = G__36267;
chunk__36229_36251 = G__36268;
count__36230_36252 = G__36269;
i__36231_36253 = G__36270;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36271 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27400__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36271);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36271)))?cljs.core.second.call(null,arglists_36271):arglists_36271));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__36232_36272 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36233_36273 = null;
var count__36234_36274 = (0);
var i__36235_36275 = (0);
while(true){
if((i__36235_36275 < count__36234_36274)){
var vec__36236_36276 = cljs.core._nth.call(null,chunk__36233_36273,i__36235_36275);
var name_36277 = cljs.core.nth.call(null,vec__36236_36276,(0),null);
var map__36239_36278 = cljs.core.nth.call(null,vec__36236_36276,(1),null);
var map__36239_36279__$1 = ((((!((map__36239_36278 == null)))?((((map__36239_36278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36239_36278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36239_36278):map__36239_36278);
var doc_36280 = cljs.core.get.call(null,map__36239_36279__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36281 = cljs.core.get.call(null,map__36239_36279__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36277);

cljs.core.println.call(null," ",arglists_36281);

if(cljs.core.truth_(doc_36280)){
cljs.core.println.call(null," ",doc_36280);
} else {
}

var G__36282 = seq__36232_36272;
var G__36283 = chunk__36233_36273;
var G__36284 = count__36234_36274;
var G__36285 = (i__36235_36275 + (1));
seq__36232_36272 = G__36282;
chunk__36233_36273 = G__36283;
count__36234_36274 = G__36284;
i__36235_36275 = G__36285;
continue;
} else {
var temp__4657__auto___36286 = cljs.core.seq.call(null,seq__36232_36272);
if(temp__4657__auto___36286){
var seq__36232_36287__$1 = temp__4657__auto___36286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36232_36287__$1)){
var c__28211__auto___36288 = cljs.core.chunk_first.call(null,seq__36232_36287__$1);
var G__36289 = cljs.core.chunk_rest.call(null,seq__36232_36287__$1);
var G__36290 = c__28211__auto___36288;
var G__36291 = cljs.core.count.call(null,c__28211__auto___36288);
var G__36292 = (0);
seq__36232_36272 = G__36289;
chunk__36233_36273 = G__36290;
count__36234_36274 = G__36291;
i__36235_36275 = G__36292;
continue;
} else {
var vec__36241_36293 = cljs.core.first.call(null,seq__36232_36287__$1);
var name_36294 = cljs.core.nth.call(null,vec__36241_36293,(0),null);
var map__36244_36295 = cljs.core.nth.call(null,vec__36241_36293,(1),null);
var map__36244_36296__$1 = ((((!((map__36244_36295 == null)))?((((map__36244_36295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36244_36295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36244_36295):map__36244_36295);
var doc_36297 = cljs.core.get.call(null,map__36244_36296__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36298 = cljs.core.get.call(null,map__36244_36296__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36294);

cljs.core.println.call(null," ",arglists_36298);

if(cljs.core.truth_(doc_36297)){
cljs.core.println.call(null," ",doc_36297);
} else {
}

var G__36299 = cljs.core.next.call(null,seq__36232_36287__$1);
var G__36300 = null;
var G__36301 = (0);
var G__36302 = (0);
seq__36232_36272 = G__36299;
chunk__36233_36273 = G__36300;
count__36234_36274 = G__36301;
i__36235_36275 = G__36302;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36246 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36247 = null;
var count__36248 = (0);
var i__36249 = (0);
while(true){
if((i__36249 < count__36248)){
var role = cljs.core._nth.call(null,chunk__36247,i__36249);
var temp__4657__auto___36303__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36303__$1)){
var spec_36304 = temp__4657__auto___36303__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36304));
} else {
}

var G__36305 = seq__36246;
var G__36306 = chunk__36247;
var G__36307 = count__36248;
var G__36308 = (i__36249 + (1));
seq__36246 = G__36305;
chunk__36247 = G__36306;
count__36248 = G__36307;
i__36249 = G__36308;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36246);
if(temp__4657__auto____$1){
var seq__36246__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36246__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__36246__$1);
var G__36309 = cljs.core.chunk_rest.call(null,seq__36246__$1);
var G__36310 = c__28211__auto__;
var G__36311 = cljs.core.count.call(null,c__28211__auto__);
var G__36312 = (0);
seq__36246 = G__36309;
chunk__36247 = G__36310;
count__36248 = G__36311;
i__36249 = G__36312;
continue;
} else {
var role = cljs.core.first.call(null,seq__36246__$1);
var temp__4657__auto___36313__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36313__$2)){
var spec_36314 = temp__4657__auto___36313__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36314));
} else {
}

var G__36315 = cljs.core.next.call(null,seq__36246__$1);
var G__36316 = null;
var G__36317 = (0);
var G__36318 = (0);
seq__36246 = G__36315;
chunk__36247 = G__36316;
count__36248 = G__36317;
i__36249 = G__36318;
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

//# sourceMappingURL=repl.js.map?rel=1481770138793