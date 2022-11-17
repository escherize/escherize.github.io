// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28646_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28646_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28647 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28648 = null;
var count__28649 = (0);
var i__28650 = (0);
while(true){
if((i__28650 < count__28649)){
var n = cljs.core._nth.call(null,chunk__28648,i__28650);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28651 = seq__28647;
var G__28652 = chunk__28648;
var G__28653 = count__28649;
var G__28654 = (i__28650 + (1));
seq__28647 = G__28651;
chunk__28648 = G__28652;
count__28649 = G__28653;
i__28650 = G__28654;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28647);
if(temp__5457__auto__){
var seq__28647__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28647__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28647__$1);
var G__28655 = cljs.core.chunk_rest.call(null,seq__28647__$1);
var G__28656 = c__4319__auto__;
var G__28657 = cljs.core.count.call(null,c__4319__auto__);
var G__28658 = (0);
seq__28647 = G__28655;
chunk__28648 = G__28656;
count__28649 = G__28657;
i__28650 = G__28658;
continue;
} else {
var n = cljs.core.first.call(null,seq__28647__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28659 = cljs.core.next.call(null,seq__28647__$1);
var G__28660 = null;
var G__28661 = (0);
var G__28662 = (0);
seq__28647 = G__28659;
chunk__28648 = G__28660;
count__28649 = G__28661;
i__28650 = G__28662;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28663){
var vec__28664 = p__28663;
var _ = cljs.core.nth.call(null,vec__28664,(0),null);
var v = cljs.core.nth.call(null,vec__28664,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__28667){
var vec__28668 = p__28667;
var k = cljs.core.nth.call(null,vec__28668,(0),null);
var v = cljs.core.nth.call(null,vec__28668,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28680_28688 = cljs.core.seq.call(null,deps);
var chunk__28681_28689 = null;
var count__28682_28690 = (0);
var i__28683_28691 = (0);
while(true){
if((i__28683_28691 < count__28682_28690)){
var dep_28692 = cljs.core._nth.call(null,chunk__28681_28689,i__28683_28691);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28692;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28692));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28692,(depth + (1)),state);
} else {
}


var G__28693 = seq__28680_28688;
var G__28694 = chunk__28681_28689;
var G__28695 = count__28682_28690;
var G__28696 = (i__28683_28691 + (1));
seq__28680_28688 = G__28693;
chunk__28681_28689 = G__28694;
count__28682_28690 = G__28695;
i__28683_28691 = G__28696;
continue;
} else {
var temp__5457__auto___28697 = cljs.core.seq.call(null,seq__28680_28688);
if(temp__5457__auto___28697){
var seq__28680_28698__$1 = temp__5457__auto___28697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28680_28698__$1)){
var c__4319__auto___28699 = cljs.core.chunk_first.call(null,seq__28680_28698__$1);
var G__28700 = cljs.core.chunk_rest.call(null,seq__28680_28698__$1);
var G__28701 = c__4319__auto___28699;
var G__28702 = cljs.core.count.call(null,c__4319__auto___28699);
var G__28703 = (0);
seq__28680_28688 = G__28700;
chunk__28681_28689 = G__28701;
count__28682_28690 = G__28702;
i__28683_28691 = G__28703;
continue;
} else {
var dep_28704 = cljs.core.first.call(null,seq__28680_28698__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28704;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28704));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28704,(depth + (1)),state);
} else {
}


var G__28705 = cljs.core.next.call(null,seq__28680_28698__$1);
var G__28706 = null;
var G__28707 = (0);
var G__28708 = (0);
seq__28680_28688 = G__28705;
chunk__28681_28689 = G__28706;
count__28682_28690 = G__28707;
i__28683_28691 = G__28708;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28684){
var vec__28685 = p__28684;
var seq__28686 = cljs.core.seq.call(null,vec__28685);
var first__28687 = cljs.core.first.call(null,seq__28686);
var seq__28686__$1 = cljs.core.next.call(null,seq__28686);
var x = first__28687;
var xs = seq__28686__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28685,seq__28686,first__28687,seq__28686__$1,x,xs,get_deps__$1){
return (function (p1__28671_SHARP_){
return clojure.set.difference.call(null,p1__28671_SHARP_,x);
});})(vec__28685,seq__28686,first__28687,seq__28686__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28709 = cljs.core.seq.call(null,provides);
var chunk__28710 = null;
var count__28711 = (0);
var i__28712 = (0);
while(true){
if((i__28712 < count__28711)){
var prov = cljs.core._nth.call(null,chunk__28710,i__28712);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28713_28721 = cljs.core.seq.call(null,requires);
var chunk__28714_28722 = null;
var count__28715_28723 = (0);
var i__28716_28724 = (0);
while(true){
if((i__28716_28724 < count__28715_28723)){
var req_28725 = cljs.core._nth.call(null,chunk__28714_28722,i__28716_28724);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28725,prov);


var G__28726 = seq__28713_28721;
var G__28727 = chunk__28714_28722;
var G__28728 = count__28715_28723;
var G__28729 = (i__28716_28724 + (1));
seq__28713_28721 = G__28726;
chunk__28714_28722 = G__28727;
count__28715_28723 = G__28728;
i__28716_28724 = G__28729;
continue;
} else {
var temp__5457__auto___28730 = cljs.core.seq.call(null,seq__28713_28721);
if(temp__5457__auto___28730){
var seq__28713_28731__$1 = temp__5457__auto___28730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28713_28731__$1)){
var c__4319__auto___28732 = cljs.core.chunk_first.call(null,seq__28713_28731__$1);
var G__28733 = cljs.core.chunk_rest.call(null,seq__28713_28731__$1);
var G__28734 = c__4319__auto___28732;
var G__28735 = cljs.core.count.call(null,c__4319__auto___28732);
var G__28736 = (0);
seq__28713_28721 = G__28733;
chunk__28714_28722 = G__28734;
count__28715_28723 = G__28735;
i__28716_28724 = G__28736;
continue;
} else {
var req_28737 = cljs.core.first.call(null,seq__28713_28731__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28737,prov);


var G__28738 = cljs.core.next.call(null,seq__28713_28731__$1);
var G__28739 = null;
var G__28740 = (0);
var G__28741 = (0);
seq__28713_28721 = G__28738;
chunk__28714_28722 = G__28739;
count__28715_28723 = G__28740;
i__28716_28724 = G__28741;
continue;
}
} else {
}
}
break;
}


var G__28742 = seq__28709;
var G__28743 = chunk__28710;
var G__28744 = count__28711;
var G__28745 = (i__28712 + (1));
seq__28709 = G__28742;
chunk__28710 = G__28743;
count__28711 = G__28744;
i__28712 = G__28745;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28709);
if(temp__5457__auto__){
var seq__28709__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28709__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28709__$1);
var G__28746 = cljs.core.chunk_rest.call(null,seq__28709__$1);
var G__28747 = c__4319__auto__;
var G__28748 = cljs.core.count.call(null,c__4319__auto__);
var G__28749 = (0);
seq__28709 = G__28746;
chunk__28710 = G__28747;
count__28711 = G__28748;
i__28712 = G__28749;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28709__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28717_28750 = cljs.core.seq.call(null,requires);
var chunk__28718_28751 = null;
var count__28719_28752 = (0);
var i__28720_28753 = (0);
while(true){
if((i__28720_28753 < count__28719_28752)){
var req_28754 = cljs.core._nth.call(null,chunk__28718_28751,i__28720_28753);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28754,prov);


var G__28755 = seq__28717_28750;
var G__28756 = chunk__28718_28751;
var G__28757 = count__28719_28752;
var G__28758 = (i__28720_28753 + (1));
seq__28717_28750 = G__28755;
chunk__28718_28751 = G__28756;
count__28719_28752 = G__28757;
i__28720_28753 = G__28758;
continue;
} else {
var temp__5457__auto___28759__$1 = cljs.core.seq.call(null,seq__28717_28750);
if(temp__5457__auto___28759__$1){
var seq__28717_28760__$1 = temp__5457__auto___28759__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28717_28760__$1)){
var c__4319__auto___28761 = cljs.core.chunk_first.call(null,seq__28717_28760__$1);
var G__28762 = cljs.core.chunk_rest.call(null,seq__28717_28760__$1);
var G__28763 = c__4319__auto___28761;
var G__28764 = cljs.core.count.call(null,c__4319__auto___28761);
var G__28765 = (0);
seq__28717_28750 = G__28762;
chunk__28718_28751 = G__28763;
count__28719_28752 = G__28764;
i__28720_28753 = G__28765;
continue;
} else {
var req_28766 = cljs.core.first.call(null,seq__28717_28760__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28766,prov);


var G__28767 = cljs.core.next.call(null,seq__28717_28760__$1);
var G__28768 = null;
var G__28769 = (0);
var G__28770 = (0);
seq__28717_28750 = G__28767;
chunk__28718_28751 = G__28768;
count__28719_28752 = G__28769;
i__28720_28753 = G__28770;
continue;
}
} else {
}
}
break;
}


var G__28771 = cljs.core.next.call(null,seq__28709__$1);
var G__28772 = null;
var G__28773 = (0);
var G__28774 = (0);
seq__28709 = G__28771;
chunk__28710 = G__28772;
count__28711 = G__28773;
i__28712 = G__28774;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28775_28779 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28776_28780 = null;
var count__28777_28781 = (0);
var i__28778_28782 = (0);
while(true){
if((i__28778_28782 < count__28777_28781)){
var ns_28783 = cljs.core._nth.call(null,chunk__28776_28780,i__28778_28782);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28783);


var G__28784 = seq__28775_28779;
var G__28785 = chunk__28776_28780;
var G__28786 = count__28777_28781;
var G__28787 = (i__28778_28782 + (1));
seq__28775_28779 = G__28784;
chunk__28776_28780 = G__28785;
count__28777_28781 = G__28786;
i__28778_28782 = G__28787;
continue;
} else {
var temp__5457__auto___28788 = cljs.core.seq.call(null,seq__28775_28779);
if(temp__5457__auto___28788){
var seq__28775_28789__$1 = temp__5457__auto___28788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28775_28789__$1)){
var c__4319__auto___28790 = cljs.core.chunk_first.call(null,seq__28775_28789__$1);
var G__28791 = cljs.core.chunk_rest.call(null,seq__28775_28789__$1);
var G__28792 = c__4319__auto___28790;
var G__28793 = cljs.core.count.call(null,c__4319__auto___28790);
var G__28794 = (0);
seq__28775_28779 = G__28791;
chunk__28776_28780 = G__28792;
count__28777_28781 = G__28793;
i__28778_28782 = G__28794;
continue;
} else {
var ns_28795 = cljs.core.first.call(null,seq__28775_28789__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28795);


var G__28796 = cljs.core.next.call(null,seq__28775_28789__$1);
var G__28797 = null;
var G__28798 = (0);
var G__28799 = (0);
seq__28775_28779 = G__28796;
chunk__28776_28780 = G__28797;
count__28777_28781 = G__28798;
i__28778_28782 = G__28799;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28800__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28801__i = 0, G__28801__a = new Array(arguments.length -  0);
while (G__28801__i < G__28801__a.length) {G__28801__a[G__28801__i] = arguments[G__28801__i + 0]; ++G__28801__i;}
  args = new cljs.core.IndexedSeq(G__28801__a,0,null);
} 
return G__28800__delegate.call(this,args);};
G__28800.cljs$lang$maxFixedArity = 0;
G__28800.cljs$lang$applyTo = (function (arglist__28802){
var args = cljs.core.seq(arglist__28802);
return G__28800__delegate(args);
});
G__28800.cljs$core$IFn$_invoke$arity$variadic = G__28800__delegate;
return G__28800;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__28803_SHARP_,p2__28804_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28803_SHARP_)].join('')),p2__28804_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__28805_SHARP_,p2__28806_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28805_SHARP_)].join(''),p2__28806_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28807 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28807.addCallback(((function (G__28807){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28807))
);

G__28807.addErrback(((function (G__28807){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28807))
);

return G__28807;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28808){if((e28808 instanceof Error)){
var e = e28808;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28808;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28809){if((e28809 instanceof Error)){
var e = e28809;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28809;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28810 = cljs.core._EQ_;
var expr__28811 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28810.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28811))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28810.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28811))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28810.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28811))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28810,expr__28811){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28810,expr__28811))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28813,callback){
var map__28814 = p__28813;
var map__28814__$1 = ((((!((map__28814 == null)))?(((((map__28814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28814):map__28814);
var file_msg = map__28814__$1;
var request_url = cljs.core.get.call(null,map__28814__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28814,map__28814__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28814,map__28814__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto__){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto__){
return (function (state_28852){
var state_val_28853 = (state_28852[(1)]);
if((state_val_28853 === (7))){
var inst_28848 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28854_28880 = state_28852__$1;
(statearr_28854_28880[(2)] = inst_28848);

(statearr_28854_28880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (1))){
var state_28852__$1 = state_28852;
var statearr_28855_28881 = state_28852__$1;
(statearr_28855_28881[(2)] = null);

(statearr_28855_28881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (4))){
var inst_28818 = (state_28852[(7)]);
var inst_28818__$1 = (state_28852[(2)]);
var state_28852__$1 = (function (){var statearr_28856 = state_28852;
(statearr_28856[(7)] = inst_28818__$1);

return statearr_28856;
})();
if(cljs.core.truth_(inst_28818__$1)){
var statearr_28857_28882 = state_28852__$1;
(statearr_28857_28882[(1)] = (5));

} else {
var statearr_28858_28883 = state_28852__$1;
(statearr_28858_28883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (15))){
var inst_28831 = (state_28852[(8)]);
var inst_28833 = (state_28852[(9)]);
var inst_28835 = inst_28833.call(null,inst_28831);
var state_28852__$1 = state_28852;
var statearr_28859_28884 = state_28852__$1;
(statearr_28859_28884[(2)] = inst_28835);

(statearr_28859_28884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (13))){
var inst_28842 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28860_28885 = state_28852__$1;
(statearr_28860_28885[(2)] = inst_28842);

(statearr_28860_28885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (6))){
var state_28852__$1 = state_28852;
var statearr_28861_28886 = state_28852__$1;
(statearr_28861_28886[(2)] = null);

(statearr_28861_28886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (17))){
var inst_28839 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28862_28887 = state_28852__$1;
(statearr_28862_28887[(2)] = inst_28839);

(statearr_28862_28887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (3))){
var inst_28850 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28852__$1,inst_28850);
} else {
if((state_val_28853 === (12))){
var state_28852__$1 = state_28852;
var statearr_28863_28888 = state_28852__$1;
(statearr_28863_28888[(2)] = null);

(statearr_28863_28888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (2))){
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28852__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28853 === (11))){
var inst_28823 = (state_28852[(10)]);
var inst_28829 = figwheel.client.file_reloading.blocking_load.call(null,inst_28823);
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28852__$1,(14),inst_28829);
} else {
if((state_val_28853 === (9))){
var inst_28823 = (state_28852[(10)]);
var state_28852__$1 = state_28852;
if(cljs.core.truth_(inst_28823)){
var statearr_28864_28889 = state_28852__$1;
(statearr_28864_28889[(1)] = (11));

} else {
var statearr_28865_28890 = state_28852__$1;
(statearr_28865_28890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (5))){
var inst_28818 = (state_28852[(7)]);
var inst_28824 = (state_28852[(11)]);
var inst_28823 = cljs.core.nth.call(null,inst_28818,(0),null);
var inst_28824__$1 = cljs.core.nth.call(null,inst_28818,(1),null);
var state_28852__$1 = (function (){var statearr_28866 = state_28852;
(statearr_28866[(11)] = inst_28824__$1);

(statearr_28866[(10)] = inst_28823);

return statearr_28866;
})();
if(cljs.core.truth_(inst_28824__$1)){
var statearr_28867_28891 = state_28852__$1;
(statearr_28867_28891[(1)] = (8));

} else {
var statearr_28868_28892 = state_28852__$1;
(statearr_28868_28892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (14))){
var inst_28833 = (state_28852[(9)]);
var inst_28823 = (state_28852[(10)]);
var inst_28831 = (state_28852[(2)]);
var inst_28832 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28833__$1 = cljs.core.get.call(null,inst_28832,inst_28823);
var state_28852__$1 = (function (){var statearr_28869 = state_28852;
(statearr_28869[(8)] = inst_28831);

(statearr_28869[(9)] = inst_28833__$1);

return statearr_28869;
})();
if(cljs.core.truth_(inst_28833__$1)){
var statearr_28870_28893 = state_28852__$1;
(statearr_28870_28893[(1)] = (15));

} else {
var statearr_28871_28894 = state_28852__$1;
(statearr_28871_28894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (16))){
var inst_28831 = (state_28852[(8)]);
var inst_28837 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28831);
var state_28852__$1 = state_28852;
var statearr_28872_28895 = state_28852__$1;
(statearr_28872_28895[(2)] = inst_28837);

(statearr_28872_28895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (10))){
var inst_28844 = (state_28852[(2)]);
var state_28852__$1 = (function (){var statearr_28873 = state_28852;
(statearr_28873[(12)] = inst_28844);

return statearr_28873;
})();
var statearr_28874_28896 = state_28852__$1;
(statearr_28874_28896[(2)] = null);

(statearr_28874_28896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (8))){
var inst_28824 = (state_28852[(11)]);
var inst_28826 = eval(inst_28824);
var state_28852__$1 = state_28852;
var statearr_28875_28897 = state_28852__$1;
(statearr_28875_28897[(2)] = inst_28826);

(statearr_28875_28897[(1)] = (10));


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
});})(c__25379__auto__))
;
return ((function (switch__25289__auto__,c__25379__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25290__auto__ = null;
var figwheel$client$file_reloading$state_machine__25290__auto____0 = (function (){
var statearr_28876 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28876[(0)] = figwheel$client$file_reloading$state_machine__25290__auto__);

(statearr_28876[(1)] = (1));

return statearr_28876;
});
var figwheel$client$file_reloading$state_machine__25290__auto____1 = (function (state_28852){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_28852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e28877){if((e28877 instanceof Object)){
var ex__25293__auto__ = e28877;
var statearr_28878_28898 = state_28852;
(statearr_28878_28898[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28899 = state_28852;
state_28852 = G__28899;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25290__auto__ = function(state_28852){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25290__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25290__auto____1.call(this,state_28852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25290__auto____0;
figwheel$client$file_reloading$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25290__auto____1;
return figwheel$client$file_reloading$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto__))
})();
var state__25381__auto__ = (function (){var statearr_28879 = f__25380__auto__.call(null);
(statearr_28879[(6)] = c__25379__auto__);

return statearr_28879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto__))
);

return c__25379__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28901 = arguments.length;
switch (G__28901) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28903,callback){
var map__28904 = p__28903;
var map__28904__$1 = ((((!((map__28904 == null)))?(((((map__28904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28904):map__28904);
var file_msg = map__28904__$1;
var namespace = cljs.core.get.call(null,map__28904__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28904,map__28904__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28904,map__28904__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28906){
var map__28907 = p__28906;
var map__28907__$1 = ((((!((map__28907 == null)))?(((((map__28907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28907):map__28907);
var file_msg = map__28907__$1;
var namespace = cljs.core.get.call(null,map__28907__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28909){
var map__28910 = p__28909;
var map__28910__$1 = ((((!((map__28910 == null)))?(((((map__28910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28910):map__28910);
var file_msg = map__28910__$1;
var namespace = cljs.core.get.call(null,map__28910__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28912,callback){
var map__28913 = p__28912;
var map__28913__$1 = ((((!((map__28913 == null)))?(((((map__28913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28913):map__28913);
var file_msg = map__28913__$1;
var request_url = cljs.core.get.call(null,map__28913__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28913__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25379__auto___28963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___28963,out){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___28963,out){
return (function (state_28948){
var state_val_28949 = (state_28948[(1)]);
if((state_val_28949 === (1))){
var inst_28922 = cljs.core.seq.call(null,files);
var inst_28923 = cljs.core.first.call(null,inst_28922);
var inst_28924 = cljs.core.next.call(null,inst_28922);
var inst_28925 = files;
var state_28948__$1 = (function (){var statearr_28950 = state_28948;
(statearr_28950[(7)] = inst_28924);

(statearr_28950[(8)] = inst_28923);

(statearr_28950[(9)] = inst_28925);

return statearr_28950;
})();
var statearr_28951_28964 = state_28948__$1;
(statearr_28951_28964[(2)] = null);

(statearr_28951_28964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (2))){
var inst_28931 = (state_28948[(10)]);
var inst_28925 = (state_28948[(9)]);
var inst_28930 = cljs.core.seq.call(null,inst_28925);
var inst_28931__$1 = cljs.core.first.call(null,inst_28930);
var inst_28932 = cljs.core.next.call(null,inst_28930);
var inst_28933 = (inst_28931__$1 == null);
var inst_28934 = cljs.core.not.call(null,inst_28933);
var state_28948__$1 = (function (){var statearr_28952 = state_28948;
(statearr_28952[(10)] = inst_28931__$1);

(statearr_28952[(11)] = inst_28932);

return statearr_28952;
})();
if(inst_28934){
var statearr_28953_28965 = state_28948__$1;
(statearr_28953_28965[(1)] = (4));

} else {
var statearr_28954_28966 = state_28948__$1;
(statearr_28954_28966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (3))){
var inst_28946 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28948__$1,inst_28946);
} else {
if((state_val_28949 === (4))){
var inst_28931 = (state_28948[(10)]);
var inst_28936 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28931);
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28948__$1,(7),inst_28936);
} else {
if((state_val_28949 === (5))){
var inst_28942 = cljs.core.async.close_BANG_.call(null,out);
var state_28948__$1 = state_28948;
var statearr_28955_28967 = state_28948__$1;
(statearr_28955_28967[(2)] = inst_28942);

(statearr_28955_28967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (6))){
var inst_28944 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28956_28968 = state_28948__$1;
(statearr_28956_28968[(2)] = inst_28944);

(statearr_28956_28968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (7))){
var inst_28932 = (state_28948[(11)]);
var inst_28938 = (state_28948[(2)]);
var inst_28939 = cljs.core.async.put_BANG_.call(null,out,inst_28938);
var inst_28925 = inst_28932;
var state_28948__$1 = (function (){var statearr_28957 = state_28948;
(statearr_28957[(9)] = inst_28925);

(statearr_28957[(12)] = inst_28939);

return statearr_28957;
})();
var statearr_28958_28969 = state_28948__$1;
(statearr_28958_28969[(2)] = null);

(statearr_28958_28969[(1)] = (2));


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
});})(c__25379__auto___28963,out))
;
return ((function (switch__25289__auto__,c__25379__auto___28963,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto____0 = (function (){
var statearr_28959 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28959[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto__);

(statearr_28959[(1)] = (1));

return statearr_28959;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto____1 = (function (state_28948){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_28948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e28960){if((e28960 instanceof Object)){
var ex__25293__auto__ = e28960;
var statearr_28961_28970 = state_28948;
(statearr_28961_28970[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28971 = state_28948;
state_28948 = G__28971;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto__ = function(state_28948){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto____1.call(this,state_28948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___28963,out))
})();
var state__25381__auto__ = (function (){var statearr_28962 = f__25380__auto__.call(null);
(statearr_28962[(6)] = c__25379__auto___28963);

return statearr_28962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___28963,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28972,opts){
var map__28973 = p__28972;
var map__28973__$1 = ((((!((map__28973 == null)))?(((((map__28973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28973):map__28973);
var eval_body = cljs.core.get.call(null,map__28973__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28975){var e = e28975;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28976_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28976_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28977){
var vec__28978 = p__28977;
var k = cljs.core.nth.call(null,vec__28978,(0),null);
var v = cljs.core.nth.call(null,vec__28978,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28981){
var vec__28982 = p__28981;
var k = cljs.core.nth.call(null,vec__28982,(0),null);
var v = cljs.core.nth.call(null,vec__28982,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28988,p__28989){
var map__28990 = p__28988;
var map__28990__$1 = ((((!((map__28990 == null)))?(((((map__28990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28990):map__28990);
var opts = map__28990__$1;
var before_jsload = cljs.core.get.call(null,map__28990__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28990__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28990__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28991 = p__28989;
var map__28991__$1 = ((((!((map__28991 == null)))?(((((map__28991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28991):map__28991);
var msg = map__28991__$1;
var files = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29145){
var state_val_29146 = (state_29145[(1)]);
if((state_val_29146 === (7))){
var inst_29008 = (state_29145[(7)]);
var inst_29007 = (state_29145[(8)]);
var inst_29005 = (state_29145[(9)]);
var inst_29006 = (state_29145[(10)]);
var inst_29013 = cljs.core._nth.call(null,inst_29006,inst_29008);
var inst_29014 = figwheel.client.file_reloading.eval_body.call(null,inst_29013,opts);
var inst_29015 = (inst_29008 + (1));
var tmp29147 = inst_29007;
var tmp29148 = inst_29005;
var tmp29149 = inst_29006;
var inst_29005__$1 = tmp29148;
var inst_29006__$1 = tmp29149;
var inst_29007__$1 = tmp29147;
var inst_29008__$1 = inst_29015;
var state_29145__$1 = (function (){var statearr_29150 = state_29145;
(statearr_29150[(7)] = inst_29008__$1);

(statearr_29150[(11)] = inst_29014);

(statearr_29150[(8)] = inst_29007__$1);

(statearr_29150[(9)] = inst_29005__$1);

(statearr_29150[(10)] = inst_29006__$1);

return statearr_29150;
})();
var statearr_29151_29234 = state_29145__$1;
(statearr_29151_29234[(2)] = null);

(statearr_29151_29234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (20))){
var inst_29048 = (state_29145[(12)]);
var inst_29056 = figwheel.client.file_reloading.sort_files.call(null,inst_29048);
var state_29145__$1 = state_29145;
var statearr_29152_29235 = state_29145__$1;
(statearr_29152_29235[(2)] = inst_29056);

(statearr_29152_29235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (27))){
var state_29145__$1 = state_29145;
var statearr_29153_29236 = state_29145__$1;
(statearr_29153_29236[(2)] = null);

(statearr_29153_29236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (1))){
var inst_28997 = (state_29145[(13)]);
var inst_28994 = before_jsload.call(null,files);
var inst_28995 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28996 = (function (){return ((function (inst_28997,inst_28994,inst_28995,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28985_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28985_SHARP_);
});
;})(inst_28997,inst_28994,inst_28995,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28997__$1 = cljs.core.filter.call(null,inst_28996,files);
var inst_28998 = cljs.core.not_empty.call(null,inst_28997__$1);
var state_29145__$1 = (function (){var statearr_29154 = state_29145;
(statearr_29154[(14)] = inst_28994);

(statearr_29154[(13)] = inst_28997__$1);

(statearr_29154[(15)] = inst_28995);

return statearr_29154;
})();
if(cljs.core.truth_(inst_28998)){
var statearr_29155_29237 = state_29145__$1;
(statearr_29155_29237[(1)] = (2));

} else {
var statearr_29156_29238 = state_29145__$1;
(statearr_29156_29238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (24))){
var state_29145__$1 = state_29145;
var statearr_29157_29239 = state_29145__$1;
(statearr_29157_29239[(2)] = null);

(statearr_29157_29239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (39))){
var inst_29098 = (state_29145[(16)]);
var state_29145__$1 = state_29145;
var statearr_29158_29240 = state_29145__$1;
(statearr_29158_29240[(2)] = inst_29098);

(statearr_29158_29240[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (46))){
var inst_29140 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29159_29241 = state_29145__$1;
(statearr_29159_29241[(2)] = inst_29140);

(statearr_29159_29241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (4))){
var inst_29042 = (state_29145[(2)]);
var inst_29043 = cljs.core.List.EMPTY;
var inst_29044 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29043);
var inst_29045 = (function (){return ((function (inst_29042,inst_29043,inst_29044,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28986_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28986_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28986_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28986_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29042,inst_29043,inst_29044,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29046 = cljs.core.filter.call(null,inst_29045,files);
var inst_29047 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29048 = cljs.core.concat.call(null,inst_29046,inst_29047);
var state_29145__$1 = (function (){var statearr_29160 = state_29145;
(statearr_29160[(17)] = inst_29044);

(statearr_29160[(12)] = inst_29048);

(statearr_29160[(18)] = inst_29042);

return statearr_29160;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29161_29242 = state_29145__$1;
(statearr_29161_29242[(1)] = (16));

} else {
var statearr_29162_29243 = state_29145__$1;
(statearr_29162_29243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (15))){
var inst_29032 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29163_29244 = state_29145__$1;
(statearr_29163_29244[(2)] = inst_29032);

(statearr_29163_29244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (21))){
var inst_29058 = (state_29145[(19)]);
var inst_29058__$1 = (state_29145[(2)]);
var inst_29059 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29058__$1);
var state_29145__$1 = (function (){var statearr_29164 = state_29145;
(statearr_29164[(19)] = inst_29058__$1);

return statearr_29164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29145__$1,(22),inst_29059);
} else {
if((state_val_29146 === (31))){
var inst_29143 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29145__$1,inst_29143);
} else {
if((state_val_29146 === (32))){
var inst_29098 = (state_29145[(16)]);
var inst_29103 = inst_29098.cljs$lang$protocol_mask$partition0$;
var inst_29104 = (inst_29103 & (64));
var inst_29105 = inst_29098.cljs$core$ISeq$;
var inst_29106 = (cljs.core.PROTOCOL_SENTINEL === inst_29105);
var inst_29107 = ((inst_29104) || (inst_29106));
var state_29145__$1 = state_29145;
if(cljs.core.truth_(inst_29107)){
var statearr_29165_29245 = state_29145__$1;
(statearr_29165_29245[(1)] = (35));

} else {
var statearr_29166_29246 = state_29145__$1;
(statearr_29166_29246[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (40))){
var inst_29120 = (state_29145[(20)]);
var inst_29119 = (state_29145[(2)]);
var inst_29120__$1 = cljs.core.get.call(null,inst_29119,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29121 = cljs.core.get.call(null,inst_29119,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29122 = cljs.core.not_empty.call(null,inst_29120__$1);
var state_29145__$1 = (function (){var statearr_29167 = state_29145;
(statearr_29167[(21)] = inst_29121);

(statearr_29167[(20)] = inst_29120__$1);

return statearr_29167;
})();
if(cljs.core.truth_(inst_29122)){
var statearr_29168_29247 = state_29145__$1;
(statearr_29168_29247[(1)] = (41));

} else {
var statearr_29169_29248 = state_29145__$1;
(statearr_29169_29248[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (33))){
var state_29145__$1 = state_29145;
var statearr_29170_29249 = state_29145__$1;
(statearr_29170_29249[(2)] = false);

(statearr_29170_29249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (13))){
var inst_29018 = (state_29145[(22)]);
var inst_29022 = cljs.core.chunk_first.call(null,inst_29018);
var inst_29023 = cljs.core.chunk_rest.call(null,inst_29018);
var inst_29024 = cljs.core.count.call(null,inst_29022);
var inst_29005 = inst_29023;
var inst_29006 = inst_29022;
var inst_29007 = inst_29024;
var inst_29008 = (0);
var state_29145__$1 = (function (){var statearr_29171 = state_29145;
(statearr_29171[(7)] = inst_29008);

(statearr_29171[(8)] = inst_29007);

(statearr_29171[(9)] = inst_29005);

(statearr_29171[(10)] = inst_29006);

return statearr_29171;
})();
var statearr_29172_29250 = state_29145__$1;
(statearr_29172_29250[(2)] = null);

(statearr_29172_29250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (22))){
var inst_29062 = (state_29145[(23)]);
var inst_29066 = (state_29145[(24)]);
var inst_29061 = (state_29145[(25)]);
var inst_29058 = (state_29145[(19)]);
var inst_29061__$1 = (state_29145[(2)]);
var inst_29062__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29061__$1);
var inst_29063 = (function (){var all_files = inst_29058;
var res_SINGLEQUOTE_ = inst_29061__$1;
var res = inst_29062__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29062,inst_29066,inst_29061,inst_29058,inst_29061__$1,inst_29062__$1,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28987_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28987_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29062,inst_29066,inst_29061,inst_29058,inst_29061__$1,inst_29062__$1,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29064 = cljs.core.filter.call(null,inst_29063,inst_29061__$1);
var inst_29065 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29066__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29065);
var inst_29067 = cljs.core.not_empty.call(null,inst_29066__$1);
var state_29145__$1 = (function (){var statearr_29173 = state_29145;
(statearr_29173[(26)] = inst_29064);

(statearr_29173[(23)] = inst_29062__$1);

(statearr_29173[(24)] = inst_29066__$1);

(statearr_29173[(25)] = inst_29061__$1);

return statearr_29173;
})();
if(cljs.core.truth_(inst_29067)){
var statearr_29174_29251 = state_29145__$1;
(statearr_29174_29251[(1)] = (23));

} else {
var statearr_29175_29252 = state_29145__$1;
(statearr_29175_29252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (36))){
var state_29145__$1 = state_29145;
var statearr_29176_29253 = state_29145__$1;
(statearr_29176_29253[(2)] = false);

(statearr_29176_29253[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (41))){
var inst_29120 = (state_29145[(20)]);
var inst_29124 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29125 = cljs.core.map.call(null,inst_29124,inst_29120);
var inst_29126 = cljs.core.pr_str.call(null,inst_29125);
var inst_29127 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29126)].join('');
var inst_29128 = figwheel.client.utils.log.call(null,inst_29127);
var state_29145__$1 = state_29145;
var statearr_29177_29254 = state_29145__$1;
(statearr_29177_29254[(2)] = inst_29128);

(statearr_29177_29254[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (43))){
var inst_29121 = (state_29145[(21)]);
var inst_29131 = (state_29145[(2)]);
var inst_29132 = cljs.core.not_empty.call(null,inst_29121);
var state_29145__$1 = (function (){var statearr_29178 = state_29145;
(statearr_29178[(27)] = inst_29131);

return statearr_29178;
})();
if(cljs.core.truth_(inst_29132)){
var statearr_29179_29255 = state_29145__$1;
(statearr_29179_29255[(1)] = (44));

} else {
var statearr_29180_29256 = state_29145__$1;
(statearr_29180_29256[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (29))){
var inst_29064 = (state_29145[(26)]);
var inst_29062 = (state_29145[(23)]);
var inst_29098 = (state_29145[(16)]);
var inst_29066 = (state_29145[(24)]);
var inst_29061 = (state_29145[(25)]);
var inst_29058 = (state_29145[(19)]);
var inst_29094 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29097 = (function (){var all_files = inst_29058;
var res_SINGLEQUOTE_ = inst_29061;
var res = inst_29062;
var files_not_loaded = inst_29064;
var dependencies_that_loaded = inst_29066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29064,inst_29062,inst_29098,inst_29066,inst_29061,inst_29058,inst_29094,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29096){
var map__29181 = p__29096;
var map__29181__$1 = ((((!((map__29181 == null)))?(((((map__29181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29181):map__29181);
var namespace = cljs.core.get.call(null,map__29181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29064,inst_29062,inst_29098,inst_29066,inst_29061,inst_29058,inst_29094,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29098__$1 = cljs.core.group_by.call(null,inst_29097,inst_29064);
var inst_29100 = (inst_29098__$1 == null);
var inst_29101 = cljs.core.not.call(null,inst_29100);
var state_29145__$1 = (function (){var statearr_29183 = state_29145;
(statearr_29183[(28)] = inst_29094);

(statearr_29183[(16)] = inst_29098__$1);

return statearr_29183;
})();
if(inst_29101){
var statearr_29184_29257 = state_29145__$1;
(statearr_29184_29257[(1)] = (32));

} else {
var statearr_29185_29258 = state_29145__$1;
(statearr_29185_29258[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (44))){
var inst_29121 = (state_29145[(21)]);
var inst_29134 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29121);
var inst_29135 = cljs.core.pr_str.call(null,inst_29134);
var inst_29136 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29135)].join('');
var inst_29137 = figwheel.client.utils.log.call(null,inst_29136);
var state_29145__$1 = state_29145;
var statearr_29186_29259 = state_29145__$1;
(statearr_29186_29259[(2)] = inst_29137);

(statearr_29186_29259[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (6))){
var inst_29039 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29187_29260 = state_29145__$1;
(statearr_29187_29260[(2)] = inst_29039);

(statearr_29187_29260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (28))){
var inst_29064 = (state_29145[(26)]);
var inst_29091 = (state_29145[(2)]);
var inst_29092 = cljs.core.not_empty.call(null,inst_29064);
var state_29145__$1 = (function (){var statearr_29188 = state_29145;
(statearr_29188[(29)] = inst_29091);

return statearr_29188;
})();
if(cljs.core.truth_(inst_29092)){
var statearr_29189_29261 = state_29145__$1;
(statearr_29189_29261[(1)] = (29));

} else {
var statearr_29190_29262 = state_29145__$1;
(statearr_29190_29262[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (25))){
var inst_29062 = (state_29145[(23)]);
var inst_29078 = (state_29145[(2)]);
var inst_29079 = cljs.core.not_empty.call(null,inst_29062);
var state_29145__$1 = (function (){var statearr_29191 = state_29145;
(statearr_29191[(30)] = inst_29078);

return statearr_29191;
})();
if(cljs.core.truth_(inst_29079)){
var statearr_29192_29263 = state_29145__$1;
(statearr_29192_29263[(1)] = (26));

} else {
var statearr_29193_29264 = state_29145__$1;
(statearr_29193_29264[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (34))){
var inst_29114 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
if(cljs.core.truth_(inst_29114)){
var statearr_29194_29265 = state_29145__$1;
(statearr_29194_29265[(1)] = (38));

} else {
var statearr_29195_29266 = state_29145__$1;
(statearr_29195_29266[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (17))){
var state_29145__$1 = state_29145;
var statearr_29196_29267 = state_29145__$1;
(statearr_29196_29267[(2)] = recompile_dependents);

(statearr_29196_29267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (3))){
var state_29145__$1 = state_29145;
var statearr_29197_29268 = state_29145__$1;
(statearr_29197_29268[(2)] = null);

(statearr_29197_29268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (12))){
var inst_29035 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29198_29269 = state_29145__$1;
(statearr_29198_29269[(2)] = inst_29035);

(statearr_29198_29269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (2))){
var inst_28997 = (state_29145[(13)]);
var inst_29004 = cljs.core.seq.call(null,inst_28997);
var inst_29005 = inst_29004;
var inst_29006 = null;
var inst_29007 = (0);
var inst_29008 = (0);
var state_29145__$1 = (function (){var statearr_29199 = state_29145;
(statearr_29199[(7)] = inst_29008);

(statearr_29199[(8)] = inst_29007);

(statearr_29199[(9)] = inst_29005);

(statearr_29199[(10)] = inst_29006);

return statearr_29199;
})();
var statearr_29200_29270 = state_29145__$1;
(statearr_29200_29270[(2)] = null);

(statearr_29200_29270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (23))){
var inst_29064 = (state_29145[(26)]);
var inst_29062 = (state_29145[(23)]);
var inst_29066 = (state_29145[(24)]);
var inst_29061 = (state_29145[(25)]);
var inst_29058 = (state_29145[(19)]);
var inst_29069 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29071 = (function (){var all_files = inst_29058;
var res_SINGLEQUOTE_ = inst_29061;
var res = inst_29062;
var files_not_loaded = inst_29064;
var dependencies_that_loaded = inst_29066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29064,inst_29062,inst_29066,inst_29061,inst_29058,inst_29069,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29070){
var map__29201 = p__29070;
var map__29201__$1 = ((((!((map__29201 == null)))?(((((map__29201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29201):map__29201);
var request_url = cljs.core.get.call(null,map__29201__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29064,inst_29062,inst_29066,inst_29061,inst_29058,inst_29069,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29072 = cljs.core.reverse.call(null,inst_29066);
var inst_29073 = cljs.core.map.call(null,inst_29071,inst_29072);
var inst_29074 = cljs.core.pr_str.call(null,inst_29073);
var inst_29075 = figwheel.client.utils.log.call(null,inst_29074);
var state_29145__$1 = (function (){var statearr_29203 = state_29145;
(statearr_29203[(31)] = inst_29069);

return statearr_29203;
})();
var statearr_29204_29271 = state_29145__$1;
(statearr_29204_29271[(2)] = inst_29075);

(statearr_29204_29271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (35))){
var state_29145__$1 = state_29145;
var statearr_29205_29272 = state_29145__$1;
(statearr_29205_29272[(2)] = true);

(statearr_29205_29272[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (19))){
var inst_29048 = (state_29145[(12)]);
var inst_29054 = figwheel.client.file_reloading.expand_files.call(null,inst_29048);
var state_29145__$1 = state_29145;
var statearr_29206_29273 = state_29145__$1;
(statearr_29206_29273[(2)] = inst_29054);

(statearr_29206_29273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (11))){
var state_29145__$1 = state_29145;
var statearr_29207_29274 = state_29145__$1;
(statearr_29207_29274[(2)] = null);

(statearr_29207_29274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (9))){
var inst_29037 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29208_29275 = state_29145__$1;
(statearr_29208_29275[(2)] = inst_29037);

(statearr_29208_29275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (5))){
var inst_29008 = (state_29145[(7)]);
var inst_29007 = (state_29145[(8)]);
var inst_29010 = (inst_29008 < inst_29007);
var inst_29011 = inst_29010;
var state_29145__$1 = state_29145;
if(cljs.core.truth_(inst_29011)){
var statearr_29209_29276 = state_29145__$1;
(statearr_29209_29276[(1)] = (7));

} else {
var statearr_29210_29277 = state_29145__$1;
(statearr_29210_29277[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (14))){
var inst_29018 = (state_29145[(22)]);
var inst_29027 = cljs.core.first.call(null,inst_29018);
var inst_29028 = figwheel.client.file_reloading.eval_body.call(null,inst_29027,opts);
var inst_29029 = cljs.core.next.call(null,inst_29018);
var inst_29005 = inst_29029;
var inst_29006 = null;
var inst_29007 = (0);
var inst_29008 = (0);
var state_29145__$1 = (function (){var statearr_29211 = state_29145;
(statearr_29211[(7)] = inst_29008);

(statearr_29211[(8)] = inst_29007);

(statearr_29211[(9)] = inst_29005);

(statearr_29211[(32)] = inst_29028);

(statearr_29211[(10)] = inst_29006);

return statearr_29211;
})();
var statearr_29212_29278 = state_29145__$1;
(statearr_29212_29278[(2)] = null);

(statearr_29212_29278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (45))){
var state_29145__$1 = state_29145;
var statearr_29213_29279 = state_29145__$1;
(statearr_29213_29279[(2)] = null);

(statearr_29213_29279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (26))){
var inst_29064 = (state_29145[(26)]);
var inst_29062 = (state_29145[(23)]);
var inst_29066 = (state_29145[(24)]);
var inst_29061 = (state_29145[(25)]);
var inst_29058 = (state_29145[(19)]);
var inst_29081 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29083 = (function (){var all_files = inst_29058;
var res_SINGLEQUOTE_ = inst_29061;
var res = inst_29062;
var files_not_loaded = inst_29064;
var dependencies_that_loaded = inst_29066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29064,inst_29062,inst_29066,inst_29061,inst_29058,inst_29081,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29082){
var map__29214 = p__29082;
var map__29214__$1 = ((((!((map__29214 == null)))?(((((map__29214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29214):map__29214);
var namespace = cljs.core.get.call(null,map__29214__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29214__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29064,inst_29062,inst_29066,inst_29061,inst_29058,inst_29081,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29084 = cljs.core.map.call(null,inst_29083,inst_29062);
var inst_29085 = cljs.core.pr_str.call(null,inst_29084);
var inst_29086 = figwheel.client.utils.log.call(null,inst_29085);
var inst_29087 = (function (){var all_files = inst_29058;
var res_SINGLEQUOTE_ = inst_29061;
var res = inst_29062;
var files_not_loaded = inst_29064;
var dependencies_that_loaded = inst_29066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29064,inst_29062,inst_29066,inst_29061,inst_29058,inst_29081,inst_29083,inst_29084,inst_29085,inst_29086,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29064,inst_29062,inst_29066,inst_29061,inst_29058,inst_29081,inst_29083,inst_29084,inst_29085,inst_29086,state_val_29146,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29088 = setTimeout(inst_29087,(10));
var state_29145__$1 = (function (){var statearr_29216 = state_29145;
(statearr_29216[(33)] = inst_29086);

(statearr_29216[(34)] = inst_29081);

return statearr_29216;
})();
var statearr_29217_29280 = state_29145__$1;
(statearr_29217_29280[(2)] = inst_29088);

(statearr_29217_29280[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (16))){
var state_29145__$1 = state_29145;
var statearr_29218_29281 = state_29145__$1;
(statearr_29218_29281[(2)] = reload_dependents);

(statearr_29218_29281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (38))){
var inst_29098 = (state_29145[(16)]);
var inst_29116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29098);
var state_29145__$1 = state_29145;
var statearr_29219_29282 = state_29145__$1;
(statearr_29219_29282[(2)] = inst_29116);

(statearr_29219_29282[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (30))){
var state_29145__$1 = state_29145;
var statearr_29220_29283 = state_29145__$1;
(statearr_29220_29283[(2)] = null);

(statearr_29220_29283[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (10))){
var inst_29018 = (state_29145[(22)]);
var inst_29020 = cljs.core.chunked_seq_QMARK_.call(null,inst_29018);
var state_29145__$1 = state_29145;
if(inst_29020){
var statearr_29221_29284 = state_29145__$1;
(statearr_29221_29284[(1)] = (13));

} else {
var statearr_29222_29285 = state_29145__$1;
(statearr_29222_29285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (18))){
var inst_29052 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
if(cljs.core.truth_(inst_29052)){
var statearr_29223_29286 = state_29145__$1;
(statearr_29223_29286[(1)] = (19));

} else {
var statearr_29224_29287 = state_29145__$1;
(statearr_29224_29287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (42))){
var state_29145__$1 = state_29145;
var statearr_29225_29288 = state_29145__$1;
(statearr_29225_29288[(2)] = null);

(statearr_29225_29288[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (37))){
var inst_29111 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29226_29289 = state_29145__$1;
(statearr_29226_29289[(2)] = inst_29111);

(statearr_29226_29289[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (8))){
var inst_29018 = (state_29145[(22)]);
var inst_29005 = (state_29145[(9)]);
var inst_29018__$1 = cljs.core.seq.call(null,inst_29005);
var state_29145__$1 = (function (){var statearr_29227 = state_29145;
(statearr_29227[(22)] = inst_29018__$1);

return statearr_29227;
})();
if(inst_29018__$1){
var statearr_29228_29290 = state_29145__$1;
(statearr_29228_29290[(1)] = (10));

} else {
var statearr_29229_29291 = state_29145__$1;
(statearr_29229_29291[(1)] = (11));

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
}
});})(c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25289__auto__,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto____0 = (function (){
var statearr_29230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29230[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto__);

(statearr_29230[(1)] = (1));

return statearr_29230;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto____1 = (function (state_29145){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_29145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e29231){if((e29231 instanceof Object)){
var ex__25293__auto__ = e29231;
var statearr_29232_29292 = state_29145;
(statearr_29232_29292[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29293 = state_29145;
state_29145 = G__29293;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto__ = function(state_29145){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto____1.call(this,state_29145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25381__auto__ = (function (){var statearr_29233 = f__25380__auto__.call(null);
(statearr_29233[(6)] = c__25379__auto__);

return statearr_29233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto__,map__28990,map__28990__$1,opts,before_jsload,on_jsload,reload_dependents,map__28991,map__28991__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25379__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29296,link){
var map__29297 = p__29296;
var map__29297__$1 = ((((!((map__29297 == null)))?(((((map__29297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29297):map__29297);
var file = cljs.core.get.call(null,map__29297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29297,map__29297__$1,file){
return (function (p1__29294_SHARP_,p2__29295_SHARP_){
if(cljs.core._EQ_.call(null,p1__29294_SHARP_,p2__29295_SHARP_)){
return p1__29294_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29297,map__29297__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29300){
var map__29301 = p__29300;
var map__29301__$1 = ((((!((map__29301 == null)))?(((((map__29301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29301):map__29301);
var match_length = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29299_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29299_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29303_SHARP_,p2__29304_SHARP_){
return cljs.core.assoc.call(null,p1__29303_SHARP_,cljs.core.get.call(null,p2__29304_SHARP_,key),p2__29304_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29305 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29305);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29305);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29306,p__29307){
var map__29308 = p__29306;
var map__29308__$1 = ((((!((map__29308 == null)))?(((((map__29308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29308):map__29308);
var on_cssload = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29309 = p__29307;
var map__29309__$1 = ((((!((map__29309 == null)))?(((((map__29309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29309):map__29309);
var files_msg = map__29309__$1;
var files = cljs.core.get.call(null,map__29309__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1525371778404
