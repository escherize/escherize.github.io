// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
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
var seq__33604_33616 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33605_33617 = null;
var count__33606_33618 = (0);
var i__33607_33619 = (0);
while(true){
if((i__33607_33619 < count__33606_33618)){
var f_33620 = cljs.core._nth.call(null,chunk__33605_33617,i__33607_33619);
cljs.core.println.call(null,"  ",f_33620);

var G__33621 = seq__33604_33616;
var G__33622 = chunk__33605_33617;
var G__33623 = count__33606_33618;
var G__33624 = (i__33607_33619 + (1));
seq__33604_33616 = G__33621;
chunk__33605_33617 = G__33622;
count__33606_33618 = G__33623;
i__33607_33619 = G__33624;
continue;
} else {
var temp__4126__auto___33625 = cljs.core.seq.call(null,seq__33604_33616);
if(temp__4126__auto___33625){
var seq__33604_33626__$1 = temp__4126__auto___33625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33604_33626__$1)){
var c__23159__auto___33627 = cljs.core.chunk_first.call(null,seq__33604_33626__$1);
var G__33628 = cljs.core.chunk_rest.call(null,seq__33604_33626__$1);
var G__33629 = c__23159__auto___33627;
var G__33630 = cljs.core.count.call(null,c__23159__auto___33627);
var G__33631 = (0);
seq__33604_33616 = G__33628;
chunk__33605_33617 = G__33629;
count__33606_33618 = G__33630;
i__33607_33619 = G__33631;
continue;
} else {
var f_33632 = cljs.core.first.call(null,seq__33604_33626__$1);
cljs.core.println.call(null,"  ",f_33632);

var G__33633 = cljs.core.next.call(null,seq__33604_33626__$1);
var G__33634 = null;
var G__33635 = (0);
var G__33636 = (0);
seq__33604_33616 = G__33633;
chunk__33605_33617 = G__33634;
count__33606_33618 = G__33635;
i__33607_33619 = G__33636;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__22374__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
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
var seq__33608 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33609 = null;
var count__33610 = (0);
var i__33611 = (0);
while(true){
if((i__33611 < count__33610)){
var vec__33612 = cljs.core._nth.call(null,chunk__33609,i__33611);
var name = cljs.core.nth.call(null,vec__33612,(0),null);
var map__33613 = cljs.core.nth.call(null,vec__33612,(1),null);
var map__33613__$1 = ((cljs.core.seq_QMARK_.call(null,map__33613))?cljs.core.apply.call(null,cljs.core.hash_map,map__33613):map__33613);
var arglists = cljs.core.get.call(null,map__33613__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__33613__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33637 = seq__33608;
var G__33638 = chunk__33609;
var G__33639 = count__33610;
var G__33640 = (i__33611 + (1));
seq__33608 = G__33637;
chunk__33609 = G__33638;
count__33610 = G__33639;
i__33611 = G__33640;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33608);
if(temp__4126__auto__){
var seq__33608__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33608__$1)){
var c__23159__auto__ = cljs.core.chunk_first.call(null,seq__33608__$1);
var G__33641 = cljs.core.chunk_rest.call(null,seq__33608__$1);
var G__33642 = c__23159__auto__;
var G__33643 = cljs.core.count.call(null,c__23159__auto__);
var G__33644 = (0);
seq__33608 = G__33641;
chunk__33609 = G__33642;
count__33610 = G__33643;
i__33611 = G__33644;
continue;
} else {
var vec__33614 = cljs.core.first.call(null,seq__33608__$1);
var name = cljs.core.nth.call(null,vec__33614,(0),null);
var map__33615 = cljs.core.nth.call(null,vec__33614,(1),null);
var map__33615__$1 = ((cljs.core.seq_QMARK_.call(null,map__33615))?cljs.core.apply.call(null,cljs.core.hash_map,map__33615):map__33615);
var arglists = cljs.core.get.call(null,map__33615__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__33615__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33645 = cljs.core.next.call(null,seq__33608__$1);
var G__33646 = null;
var G__33647 = (0);
var G__33648 = (0);
seq__33608 = G__33645;
chunk__33609 = G__33646;
count__33610 = G__33647;
i__33611 = G__33648;
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
}
});

//# sourceMappingURL=repl.js.map?rel=1436273479594