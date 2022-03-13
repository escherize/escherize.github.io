// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
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
var or__27400__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27400__auto__){
return or__27400__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27400__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33849_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33849_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__33854 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33855 = null;
var count__33856 = (0);
var i__33857 = (0);
while(true){
if((i__33857 < count__33856)){
var n = cljs.core._nth.call(null,chunk__33855,i__33857);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33858 = seq__33854;
var G__33859 = chunk__33855;
var G__33860 = count__33856;
var G__33861 = (i__33857 + (1));
seq__33854 = G__33858;
chunk__33855 = G__33859;
count__33856 = G__33860;
i__33857 = G__33861;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33854);
if(temp__4657__auto__){
var seq__33854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33854__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__33854__$1);
var G__33862 = cljs.core.chunk_rest.call(null,seq__33854__$1);
var G__33863 = c__28211__auto__;
var G__33864 = cljs.core.count.call(null,c__28211__auto__);
var G__33865 = (0);
seq__33854 = G__33862;
chunk__33855 = G__33863;
count__33856 = G__33864;
i__33857 = G__33865;
continue;
} else {
var n = cljs.core.first.call(null,seq__33854__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33866 = cljs.core.next.call(null,seq__33854__$1);
var G__33867 = null;
var G__33868 = (0);
var G__33869 = (0);
seq__33854 = G__33866;
chunk__33855 = G__33867;
count__33856 = G__33868;
i__33857 = G__33869;
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

var seq__33920_33931 = cljs.core.seq.call(null,deps);
var chunk__33921_33932 = null;
var count__33922_33933 = (0);
var i__33923_33934 = (0);
while(true){
if((i__33923_33934 < count__33922_33933)){
var dep_33935 = cljs.core._nth.call(null,chunk__33921_33932,i__33923_33934);
topo_sort_helper_STAR_.call(null,dep_33935,(depth + (1)),state);

var G__33936 = seq__33920_33931;
var G__33937 = chunk__33921_33932;
var G__33938 = count__33922_33933;
var G__33939 = (i__33923_33934 + (1));
seq__33920_33931 = G__33936;
chunk__33921_33932 = G__33937;
count__33922_33933 = G__33938;
i__33923_33934 = G__33939;
continue;
} else {
var temp__4657__auto___33940 = cljs.core.seq.call(null,seq__33920_33931);
if(temp__4657__auto___33940){
var seq__33920_33941__$1 = temp__4657__auto___33940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33920_33941__$1)){
var c__28211__auto___33942 = cljs.core.chunk_first.call(null,seq__33920_33941__$1);
var G__33943 = cljs.core.chunk_rest.call(null,seq__33920_33941__$1);
var G__33944 = c__28211__auto___33942;
var G__33945 = cljs.core.count.call(null,c__28211__auto___33942);
var G__33946 = (0);
seq__33920_33931 = G__33943;
chunk__33921_33932 = G__33944;
count__33922_33933 = G__33945;
i__33923_33934 = G__33946;
continue;
} else {
var dep_33947 = cljs.core.first.call(null,seq__33920_33941__$1);
topo_sort_helper_STAR_.call(null,dep_33947,(depth + (1)),state);

var G__33948 = cljs.core.next.call(null,seq__33920_33941__$1);
var G__33949 = null;
var G__33950 = (0);
var G__33951 = (0);
seq__33920_33931 = G__33948;
chunk__33921_33932 = G__33949;
count__33922_33933 = G__33950;
i__33923_33934 = G__33951;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33924){
var vec__33928 = p__33924;
var seq__33929 = cljs.core.seq.call(null,vec__33928);
var first__33930 = cljs.core.first.call(null,seq__33929);
var seq__33929__$1 = cljs.core.next.call(null,seq__33929);
var x = first__33930;
var xs = seq__33929__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33928,seq__33929,first__33930,seq__33929__$1,x,xs,get_deps__$1){
return (function (p1__33870_SHARP_){
return clojure.set.difference.call(null,p1__33870_SHARP_,x);
});})(vec__33928,seq__33929,first__33930,seq__33929__$1,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33964 = cljs.core.seq.call(null,provides);
var chunk__33965 = null;
var count__33966 = (0);
var i__33967 = (0);
while(true){
if((i__33967 < count__33966)){
var prov = cljs.core._nth.call(null,chunk__33965,i__33967);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33968_33976 = cljs.core.seq.call(null,requires);
var chunk__33969_33977 = null;
var count__33970_33978 = (0);
var i__33971_33979 = (0);
while(true){
if((i__33971_33979 < count__33970_33978)){
var req_33980 = cljs.core._nth.call(null,chunk__33969_33977,i__33971_33979);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33980,prov);

var G__33981 = seq__33968_33976;
var G__33982 = chunk__33969_33977;
var G__33983 = count__33970_33978;
var G__33984 = (i__33971_33979 + (1));
seq__33968_33976 = G__33981;
chunk__33969_33977 = G__33982;
count__33970_33978 = G__33983;
i__33971_33979 = G__33984;
continue;
} else {
var temp__4657__auto___33985 = cljs.core.seq.call(null,seq__33968_33976);
if(temp__4657__auto___33985){
var seq__33968_33986__$1 = temp__4657__auto___33985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33968_33986__$1)){
var c__28211__auto___33987 = cljs.core.chunk_first.call(null,seq__33968_33986__$1);
var G__33988 = cljs.core.chunk_rest.call(null,seq__33968_33986__$1);
var G__33989 = c__28211__auto___33987;
var G__33990 = cljs.core.count.call(null,c__28211__auto___33987);
var G__33991 = (0);
seq__33968_33976 = G__33988;
chunk__33969_33977 = G__33989;
count__33970_33978 = G__33990;
i__33971_33979 = G__33991;
continue;
} else {
var req_33992 = cljs.core.first.call(null,seq__33968_33986__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33992,prov);

var G__33993 = cljs.core.next.call(null,seq__33968_33986__$1);
var G__33994 = null;
var G__33995 = (0);
var G__33996 = (0);
seq__33968_33976 = G__33993;
chunk__33969_33977 = G__33994;
count__33970_33978 = G__33995;
i__33971_33979 = G__33996;
continue;
}
} else {
}
}
break;
}

var G__33997 = seq__33964;
var G__33998 = chunk__33965;
var G__33999 = count__33966;
var G__34000 = (i__33967 + (1));
seq__33964 = G__33997;
chunk__33965 = G__33998;
count__33966 = G__33999;
i__33967 = G__34000;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33964);
if(temp__4657__auto__){
var seq__33964__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33964__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__33964__$1);
var G__34001 = cljs.core.chunk_rest.call(null,seq__33964__$1);
var G__34002 = c__28211__auto__;
var G__34003 = cljs.core.count.call(null,c__28211__auto__);
var G__34004 = (0);
seq__33964 = G__34001;
chunk__33965 = G__34002;
count__33966 = G__34003;
i__33967 = G__34004;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33964__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33972_34005 = cljs.core.seq.call(null,requires);
var chunk__33973_34006 = null;
var count__33974_34007 = (0);
var i__33975_34008 = (0);
while(true){
if((i__33975_34008 < count__33974_34007)){
var req_34009 = cljs.core._nth.call(null,chunk__33973_34006,i__33975_34008);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34009,prov);

var G__34010 = seq__33972_34005;
var G__34011 = chunk__33973_34006;
var G__34012 = count__33974_34007;
var G__34013 = (i__33975_34008 + (1));
seq__33972_34005 = G__34010;
chunk__33973_34006 = G__34011;
count__33974_34007 = G__34012;
i__33975_34008 = G__34013;
continue;
} else {
var temp__4657__auto___34014__$1 = cljs.core.seq.call(null,seq__33972_34005);
if(temp__4657__auto___34014__$1){
var seq__33972_34015__$1 = temp__4657__auto___34014__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33972_34015__$1)){
var c__28211__auto___34016 = cljs.core.chunk_first.call(null,seq__33972_34015__$1);
var G__34017 = cljs.core.chunk_rest.call(null,seq__33972_34015__$1);
var G__34018 = c__28211__auto___34016;
var G__34019 = cljs.core.count.call(null,c__28211__auto___34016);
var G__34020 = (0);
seq__33972_34005 = G__34017;
chunk__33973_34006 = G__34018;
count__33974_34007 = G__34019;
i__33975_34008 = G__34020;
continue;
} else {
var req_34021 = cljs.core.first.call(null,seq__33972_34015__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34021,prov);

var G__34022 = cljs.core.next.call(null,seq__33972_34015__$1);
var G__34023 = null;
var G__34024 = (0);
var G__34025 = (0);
seq__33972_34005 = G__34022;
chunk__33973_34006 = G__34023;
count__33974_34007 = G__34024;
i__33975_34008 = G__34025;
continue;
}
} else {
}
}
break;
}

var G__34026 = cljs.core.next.call(null,seq__33964__$1);
var G__34027 = null;
var G__34028 = (0);
var G__34029 = (0);
seq__33964 = G__34026;
chunk__33965 = G__34027;
count__33966 = G__34028;
i__33967 = G__34029;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34034_34038 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34035_34039 = null;
var count__34036_34040 = (0);
var i__34037_34041 = (0);
while(true){
if((i__34037_34041 < count__34036_34040)){
var ns_34042 = cljs.core._nth.call(null,chunk__34035_34039,i__34037_34041);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34042);

var G__34043 = seq__34034_34038;
var G__34044 = chunk__34035_34039;
var G__34045 = count__34036_34040;
var G__34046 = (i__34037_34041 + (1));
seq__34034_34038 = G__34043;
chunk__34035_34039 = G__34044;
count__34036_34040 = G__34045;
i__34037_34041 = G__34046;
continue;
} else {
var temp__4657__auto___34047 = cljs.core.seq.call(null,seq__34034_34038);
if(temp__4657__auto___34047){
var seq__34034_34048__$1 = temp__4657__auto___34047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34034_34048__$1)){
var c__28211__auto___34049 = cljs.core.chunk_first.call(null,seq__34034_34048__$1);
var G__34050 = cljs.core.chunk_rest.call(null,seq__34034_34048__$1);
var G__34051 = c__28211__auto___34049;
var G__34052 = cljs.core.count.call(null,c__28211__auto___34049);
var G__34053 = (0);
seq__34034_34038 = G__34050;
chunk__34035_34039 = G__34051;
count__34036_34040 = G__34052;
i__34037_34041 = G__34053;
continue;
} else {
var ns_34054 = cljs.core.first.call(null,seq__34034_34048__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34054);

var G__34055 = cljs.core.next.call(null,seq__34034_34048__$1);
var G__34056 = null;
var G__34057 = (0);
var G__34058 = (0);
seq__34034_34038 = G__34055;
chunk__34035_34039 = G__34056;
count__34036_34040 = G__34057;
i__34037_34041 = G__34058;
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
goog.require_figwheel_backup_ = (function (){var or__27400__auto__ = goog.require__;
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
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
var G__34059__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34060__i = 0, G__34060__a = new Array(arguments.length -  0);
while (G__34060__i < G__34060__a.length) {G__34060__a[G__34060__i] = arguments[G__34060__i + 0]; ++G__34060__i;}
  args = new cljs.core.IndexedSeq(G__34060__a,0);
} 
return G__34059__delegate.call(this,args);};
G__34059.cljs$lang$maxFixedArity = 0;
G__34059.cljs$lang$applyTo = (function (arglist__34061){
var args = cljs.core.seq(arglist__34061);
return G__34059__delegate(args);
});
G__34059.cljs$core$IFn$_invoke$arity$variadic = G__34059__delegate;
return G__34059;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34063 = cljs.core._EQ_;
var expr__34064 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34063.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34064))){
var path_parts = ((function (pred__34063,expr__34064){
return (function (p1__34062_SHARP_){
return clojure.string.split.call(null,p1__34062_SHARP_,/[\/\\]/);
});})(pred__34063,expr__34064))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34063,expr__34064){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34066){if((e34066 instanceof Error)){
var e = e34066;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34066;

}
}})());
});
;})(path_parts,sep,root,pred__34063,expr__34064))
} else {
if(cljs.core.truth_(pred__34063.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34064))){
return ((function (pred__34063,expr__34064){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34063,expr__34064){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34063,expr__34064))
);

return deferred.addErrback(((function (deferred,pred__34063,expr__34064){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34063,expr__34064))
);
});
;})(pred__34063,expr__34064))
} else {
return ((function (pred__34063,expr__34064){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34063,expr__34064))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34067,callback){
var map__34070 = p__34067;
var map__34070__$1 = ((((!((map__34070 == null)))?((((map__34070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34070):map__34070);
var file_msg = map__34070__$1;
var request_url = cljs.core.get.call(null,map__34070__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34070,map__34070__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34070,map__34070__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto__){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto__){
return (function (state_34094){
var state_val_34095 = (state_34094[(1)]);
if((state_val_34095 === (7))){
var inst_34090 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34096_34116 = state_34094__$1;
(statearr_34096_34116[(2)] = inst_34090);

(statearr_34096_34116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (1))){
var state_34094__$1 = state_34094;
var statearr_34097_34117 = state_34094__$1;
(statearr_34097_34117[(2)] = null);

(statearr_34097_34117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (4))){
var inst_34074 = (state_34094[(7)]);
var inst_34074__$1 = (state_34094[(2)]);
var state_34094__$1 = (function (){var statearr_34098 = state_34094;
(statearr_34098[(7)] = inst_34074__$1);

return statearr_34098;
})();
if(cljs.core.truth_(inst_34074__$1)){
var statearr_34099_34118 = state_34094__$1;
(statearr_34099_34118[(1)] = (5));

} else {
var statearr_34100_34119 = state_34094__$1;
(statearr_34100_34119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (6))){
var state_34094__$1 = state_34094;
var statearr_34101_34120 = state_34094__$1;
(statearr_34101_34120[(2)] = null);

(statearr_34101_34120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (3))){
var inst_34092 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34094__$1,inst_34092);
} else {
if((state_val_34095 === (2))){
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34094__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34095 === (11))){
var inst_34086 = (state_34094[(2)]);
var state_34094__$1 = (function (){var statearr_34102 = state_34094;
(statearr_34102[(8)] = inst_34086);

return statearr_34102;
})();
var statearr_34103_34121 = state_34094__$1;
(statearr_34103_34121[(2)] = null);

(statearr_34103_34121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (9))){
var inst_34080 = (state_34094[(9)]);
var inst_34078 = (state_34094[(10)]);
var inst_34082 = inst_34080.call(null,inst_34078);
var state_34094__$1 = state_34094;
var statearr_34104_34122 = state_34094__$1;
(statearr_34104_34122[(2)] = inst_34082);

(statearr_34104_34122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (5))){
var inst_34074 = (state_34094[(7)]);
var inst_34076 = figwheel.client.file_reloading.blocking_load.call(null,inst_34074);
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34094__$1,(8),inst_34076);
} else {
if((state_val_34095 === (10))){
var inst_34078 = (state_34094[(10)]);
var inst_34084 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34078);
var state_34094__$1 = state_34094;
var statearr_34105_34123 = state_34094__$1;
(statearr_34105_34123[(2)] = inst_34084);

(statearr_34105_34123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (8))){
var inst_34080 = (state_34094[(9)]);
var inst_34074 = (state_34094[(7)]);
var inst_34078 = (state_34094[(2)]);
var inst_34079 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34080__$1 = cljs.core.get.call(null,inst_34079,inst_34074);
var state_34094__$1 = (function (){var statearr_34106 = state_34094;
(statearr_34106[(9)] = inst_34080__$1);

(statearr_34106[(10)] = inst_34078);

return statearr_34106;
})();
if(cljs.core.truth_(inst_34080__$1)){
var statearr_34107_34124 = state_34094__$1;
(statearr_34107_34124[(1)] = (9));

} else {
var statearr_34108_34125 = state_34094__$1;
(statearr_34108_34125[(1)] = (10));

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
});})(c__30994__auto__))
;
return ((function (switch__29418__auto__,c__30994__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29419__auto__ = null;
var figwheel$client$file_reloading$state_machine__29419__auto____0 = (function (){
var statearr_34112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34112[(0)] = figwheel$client$file_reloading$state_machine__29419__auto__);

(statearr_34112[(1)] = (1));

return statearr_34112;
});
var figwheel$client$file_reloading$state_machine__29419__auto____1 = (function (state_34094){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_34094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e34113){if((e34113 instanceof Object)){
var ex__29422__auto__ = e34113;
var statearr_34114_34126 = state_34094;
(statearr_34114_34126[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34127 = state_34094;
state_34094 = G__34127;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29419__auto__ = function(state_34094){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29419__auto____1.call(this,state_34094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29419__auto____0;
figwheel$client$file_reloading$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29419__auto____1;
return figwheel$client$file_reloading$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto__))
})();
var state__30996__auto__ = (function (){var statearr_34115 = f__30995__auto__.call(null);
(statearr_34115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto__);

return statearr_34115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto__))
);

return c__30994__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34128,callback){
var map__34131 = p__34128;
var map__34131__$1 = ((((!((map__34131 == null)))?((((map__34131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34131):map__34131);
var file_msg = map__34131__$1;
var namespace = cljs.core.get.call(null,map__34131__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34131,map__34131__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34131,map__34131__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34133){
var map__34136 = p__34133;
var map__34136__$1 = ((((!((map__34136 == null)))?((((map__34136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34136):map__34136);
var file_msg = map__34136__$1;
var namespace = cljs.core.get.call(null,map__34136__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27388__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__27388__auto__){
var or__27400__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
var or__27400__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27400__auto____$1)){
return or__27400__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27388__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34138,callback){
var map__34141 = p__34138;
var map__34141__$1 = ((((!((map__34141 == null)))?((((map__34141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34141):map__34141);
var file_msg = map__34141__$1;
var request_url = cljs.core.get.call(null,map__34141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34141__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__30994__auto___34245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___34245,out){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___34245,out){
return (function (state_34227){
var state_val_34228 = (state_34227[(1)]);
if((state_val_34228 === (1))){
var inst_34201 = cljs.core.seq.call(null,files);
var inst_34202 = cljs.core.first.call(null,inst_34201);
var inst_34203 = cljs.core.next.call(null,inst_34201);
var inst_34204 = files;
var state_34227__$1 = (function (){var statearr_34229 = state_34227;
(statearr_34229[(7)] = inst_34203);

(statearr_34229[(8)] = inst_34202);

(statearr_34229[(9)] = inst_34204);

return statearr_34229;
})();
var statearr_34230_34246 = state_34227__$1;
(statearr_34230_34246[(2)] = null);

(statearr_34230_34246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (2))){
var inst_34210 = (state_34227[(10)]);
var inst_34204 = (state_34227[(9)]);
var inst_34209 = cljs.core.seq.call(null,inst_34204);
var inst_34210__$1 = cljs.core.first.call(null,inst_34209);
var inst_34211 = cljs.core.next.call(null,inst_34209);
var inst_34212 = (inst_34210__$1 == null);
var inst_34213 = cljs.core.not.call(null,inst_34212);
var state_34227__$1 = (function (){var statearr_34231 = state_34227;
(statearr_34231[(10)] = inst_34210__$1);

(statearr_34231[(11)] = inst_34211);

return statearr_34231;
})();
if(inst_34213){
var statearr_34232_34247 = state_34227__$1;
(statearr_34232_34247[(1)] = (4));

} else {
var statearr_34233_34248 = state_34227__$1;
(statearr_34233_34248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (3))){
var inst_34225 = (state_34227[(2)]);
var state_34227__$1 = state_34227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34227__$1,inst_34225);
} else {
if((state_val_34228 === (4))){
var inst_34210 = (state_34227[(10)]);
var inst_34215 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34210);
var state_34227__$1 = state_34227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34227__$1,(7),inst_34215);
} else {
if((state_val_34228 === (5))){
var inst_34221 = cljs.core.async.close_BANG_.call(null,out);
var state_34227__$1 = state_34227;
var statearr_34234_34249 = state_34227__$1;
(statearr_34234_34249[(2)] = inst_34221);

(statearr_34234_34249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (6))){
var inst_34223 = (state_34227[(2)]);
var state_34227__$1 = state_34227;
var statearr_34235_34250 = state_34227__$1;
(statearr_34235_34250[(2)] = inst_34223);

(statearr_34235_34250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (7))){
var inst_34211 = (state_34227[(11)]);
var inst_34217 = (state_34227[(2)]);
var inst_34218 = cljs.core.async.put_BANG_.call(null,out,inst_34217);
var inst_34204 = inst_34211;
var state_34227__$1 = (function (){var statearr_34236 = state_34227;
(statearr_34236[(12)] = inst_34218);

(statearr_34236[(9)] = inst_34204);

return statearr_34236;
})();
var statearr_34237_34251 = state_34227__$1;
(statearr_34237_34251[(2)] = null);

(statearr_34237_34251[(1)] = (2));


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
});})(c__30994__auto___34245,out))
;
return ((function (switch__29418__auto__,c__30994__auto___34245,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto____0 = (function (){
var statearr_34241 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34241[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto__);

(statearr_34241[(1)] = (1));

return statearr_34241;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto____1 = (function (state_34227){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_34227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e34242){if((e34242 instanceof Object)){
var ex__29422__auto__ = e34242;
var statearr_34243_34252 = state_34227;
(statearr_34243_34252[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34253 = state_34227;
state_34227 = G__34253;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto__ = function(state_34227){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto____1.call(this,state_34227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___34245,out))
})();
var state__30996__auto__ = (function (){var statearr_34244 = f__30995__auto__.call(null);
(statearr_34244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___34245);

return statearr_34244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___34245,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34254,opts){
var map__34258 = p__34254;
var map__34258__$1 = ((((!((map__34258 == null)))?((((map__34258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34258):map__34258);
var eval_body__$1 = cljs.core.get.call(null,map__34258__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34258__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27388__auto__ = eval_body__$1;
if(cljs.core.truth_(and__27388__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__27388__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34260){var e = e34260;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34261_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34261_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__34270){
var vec__34271 = p__34270;
var k = cljs.core.nth.call(null,vec__34271,(0),null);
var v = cljs.core.nth.call(null,vec__34271,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34274){
var vec__34275 = p__34274;
var k = cljs.core.nth.call(null,vec__34275,(0),null);
var v = cljs.core.nth.call(null,vec__34275,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34281,p__34282){
var map__34529 = p__34281;
var map__34529__$1 = ((((!((map__34529 == null)))?((((map__34529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34529):map__34529);
var opts = map__34529__$1;
var before_jsload = cljs.core.get.call(null,map__34529__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34529__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34529__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34530 = p__34282;
var map__34530__$1 = ((((!((map__34530 == null)))?((((map__34530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34530):map__34530);
var msg = map__34530__$1;
var files = cljs.core.get.call(null,map__34530__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34530__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34530__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34683){
var state_val_34684 = (state_34683[(1)]);
if((state_val_34684 === (7))){
var inst_34544 = (state_34683[(7)]);
var inst_34546 = (state_34683[(8)]);
var inst_34545 = (state_34683[(9)]);
var inst_34547 = (state_34683[(10)]);
var inst_34552 = cljs.core._nth.call(null,inst_34545,inst_34547);
var inst_34553 = figwheel.client.file_reloading.eval_body.call(null,inst_34552,opts);
var inst_34554 = (inst_34547 + (1));
var tmp34685 = inst_34544;
var tmp34686 = inst_34546;
var tmp34687 = inst_34545;
var inst_34544__$1 = tmp34685;
var inst_34545__$1 = tmp34687;
var inst_34546__$1 = tmp34686;
var inst_34547__$1 = inst_34554;
var state_34683__$1 = (function (){var statearr_34688 = state_34683;
(statearr_34688[(7)] = inst_34544__$1);

(statearr_34688[(11)] = inst_34553);

(statearr_34688[(8)] = inst_34546__$1);

(statearr_34688[(9)] = inst_34545__$1);

(statearr_34688[(10)] = inst_34547__$1);

return statearr_34688;
})();
var statearr_34689_34775 = state_34683__$1;
(statearr_34689_34775[(2)] = null);

(statearr_34689_34775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (20))){
var inst_34587 = (state_34683[(12)]);
var inst_34595 = figwheel.client.file_reloading.sort_files.call(null,inst_34587);
var state_34683__$1 = state_34683;
var statearr_34690_34776 = state_34683__$1;
(statearr_34690_34776[(2)] = inst_34595);

(statearr_34690_34776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (27))){
var state_34683__$1 = state_34683;
var statearr_34691_34777 = state_34683__$1;
(statearr_34691_34777[(2)] = null);

(statearr_34691_34777[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (1))){
var inst_34536 = (state_34683[(13)]);
var inst_34533 = before_jsload.call(null,files);
var inst_34534 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34535 = (function (){return ((function (inst_34536,inst_34533,inst_34534,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34278_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34278_SHARP_);
});
;})(inst_34536,inst_34533,inst_34534,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34536__$1 = cljs.core.filter.call(null,inst_34535,files);
var inst_34537 = cljs.core.not_empty.call(null,inst_34536__$1);
var state_34683__$1 = (function (){var statearr_34692 = state_34683;
(statearr_34692[(14)] = inst_34534);

(statearr_34692[(13)] = inst_34536__$1);

(statearr_34692[(15)] = inst_34533);

return statearr_34692;
})();
if(cljs.core.truth_(inst_34537)){
var statearr_34693_34778 = state_34683__$1;
(statearr_34693_34778[(1)] = (2));

} else {
var statearr_34694_34779 = state_34683__$1;
(statearr_34694_34779[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (24))){
var state_34683__$1 = state_34683;
var statearr_34695_34780 = state_34683__$1;
(statearr_34695_34780[(2)] = null);

(statearr_34695_34780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (39))){
var inst_34637 = (state_34683[(16)]);
var state_34683__$1 = state_34683;
var statearr_34696_34781 = state_34683__$1;
(statearr_34696_34781[(2)] = inst_34637);

(statearr_34696_34781[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (46))){
var inst_34678 = (state_34683[(2)]);
var state_34683__$1 = state_34683;
var statearr_34697_34782 = state_34683__$1;
(statearr_34697_34782[(2)] = inst_34678);

(statearr_34697_34782[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (4))){
var inst_34581 = (state_34683[(2)]);
var inst_34582 = cljs.core.List.EMPTY;
var inst_34583 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34582);
var inst_34584 = (function (){return ((function (inst_34581,inst_34582,inst_34583,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34279_SHARP_){
var and__27388__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34279_SHARP_);
if(cljs.core.truth_(and__27388__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34279_SHARP_));
} else {
return and__27388__auto__;
}
});
;})(inst_34581,inst_34582,inst_34583,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34585 = cljs.core.filter.call(null,inst_34584,files);
var inst_34586 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34587 = cljs.core.concat.call(null,inst_34585,inst_34586);
var state_34683__$1 = (function (){var statearr_34698 = state_34683;
(statearr_34698[(17)] = inst_34581);

(statearr_34698[(18)] = inst_34583);

(statearr_34698[(12)] = inst_34587);

return statearr_34698;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34699_34783 = state_34683__$1;
(statearr_34699_34783[(1)] = (16));

} else {
var statearr_34700_34784 = state_34683__$1;
(statearr_34700_34784[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (15))){
var inst_34571 = (state_34683[(2)]);
var state_34683__$1 = state_34683;
var statearr_34701_34785 = state_34683__$1;
(statearr_34701_34785[(2)] = inst_34571);

(statearr_34701_34785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (21))){
var inst_34597 = (state_34683[(19)]);
var inst_34597__$1 = (state_34683[(2)]);
var inst_34598 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34597__$1);
var state_34683__$1 = (function (){var statearr_34702 = state_34683;
(statearr_34702[(19)] = inst_34597__$1);

return statearr_34702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34683__$1,(22),inst_34598);
} else {
if((state_val_34684 === (31))){
var inst_34681 = (state_34683[(2)]);
var state_34683__$1 = state_34683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34683__$1,inst_34681);
} else {
if((state_val_34684 === (32))){
var inst_34637 = (state_34683[(16)]);
var inst_34642 = inst_34637.cljs$lang$protocol_mask$partition0$;
var inst_34643 = (inst_34642 & (64));
var inst_34644 = inst_34637.cljs$core$ISeq$;
var inst_34645 = (inst_34643) || (inst_34644);
var state_34683__$1 = state_34683;
if(cljs.core.truth_(inst_34645)){
var statearr_34703_34786 = state_34683__$1;
(statearr_34703_34786[(1)] = (35));

} else {
var statearr_34704_34787 = state_34683__$1;
(statearr_34704_34787[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (40))){
var inst_34658 = (state_34683[(20)]);
var inst_34657 = (state_34683[(2)]);
var inst_34658__$1 = cljs.core.get.call(null,inst_34657,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34659 = cljs.core.get.call(null,inst_34657,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34660 = cljs.core.not_empty.call(null,inst_34658__$1);
var state_34683__$1 = (function (){var statearr_34705 = state_34683;
(statearr_34705[(21)] = inst_34659);

(statearr_34705[(20)] = inst_34658__$1);

return statearr_34705;
})();
if(cljs.core.truth_(inst_34660)){
var statearr_34706_34788 = state_34683__$1;
(statearr_34706_34788[(1)] = (41));

} else {
var statearr_34707_34789 = state_34683__$1;
(statearr_34707_34789[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (33))){
var state_34683__$1 = state_34683;
var statearr_34708_34790 = state_34683__$1;
(statearr_34708_34790[(2)] = false);

(statearr_34708_34790[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (13))){
var inst_34557 = (state_34683[(22)]);
var inst_34561 = cljs.core.chunk_first.call(null,inst_34557);
var inst_34562 = cljs.core.chunk_rest.call(null,inst_34557);
var inst_34563 = cljs.core.count.call(null,inst_34561);
var inst_34544 = inst_34562;
var inst_34545 = inst_34561;
var inst_34546 = inst_34563;
var inst_34547 = (0);
var state_34683__$1 = (function (){var statearr_34709 = state_34683;
(statearr_34709[(7)] = inst_34544);

(statearr_34709[(8)] = inst_34546);

(statearr_34709[(9)] = inst_34545);

(statearr_34709[(10)] = inst_34547);

return statearr_34709;
})();
var statearr_34710_34791 = state_34683__$1;
(statearr_34710_34791[(2)] = null);

(statearr_34710_34791[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (22))){
var inst_34601 = (state_34683[(23)]);
var inst_34605 = (state_34683[(24)]);
var inst_34597 = (state_34683[(19)]);
var inst_34600 = (state_34683[(25)]);
var inst_34600__$1 = (state_34683[(2)]);
var inst_34601__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34600__$1);
var inst_34602 = (function (){var all_files = inst_34597;
var res_SINGLEQUOTE_ = inst_34600__$1;
var res = inst_34601__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34601,inst_34605,inst_34597,inst_34600,inst_34600__$1,inst_34601__$1,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34280_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34280_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34601,inst_34605,inst_34597,inst_34600,inst_34600__$1,inst_34601__$1,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34603 = cljs.core.filter.call(null,inst_34602,inst_34600__$1);
var inst_34604 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34605__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34604);
var inst_34606 = cljs.core.not_empty.call(null,inst_34605__$1);
var state_34683__$1 = (function (){var statearr_34711 = state_34683;
(statearr_34711[(23)] = inst_34601__$1);

(statearr_34711[(24)] = inst_34605__$1);

(statearr_34711[(26)] = inst_34603);

(statearr_34711[(25)] = inst_34600__$1);

return statearr_34711;
})();
if(cljs.core.truth_(inst_34606)){
var statearr_34712_34792 = state_34683__$1;
(statearr_34712_34792[(1)] = (23));

} else {
var statearr_34713_34793 = state_34683__$1;
(statearr_34713_34793[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (36))){
var state_34683__$1 = state_34683;
var statearr_34714_34794 = state_34683__$1;
(statearr_34714_34794[(2)] = false);

(statearr_34714_34794[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (41))){
var inst_34658 = (state_34683[(20)]);
var inst_34662 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34663 = cljs.core.map.call(null,inst_34662,inst_34658);
var inst_34664 = cljs.core.pr_str.call(null,inst_34663);
var inst_34665 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34664)].join('');
var inst_34666 = figwheel.client.utils.log.call(null,inst_34665);
var state_34683__$1 = state_34683;
var statearr_34715_34795 = state_34683__$1;
(statearr_34715_34795[(2)] = inst_34666);

(statearr_34715_34795[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (43))){
var inst_34659 = (state_34683[(21)]);
var inst_34669 = (state_34683[(2)]);
var inst_34670 = cljs.core.not_empty.call(null,inst_34659);
var state_34683__$1 = (function (){var statearr_34716 = state_34683;
(statearr_34716[(27)] = inst_34669);

return statearr_34716;
})();
if(cljs.core.truth_(inst_34670)){
var statearr_34717_34796 = state_34683__$1;
(statearr_34717_34796[(1)] = (44));

} else {
var statearr_34718_34797 = state_34683__$1;
(statearr_34718_34797[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (29))){
var inst_34601 = (state_34683[(23)]);
var inst_34605 = (state_34683[(24)]);
var inst_34603 = (state_34683[(26)]);
var inst_34597 = (state_34683[(19)]);
var inst_34600 = (state_34683[(25)]);
var inst_34637 = (state_34683[(16)]);
var inst_34633 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34636 = (function (){var all_files = inst_34597;
var res_SINGLEQUOTE_ = inst_34600;
var res = inst_34601;
var files_not_loaded = inst_34603;
var dependencies_that_loaded = inst_34605;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34605,inst_34603,inst_34597,inst_34600,inst_34637,inst_34633,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34635){
var map__34719 = p__34635;
var map__34719__$1 = ((((!((map__34719 == null)))?((((map__34719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34719):map__34719);
var namespace = cljs.core.get.call(null,map__34719__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34605,inst_34603,inst_34597,inst_34600,inst_34637,inst_34633,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34637__$1 = cljs.core.group_by.call(null,inst_34636,inst_34603);
var inst_34639 = (inst_34637__$1 == null);
var inst_34640 = cljs.core.not.call(null,inst_34639);
var state_34683__$1 = (function (){var statearr_34721 = state_34683;
(statearr_34721[(28)] = inst_34633);

(statearr_34721[(16)] = inst_34637__$1);

return statearr_34721;
})();
if(inst_34640){
var statearr_34722_34798 = state_34683__$1;
(statearr_34722_34798[(1)] = (32));

} else {
var statearr_34723_34799 = state_34683__$1;
(statearr_34723_34799[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (44))){
var inst_34659 = (state_34683[(21)]);
var inst_34672 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34659);
var inst_34673 = cljs.core.pr_str.call(null,inst_34672);
var inst_34674 = [cljs.core.str("not required: "),cljs.core.str(inst_34673)].join('');
var inst_34675 = figwheel.client.utils.log.call(null,inst_34674);
var state_34683__$1 = state_34683;
var statearr_34724_34800 = state_34683__$1;
(statearr_34724_34800[(2)] = inst_34675);

(statearr_34724_34800[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (6))){
var inst_34578 = (state_34683[(2)]);
var state_34683__$1 = state_34683;
var statearr_34725_34801 = state_34683__$1;
(statearr_34725_34801[(2)] = inst_34578);

(statearr_34725_34801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (28))){
var inst_34603 = (state_34683[(26)]);
var inst_34630 = (state_34683[(2)]);
var inst_34631 = cljs.core.not_empty.call(null,inst_34603);
var state_34683__$1 = (function (){var statearr_34726 = state_34683;
(statearr_34726[(29)] = inst_34630);

return statearr_34726;
})();
if(cljs.core.truth_(inst_34631)){
var statearr_34727_34802 = state_34683__$1;
(statearr_34727_34802[(1)] = (29));

} else {
var statearr_34728_34803 = state_34683__$1;
(statearr_34728_34803[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (25))){
var inst_34601 = (state_34683[(23)]);
var inst_34617 = (state_34683[(2)]);
var inst_34618 = cljs.core.not_empty.call(null,inst_34601);
var state_34683__$1 = (function (){var statearr_34729 = state_34683;
(statearr_34729[(30)] = inst_34617);

return statearr_34729;
})();
if(cljs.core.truth_(inst_34618)){
var statearr_34730_34804 = state_34683__$1;
(statearr_34730_34804[(1)] = (26));

} else {
var statearr_34731_34805 = state_34683__$1;
(statearr_34731_34805[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (34))){
var inst_34652 = (state_34683[(2)]);
var state_34683__$1 = state_34683;
if(cljs.core.truth_(inst_34652)){
var statearr_34732_34806 = state_34683__$1;
(statearr_34732_34806[(1)] = (38));

} else {
var statearr_34733_34807 = state_34683__$1;
(statearr_34733_34807[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (17))){
var state_34683__$1 = state_34683;
var statearr_34734_34808 = state_34683__$1;
(statearr_34734_34808[(2)] = recompile_dependents);

(statearr_34734_34808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (3))){
var state_34683__$1 = state_34683;
var statearr_34735_34809 = state_34683__$1;
(statearr_34735_34809[(2)] = null);

(statearr_34735_34809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (12))){
var inst_34574 = (state_34683[(2)]);
var state_34683__$1 = state_34683;
var statearr_34736_34810 = state_34683__$1;
(statearr_34736_34810[(2)] = inst_34574);

(statearr_34736_34810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (2))){
var inst_34536 = (state_34683[(13)]);
var inst_34543 = cljs.core.seq.call(null,inst_34536);
var inst_34544 = inst_34543;
var inst_34545 = null;
var inst_34546 = (0);
var inst_34547 = (0);
var state_34683__$1 = (function (){var statearr_34737 = state_34683;
(statearr_34737[(7)] = inst_34544);

(statearr_34737[(8)] = inst_34546);

(statearr_34737[(9)] = inst_34545);

(statearr_34737[(10)] = inst_34547);

return statearr_34737;
})();
var statearr_34738_34811 = state_34683__$1;
(statearr_34738_34811[(2)] = null);

(statearr_34738_34811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (23))){
var inst_34601 = (state_34683[(23)]);
var inst_34605 = (state_34683[(24)]);
var inst_34603 = (state_34683[(26)]);
var inst_34597 = (state_34683[(19)]);
var inst_34600 = (state_34683[(25)]);
var inst_34608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34610 = (function (){var all_files = inst_34597;
var res_SINGLEQUOTE_ = inst_34600;
var res = inst_34601;
var files_not_loaded = inst_34603;
var dependencies_that_loaded = inst_34605;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34605,inst_34603,inst_34597,inst_34600,inst_34608,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34609){
var map__34739 = p__34609;
var map__34739__$1 = ((((!((map__34739 == null)))?((((map__34739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34739):map__34739);
var request_url = cljs.core.get.call(null,map__34739__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34605,inst_34603,inst_34597,inst_34600,inst_34608,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34611 = cljs.core.reverse.call(null,inst_34605);
var inst_34612 = cljs.core.map.call(null,inst_34610,inst_34611);
var inst_34613 = cljs.core.pr_str.call(null,inst_34612);
var inst_34614 = figwheel.client.utils.log.call(null,inst_34613);
var state_34683__$1 = (function (){var statearr_34741 = state_34683;
(statearr_34741[(31)] = inst_34608);

return statearr_34741;
})();
var statearr_34742_34812 = state_34683__$1;
(statearr_34742_34812[(2)] = inst_34614);

(statearr_34742_34812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (35))){
var state_34683__$1 = state_34683;
var statearr_34743_34813 = state_34683__$1;
(statearr_34743_34813[(2)] = true);

(statearr_34743_34813[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (19))){
var inst_34587 = (state_34683[(12)]);
var inst_34593 = figwheel.client.file_reloading.expand_files.call(null,inst_34587);
var state_34683__$1 = state_34683;
var statearr_34744_34814 = state_34683__$1;
(statearr_34744_34814[(2)] = inst_34593);

(statearr_34744_34814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (11))){
var state_34683__$1 = state_34683;
var statearr_34745_34815 = state_34683__$1;
(statearr_34745_34815[(2)] = null);

(statearr_34745_34815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (9))){
var inst_34576 = (state_34683[(2)]);
var state_34683__$1 = state_34683;
var statearr_34746_34816 = state_34683__$1;
(statearr_34746_34816[(2)] = inst_34576);

(statearr_34746_34816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (5))){
var inst_34546 = (state_34683[(8)]);
var inst_34547 = (state_34683[(10)]);
var inst_34549 = (inst_34547 < inst_34546);
var inst_34550 = inst_34549;
var state_34683__$1 = state_34683;
if(cljs.core.truth_(inst_34550)){
var statearr_34747_34817 = state_34683__$1;
(statearr_34747_34817[(1)] = (7));

} else {
var statearr_34748_34818 = state_34683__$1;
(statearr_34748_34818[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (14))){
var inst_34557 = (state_34683[(22)]);
var inst_34566 = cljs.core.first.call(null,inst_34557);
var inst_34567 = figwheel.client.file_reloading.eval_body.call(null,inst_34566,opts);
var inst_34568 = cljs.core.next.call(null,inst_34557);
var inst_34544 = inst_34568;
var inst_34545 = null;
var inst_34546 = (0);
var inst_34547 = (0);
var state_34683__$1 = (function (){var statearr_34749 = state_34683;
(statearr_34749[(32)] = inst_34567);

(statearr_34749[(7)] = inst_34544);

(statearr_34749[(8)] = inst_34546);

(statearr_34749[(9)] = inst_34545);

(statearr_34749[(10)] = inst_34547);

return statearr_34749;
})();
var statearr_34750_34819 = state_34683__$1;
(statearr_34750_34819[(2)] = null);

(statearr_34750_34819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (45))){
var state_34683__$1 = state_34683;
var statearr_34751_34820 = state_34683__$1;
(statearr_34751_34820[(2)] = null);

(statearr_34751_34820[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (26))){
var inst_34601 = (state_34683[(23)]);
var inst_34605 = (state_34683[(24)]);
var inst_34603 = (state_34683[(26)]);
var inst_34597 = (state_34683[(19)]);
var inst_34600 = (state_34683[(25)]);
var inst_34620 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34622 = (function (){var all_files = inst_34597;
var res_SINGLEQUOTE_ = inst_34600;
var res = inst_34601;
var files_not_loaded = inst_34603;
var dependencies_that_loaded = inst_34605;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34605,inst_34603,inst_34597,inst_34600,inst_34620,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34621){
var map__34752 = p__34621;
var map__34752__$1 = ((((!((map__34752 == null)))?((((map__34752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34752):map__34752);
var namespace = cljs.core.get.call(null,map__34752__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34752__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34605,inst_34603,inst_34597,inst_34600,inst_34620,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34623 = cljs.core.map.call(null,inst_34622,inst_34601);
var inst_34624 = cljs.core.pr_str.call(null,inst_34623);
var inst_34625 = figwheel.client.utils.log.call(null,inst_34624);
var inst_34626 = (function (){var all_files = inst_34597;
var res_SINGLEQUOTE_ = inst_34600;
var res = inst_34601;
var files_not_loaded = inst_34603;
var dependencies_that_loaded = inst_34605;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34605,inst_34603,inst_34597,inst_34600,inst_34620,inst_34622,inst_34623,inst_34624,inst_34625,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34605,inst_34603,inst_34597,inst_34600,inst_34620,inst_34622,inst_34623,inst_34624,inst_34625,state_val_34684,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34627 = setTimeout(inst_34626,(10));
var state_34683__$1 = (function (){var statearr_34754 = state_34683;
(statearr_34754[(33)] = inst_34625);

(statearr_34754[(34)] = inst_34620);

return statearr_34754;
})();
var statearr_34755_34821 = state_34683__$1;
(statearr_34755_34821[(2)] = inst_34627);

(statearr_34755_34821[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (16))){
var state_34683__$1 = state_34683;
var statearr_34756_34822 = state_34683__$1;
(statearr_34756_34822[(2)] = reload_dependents);

(statearr_34756_34822[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (38))){
var inst_34637 = (state_34683[(16)]);
var inst_34654 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34637);
var state_34683__$1 = state_34683;
var statearr_34757_34823 = state_34683__$1;
(statearr_34757_34823[(2)] = inst_34654);

(statearr_34757_34823[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (30))){
var state_34683__$1 = state_34683;
var statearr_34758_34824 = state_34683__$1;
(statearr_34758_34824[(2)] = null);

(statearr_34758_34824[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (10))){
var inst_34557 = (state_34683[(22)]);
var inst_34559 = cljs.core.chunked_seq_QMARK_.call(null,inst_34557);
var state_34683__$1 = state_34683;
if(inst_34559){
var statearr_34759_34825 = state_34683__$1;
(statearr_34759_34825[(1)] = (13));

} else {
var statearr_34760_34826 = state_34683__$1;
(statearr_34760_34826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (18))){
var inst_34591 = (state_34683[(2)]);
var state_34683__$1 = state_34683;
if(cljs.core.truth_(inst_34591)){
var statearr_34761_34827 = state_34683__$1;
(statearr_34761_34827[(1)] = (19));

} else {
var statearr_34762_34828 = state_34683__$1;
(statearr_34762_34828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (42))){
var state_34683__$1 = state_34683;
var statearr_34763_34829 = state_34683__$1;
(statearr_34763_34829[(2)] = null);

(statearr_34763_34829[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (37))){
var inst_34649 = (state_34683[(2)]);
var state_34683__$1 = state_34683;
var statearr_34764_34830 = state_34683__$1;
(statearr_34764_34830[(2)] = inst_34649);

(statearr_34764_34830[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (8))){
var inst_34544 = (state_34683[(7)]);
var inst_34557 = (state_34683[(22)]);
var inst_34557__$1 = cljs.core.seq.call(null,inst_34544);
var state_34683__$1 = (function (){var statearr_34765 = state_34683;
(statearr_34765[(22)] = inst_34557__$1);

return statearr_34765;
})();
if(inst_34557__$1){
var statearr_34766_34831 = state_34683__$1;
(statearr_34766_34831[(1)] = (10));

} else {
var statearr_34767_34832 = state_34683__$1;
(statearr_34767_34832[(1)] = (11));

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
});})(c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29418__auto__,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto____0 = (function (){
var statearr_34771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34771[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto__);

(statearr_34771[(1)] = (1));

return statearr_34771;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto____1 = (function (state_34683){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_34683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e34772){if((e34772 instanceof Object)){
var ex__29422__auto__ = e34772;
var statearr_34773_34833 = state_34683;
(statearr_34773_34833[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34834 = state_34683;
state_34683 = G__34834;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto__ = function(state_34683){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto____1.call(this,state_34683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30996__auto__ = (function (){var statearr_34774 = f__30995__auto__.call(null);
(statearr_34774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto__);

return statearr_34774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto__,map__34529,map__34529__$1,opts,before_jsload,on_jsload,reload_dependents,map__34530,map__34530__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30994__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34837,link){
var map__34840 = p__34837;
var map__34840__$1 = ((((!((map__34840 == null)))?((((map__34840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34840):map__34840);
var file = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34840,map__34840__$1,file){
return (function (p1__34835_SHARP_,p2__34836_SHARP_){
if(cljs.core._EQ_.call(null,p1__34835_SHARP_,p2__34836_SHARP_)){
return p1__34835_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34840,map__34840__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34846){
var map__34847 = p__34846;
var map__34847__$1 = ((((!((map__34847 == null)))?((((map__34847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34847):map__34847);
var match_length = cljs.core.get.call(null,map__34847__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34847__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34842_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34842_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args34849 = [];
var len__28475__auto___34852 = arguments.length;
var i__28476__auto___34853 = (0);
while(true){
if((i__28476__auto___34853 < len__28475__auto___34852)){
args34849.push((arguments[i__28476__auto___34853]));

var G__34854 = (i__28476__auto___34853 + (1));
i__28476__auto___34853 = G__34854;
continue;
} else {
}
break;
}

var G__34851 = args34849.length;
switch (G__34851) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34849.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34856_SHARP_,p2__34857_SHARP_){
return cljs.core.assoc.call(null,p1__34856_SHARP_,cljs.core.get.call(null,p2__34857_SHARP_,key),p2__34857_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34858){
var map__34861 = p__34858;
var map__34861__$1 = ((((!((map__34861 == null)))?((((map__34861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34861):map__34861);
var f_data = map__34861__$1;
var file = cljs.core.get.call(null,map__34861__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34863,p__34864){
var map__34873 = p__34863;
var map__34873__$1 = ((((!((map__34873 == null)))?((((map__34873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34873):map__34873);
var opts = map__34873__$1;
var on_cssload = cljs.core.get.call(null,map__34873__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34874 = p__34864;
var map__34874__$1 = ((((!((map__34874 == null)))?((((map__34874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34874):map__34874);
var files_msg = map__34874__$1;
var files = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34877_34881 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__34878_34882 = null;
var count__34879_34883 = (0);
var i__34880_34884 = (0);
while(true){
if((i__34880_34884 < count__34879_34883)){
var f_34885 = cljs.core._nth.call(null,chunk__34878_34882,i__34880_34884);
figwheel.client.file_reloading.reload_css_file.call(null,f_34885);

var G__34886 = seq__34877_34881;
var G__34887 = chunk__34878_34882;
var G__34888 = count__34879_34883;
var G__34889 = (i__34880_34884 + (1));
seq__34877_34881 = G__34886;
chunk__34878_34882 = G__34887;
count__34879_34883 = G__34888;
i__34880_34884 = G__34889;
continue;
} else {
var temp__4657__auto___34890 = cljs.core.seq.call(null,seq__34877_34881);
if(temp__4657__auto___34890){
var seq__34877_34891__$1 = temp__4657__auto___34890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34877_34891__$1)){
var c__28211__auto___34892 = cljs.core.chunk_first.call(null,seq__34877_34891__$1);
var G__34893 = cljs.core.chunk_rest.call(null,seq__34877_34891__$1);
var G__34894 = c__28211__auto___34892;
var G__34895 = cljs.core.count.call(null,c__28211__auto___34892);
var G__34896 = (0);
seq__34877_34881 = G__34893;
chunk__34878_34882 = G__34894;
count__34879_34883 = G__34895;
i__34880_34884 = G__34896;
continue;
} else {
var f_34897 = cljs.core.first.call(null,seq__34877_34891__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34897);

var G__34898 = cljs.core.next.call(null,seq__34877_34891__$1);
var G__34899 = null;
var G__34900 = (0);
var G__34901 = (0);
seq__34877_34881 = G__34898;
chunk__34878_34882 = G__34899;
count__34879_34883 = G__34900;
i__34880_34884 = G__34901;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34873,map__34873__$1,opts,on_cssload,map__34874,map__34874__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__34873,map__34873__$1,opts,on_cssload,map__34874,map__34874__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1481770135893