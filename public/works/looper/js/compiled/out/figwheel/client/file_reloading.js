// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__33651_SHARP_,p2__33652_SHARP_){
var and__22362__auto__ = p1__33651_SHARP_;
if(cljs.core.truth_(and__22362__auto__)){
return p2__33652_SHARP_;
} else {
return and__22362__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__22374__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22374__auto__){
return or__22374__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__22374__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__22374__auto__){
return or__22374__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__22374__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__23269__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23270__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23273__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23273__auto__,method_table__23269__auto__,prefer_table__23270__auto__,method_cache__23271__auto__,cached_hierarchy__23272__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33653){
var map__33654 = p__33653;
var map__33654__$1 = ((cljs.core.seq_QMARK_.call(null,map__33654))?cljs.core.apply.call(null,cljs.core.hash_map,map__33654):map__33654);
var file = cljs.core.get.call(null,map__33654__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__33655){
var map__33656 = p__33655;
var map__33656__$1 = ((cljs.core.seq_QMARK_.call(null,map__33656))?cljs.core.apply.call(null,cljs.core.hash_map,map__33656):map__33656);
var namespace = cljs.core.get.call(null,map__33656__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__23269__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23270__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23273__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23273__auto__,method_table__23269__auto__,prefer_table__23270__auto__,method_cache__23271__auto__,cached_hierarchy__23272__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e33657){if((e33657 instanceof Error)){
var e = e33657;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33657;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__33659 = arguments.length;
switch (G__33659) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33661,callback){
var map__33663 = p__33661;
var map__33663__$1 = ((cljs.core.seq_QMARK_.call(null,map__33663))?cljs.core.apply.call(null,cljs.core.hash_map,map__33663):map__33663);
var file_msg = map__33663__$1;
var request_url = cljs.core.get.call(null,map__33663__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33663,map__33663__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33663,map__33663__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33664){
var map__33666 = p__33664;
var map__33666__$1 = ((cljs.core.seq_QMARK_.call(null,map__33666))?cljs.core.apply.call(null,cljs.core.hash_map,map__33666):map__33666);
var file_msg = map__33666__$1;
var meta_data = cljs.core.get.call(null,map__33666__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__33666__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__22374__auto__ = meta_data;
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__22362__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__22362__auto__){
var or__22374__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__22374__auto____$1)){
return or__22374__auto____$1;
} else {
var and__22362__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__22362__auto____$1){
var or__22374__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__22374__auto____$2){
return or__22374__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__22362__auto____$1;
}
}
}
} else {
return and__22362__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33667,callback){
var map__33669 = p__33667;
var map__33669__$1 = ((cljs.core.seq_QMARK_.call(null,map__33669))?cljs.core.apply.call(null,cljs.core.hash_map,map__33669):map__33669);
var file_msg = map__33669__$1;
var namespace = cljs.core.get.call(null,map__33669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__33669__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25598__auto___33756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___33756,out){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___33756,out){
return (function (state_33738){
var state_val_33739 = (state_33738[(1)]);
if((state_val_33739 === (7))){
var inst_33722 = (state_33738[(7)]);
var inst_33728 = (state_33738[(2)]);
var inst_33729 = cljs.core.async.put_BANG_.call(null,out,inst_33728);
var inst_33718 = inst_33722;
var state_33738__$1 = (function (){var statearr_33740 = state_33738;
(statearr_33740[(8)] = inst_33729);

(statearr_33740[(9)] = inst_33718);

return statearr_33740;
})();
var statearr_33741_33757 = state_33738__$1;
(statearr_33741_33757[(2)] = null);

(statearr_33741_33757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (6))){
var inst_33734 = (state_33738[(2)]);
var state_33738__$1 = state_33738;
var statearr_33742_33758 = state_33738__$1;
(statearr_33742_33758[(2)] = inst_33734);

(statearr_33742_33758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (5))){
var inst_33732 = cljs.core.async.close_BANG_.call(null,out);
var state_33738__$1 = state_33738;
var statearr_33743_33759 = state_33738__$1;
(statearr_33743_33759[(2)] = inst_33732);

(statearr_33743_33759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (4))){
var inst_33721 = (state_33738[(10)]);
var inst_33726 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33721);
var state_33738__$1 = state_33738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33738__$1,(7),inst_33726);
} else {
if((state_val_33739 === (3))){
var inst_33736 = (state_33738[(2)]);
var state_33738__$1 = state_33738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33738__$1,inst_33736);
} else {
if((state_val_33739 === (2))){
var inst_33721 = (state_33738[(10)]);
var inst_33718 = (state_33738[(9)]);
var inst_33721__$1 = cljs.core.nth.call(null,inst_33718,(0),null);
var inst_33722 = cljs.core.nthnext.call(null,inst_33718,(1));
var inst_33723 = (inst_33721__$1 == null);
var inst_33724 = cljs.core.not.call(null,inst_33723);
var state_33738__$1 = (function (){var statearr_33744 = state_33738;
(statearr_33744[(7)] = inst_33722);

(statearr_33744[(10)] = inst_33721__$1);

return statearr_33744;
})();
if(inst_33724){
var statearr_33745_33760 = state_33738__$1;
(statearr_33745_33760[(1)] = (4));

} else {
var statearr_33746_33761 = state_33738__$1;
(statearr_33746_33761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (1))){
var inst_33716 = cljs.core.nth.call(null,files,(0),null);
var inst_33717 = cljs.core.nthnext.call(null,files,(1));
var inst_33718 = files;
var state_33738__$1 = (function (){var statearr_33747 = state_33738;
(statearr_33747[(11)] = inst_33716);

(statearr_33747[(12)] = inst_33717);

(statearr_33747[(9)] = inst_33718);

return statearr_33747;
})();
var statearr_33748_33762 = state_33738__$1;
(statearr_33748_33762[(2)] = null);

(statearr_33748_33762[(1)] = (2));


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
});})(c__25598__auto___33756,out))
;
return ((function (switch__25536__auto__,c__25598__auto___33756,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto____0 = (function (){
var statearr_33752 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33752[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto__);

(statearr_33752[(1)] = (1));

return statearr_33752;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto____1 = (function (state_33738){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_33738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e33753){if((e33753 instanceof Object)){
var ex__25540__auto__ = e33753;
var statearr_33754_33763 = state_33738;
(statearr_33754_33763[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33764 = state_33738;
state_33738 = G__33764;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto__ = function(state_33738){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto____1.call(this,state_33738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___33756,out))
})();
var state__25600__auto__ = (function (){var statearr_33755 = f__25599__auto__.call(null);
(statearr_33755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___33756);

return statearr_33755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___33756,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__33765,p__33766){
var map__33769 = p__33765;
var map__33769__$1 = ((cljs.core.seq_QMARK_.call(null,map__33769))?cljs.core.apply.call(null,cljs.core.hash_map,map__33769):map__33769);
var opts = map__33769__$1;
var url_rewriter = cljs.core.get.call(null,map__33769__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__33770 = p__33766;
var map__33770__$1 = ((cljs.core.seq_QMARK_.call(null,map__33770))?cljs.core.apply.call(null,cljs.core.hash_map,map__33770):map__33770);
var file_msg = map__33770__$1;
var file = cljs.core.get.call(null,map__33770__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33771){
var map__33774 = p__33771;
var map__33774__$1 = ((cljs.core.seq_QMARK_.call(null,map__33774))?cljs.core.apply.call(null,cljs.core.hash_map,map__33774):map__33774);
var file = cljs.core.get.call(null,map__33774__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__33774__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__22362__auto__ = eval_body__$1;
if(cljs.core.truth_(and__22362__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__22362__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e33775){var e = e33775;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33780,p__33781){
var map__33983 = p__33780;
var map__33983__$1 = ((cljs.core.seq_QMARK_.call(null,map__33983))?cljs.core.apply.call(null,cljs.core.hash_map,map__33983):map__33983);
var opts = map__33983__$1;
var load_unchanged_files = cljs.core.get.call(null,map__33983__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__33983__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__33983__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__33984 = p__33781;
var map__33984__$1 = ((cljs.core.seq_QMARK_.call(null,map__33984))?cljs.core.apply.call(null,cljs.core.hash_map,map__33984):map__33984);
var msg = map__33984__$1;
var files = cljs.core.get.call(null,map__33984__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files){
return (function (state_34109){
var state_val_34110 = (state_34109[(1)]);
if((state_val_34110 === (7))){
var inst_33999 = (state_34109[(7)]);
var inst_33998 = (state_34109[(8)]);
var inst_33996 = (state_34109[(9)]);
var inst_33997 = (state_34109[(10)]);
var inst_34004 = cljs.core._nth.call(null,inst_33997,inst_33999);
var inst_34005 = figwheel.client.file_reloading.eval_body.call(null,inst_34004);
var inst_34006 = (inst_33999 + (1));
var tmp34111 = inst_33998;
var tmp34112 = inst_33996;
var tmp34113 = inst_33997;
var inst_33996__$1 = tmp34112;
var inst_33997__$1 = tmp34113;
var inst_33998__$1 = tmp34111;
var inst_33999__$1 = inst_34006;
var state_34109__$1 = (function (){var statearr_34114 = state_34109;
(statearr_34114[(7)] = inst_33999__$1);

(statearr_34114[(8)] = inst_33998__$1);

(statearr_34114[(9)] = inst_33996__$1);

(statearr_34114[(11)] = inst_34005);

(statearr_34114[(10)] = inst_33997__$1);

return statearr_34114;
})();
var statearr_34115_34184 = state_34109__$1;
(statearr_34115_34184[(2)] = null);

(statearr_34115_34184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (20))){
var inst_34042 = (state_34109[(12)]);
var inst_34045 = (state_34109[(13)]);
var inst_34046 = (state_34109[(14)]);
var inst_34048 = (state_34109[(15)]);
var inst_34041 = (state_34109[(16)]);
var inst_34051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34053 = (function (){var files_not_loaded = inst_34048;
var res = inst_34046;
var res_SINGLEQUOTE_ = inst_34045;
var files_SINGLEQUOTE_ = inst_34042;
var all_files = inst_34041;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34042,inst_34045,inst_34046,inst_34048,inst_34041,inst_34051,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files){
return (function (p__34052){
var map__34116 = p__34052;
var map__34116__$1 = ((cljs.core.seq_QMARK_.call(null,map__34116))?cljs.core.apply.call(null,cljs.core.hash_map,map__34116):map__34116);
var file = cljs.core.get.call(null,map__34116__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__34116__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34042,inst_34045,inst_34046,inst_34048,inst_34041,inst_34051,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files))
})();
var inst_34054 = cljs.core.map.call(null,inst_34053,inst_34046);
var inst_34055 = cljs.core.pr_str.call(null,inst_34054);
var inst_34056 = figwheel.client.utils.log.call(null,inst_34055);
var inst_34057 = (function (){var files_not_loaded = inst_34048;
var res = inst_34046;
var res_SINGLEQUOTE_ = inst_34045;
var files_SINGLEQUOTE_ = inst_34042;
var all_files = inst_34041;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34042,inst_34045,inst_34046,inst_34048,inst_34041,inst_34051,inst_34053,inst_34054,inst_34055,inst_34056,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34042,inst_34045,inst_34046,inst_34048,inst_34041,inst_34051,inst_34053,inst_34054,inst_34055,inst_34056,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files))
})();
var inst_34058 = setTimeout(inst_34057,(10));
var state_34109__$1 = (function (){var statearr_34117 = state_34109;
(statearr_34117[(17)] = inst_34056);

(statearr_34117[(18)] = inst_34051);

return statearr_34117;
})();
var statearr_34118_34185 = state_34109__$1;
(statearr_34118_34185[(2)] = inst_34058);

(statearr_34118_34185[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (27))){
var inst_34068 = (state_34109[(19)]);
var state_34109__$1 = state_34109;
var statearr_34119_34186 = state_34109__$1;
(statearr_34119_34186[(2)] = inst_34068);

(statearr_34119_34186[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (1))){
var inst_33988 = (state_34109[(20)]);
var inst_33985 = before_jsload.call(null,files);
var inst_33986 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33987 = (function (){return ((function (inst_33988,inst_33985,inst_33986,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files){
return (function (p1__33776_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33776_SHARP_);
});
;})(inst_33988,inst_33985,inst_33986,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files))
})();
var inst_33988__$1 = cljs.core.filter.call(null,inst_33987,files);
var inst_33989 = cljs.core.not_empty.call(null,inst_33988__$1);
var state_34109__$1 = (function (){var statearr_34120 = state_34109;
(statearr_34120[(20)] = inst_33988__$1);

(statearr_34120[(21)] = inst_33985);

(statearr_34120[(22)] = inst_33986);

return statearr_34120;
})();
if(cljs.core.truth_(inst_33989)){
var statearr_34121_34187 = state_34109__$1;
(statearr_34121_34187[(1)] = (2));

} else {
var statearr_34122_34188 = state_34109__$1;
(statearr_34122_34188[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (24))){
var state_34109__$1 = state_34109;
var statearr_34123_34189 = state_34109__$1;
(statearr_34123_34189[(2)] = null);

(statearr_34123_34189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (4))){
var inst_34033 = (state_34109[(2)]);
var inst_34034 = (function (){return ((function (inst_34033,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files){
return (function (p1__33777_SHARP_){
var and__22362__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33777_SHARP_);
if(cljs.core.truth_(and__22362__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33777_SHARP_));
} else {
return and__22362__auto__;
}
});
;})(inst_34033,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files))
})();
var inst_34035 = cljs.core.filter.call(null,inst_34034,files);
var state_34109__$1 = (function (){var statearr_34124 = state_34109;
(statearr_34124[(23)] = inst_34035);

(statearr_34124[(24)] = inst_34033);

return statearr_34124;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_34125_34190 = state_34109__$1;
(statearr_34125_34190[(1)] = (16));

} else {
var statearr_34126_34191 = state_34109__$1;
(statearr_34126_34191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (15))){
var inst_34023 = (state_34109[(2)]);
var state_34109__$1 = state_34109;
var statearr_34127_34192 = state_34109__$1;
(statearr_34127_34192[(2)] = inst_34023);

(statearr_34127_34192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (21))){
var state_34109__$1 = state_34109;
var statearr_34128_34193 = state_34109__$1;
(statearr_34128_34193[(2)] = null);

(statearr_34128_34193[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (31))){
var inst_34076 = (state_34109[(25)]);
var inst_34086 = (state_34109[(2)]);
var inst_34087 = cljs.core.not_empty.call(null,inst_34076);
var state_34109__$1 = (function (){var statearr_34129 = state_34109;
(statearr_34129[(26)] = inst_34086);

return statearr_34129;
})();
if(cljs.core.truth_(inst_34087)){
var statearr_34130_34194 = state_34109__$1;
(statearr_34130_34194[(1)] = (32));

} else {
var statearr_34131_34195 = state_34109__$1;
(statearr_34131_34195[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (32))){
var inst_34076 = (state_34109[(25)]);
var inst_34089 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34076);
var inst_34090 = cljs.core.pr_str.call(null,inst_34089);
var inst_34091 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_34090)].join('');
var inst_34092 = figwheel.client.utils.log.call(null,inst_34091);
var state_34109__$1 = state_34109;
var statearr_34132_34196 = state_34109__$1;
(statearr_34132_34196[(2)] = inst_34092);

(statearr_34132_34196[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (33))){
var state_34109__$1 = state_34109;
var statearr_34133_34197 = state_34109__$1;
(statearr_34133_34197[(2)] = null);

(statearr_34133_34197[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (13))){
var inst_34009 = (state_34109[(27)]);
var inst_34013 = cljs.core.chunk_first.call(null,inst_34009);
var inst_34014 = cljs.core.chunk_rest.call(null,inst_34009);
var inst_34015 = cljs.core.count.call(null,inst_34013);
var inst_33996 = inst_34014;
var inst_33997 = inst_34013;
var inst_33998 = inst_34015;
var inst_33999 = (0);
var state_34109__$1 = (function (){var statearr_34134 = state_34109;
(statearr_34134[(7)] = inst_33999);

(statearr_34134[(8)] = inst_33998);

(statearr_34134[(9)] = inst_33996);

(statearr_34134[(10)] = inst_33997);

return statearr_34134;
})();
var statearr_34135_34198 = state_34109__$1;
(statearr_34135_34198[(2)] = null);

(statearr_34135_34198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (22))){
var inst_34048 = (state_34109[(15)]);
var inst_34061 = (state_34109[(2)]);
var inst_34062 = cljs.core.not_empty.call(null,inst_34048);
var state_34109__$1 = (function (){var statearr_34136 = state_34109;
(statearr_34136[(28)] = inst_34061);

return statearr_34136;
})();
if(cljs.core.truth_(inst_34062)){
var statearr_34137_34199 = state_34109__$1;
(statearr_34137_34199[(1)] = (23));

} else {
var statearr_34138_34200 = state_34109__$1;
(statearr_34138_34200[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (36))){
var state_34109__$1 = state_34109;
var statearr_34139_34201 = state_34109__$1;
(statearr_34139_34201[(2)] = null);

(statearr_34139_34201[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (29))){
var inst_34077 = (state_34109[(29)]);
var inst_34080 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34077);
var inst_34081 = cljs.core.pr_str.call(null,inst_34080);
var inst_34082 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34081)].join('');
var inst_34083 = figwheel.client.utils.log.call(null,inst_34082);
var state_34109__$1 = state_34109;
var statearr_34140_34202 = state_34109__$1;
(statearr_34140_34202[(2)] = inst_34083);

(statearr_34140_34202[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (6))){
var inst_34030 = (state_34109[(2)]);
var state_34109__$1 = state_34109;
var statearr_34141_34203 = state_34109__$1;
(statearr_34141_34203[(2)] = inst_34030);

(statearr_34141_34203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (28))){
var inst_34077 = (state_34109[(29)]);
var inst_34074 = (state_34109[(2)]);
var inst_34075 = cljs.core.get.call(null,inst_34074,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34076 = cljs.core.get.call(null,inst_34074,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_34077__$1 = cljs.core.get.call(null,inst_34074,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34078 = cljs.core.not_empty.call(null,inst_34077__$1);
var state_34109__$1 = (function (){var statearr_34142 = state_34109;
(statearr_34142[(29)] = inst_34077__$1);

(statearr_34142[(25)] = inst_34076);

(statearr_34142[(30)] = inst_34075);

return statearr_34142;
})();
if(cljs.core.truth_(inst_34078)){
var statearr_34143_34204 = state_34109__$1;
(statearr_34143_34204[(1)] = (29));

} else {
var statearr_34144_34205 = state_34109__$1;
(statearr_34144_34205[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (25))){
var inst_34107 = (state_34109[(2)]);
var state_34109__$1 = state_34109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34109__$1,inst_34107);
} else {
if((state_val_34110 === (34))){
var inst_34075 = (state_34109[(30)]);
var inst_34095 = (state_34109[(2)]);
var inst_34096 = cljs.core.not_empty.call(null,inst_34075);
var state_34109__$1 = (function (){var statearr_34145 = state_34109;
(statearr_34145[(31)] = inst_34095);

return statearr_34145;
})();
if(cljs.core.truth_(inst_34096)){
var statearr_34146_34206 = state_34109__$1;
(statearr_34146_34206[(1)] = (35));

} else {
var statearr_34147_34207 = state_34109__$1;
(statearr_34147_34207[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (17))){
var inst_34035 = (state_34109[(23)]);
var state_34109__$1 = state_34109;
var statearr_34148_34208 = state_34109__$1;
(statearr_34148_34208[(2)] = inst_34035);

(statearr_34148_34208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (3))){
var state_34109__$1 = state_34109;
var statearr_34149_34209 = state_34109__$1;
(statearr_34149_34209[(2)] = null);

(statearr_34149_34209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (12))){
var inst_34026 = (state_34109[(2)]);
var state_34109__$1 = state_34109;
var statearr_34150_34210 = state_34109__$1;
(statearr_34150_34210[(2)] = inst_34026);

(statearr_34150_34210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (2))){
var inst_33988 = (state_34109[(20)]);
var inst_33995 = cljs.core.seq.call(null,inst_33988);
var inst_33996 = inst_33995;
var inst_33997 = null;
var inst_33998 = (0);
var inst_33999 = (0);
var state_34109__$1 = (function (){var statearr_34151 = state_34109;
(statearr_34151[(7)] = inst_33999);

(statearr_34151[(8)] = inst_33998);

(statearr_34151[(9)] = inst_33996);

(statearr_34151[(10)] = inst_33997);

return statearr_34151;
})();
var statearr_34152_34211 = state_34109__$1;
(statearr_34152_34211[(2)] = null);

(statearr_34152_34211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (23))){
var inst_34068 = (state_34109[(19)]);
var inst_34042 = (state_34109[(12)]);
var inst_34045 = (state_34109[(13)]);
var inst_34046 = (state_34109[(14)]);
var inst_34048 = (state_34109[(15)]);
var inst_34041 = (state_34109[(16)]);
var inst_34064 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34067 = (function (){var files_not_loaded = inst_34048;
var res = inst_34046;
var res_SINGLEQUOTE_ = inst_34045;
var files_SINGLEQUOTE_ = inst_34042;
var all_files = inst_34041;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34068,inst_34042,inst_34045,inst_34046,inst_34048,inst_34041,inst_34064,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files){
return (function (p__34066){
var map__34153 = p__34066;
var map__34153__$1 = ((cljs.core.seq_QMARK_.call(null,map__34153))?cljs.core.apply.call(null,cljs.core.hash_map,map__34153):map__34153);
var meta_data = cljs.core.get.call(null,map__34153__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34068,inst_34042,inst_34045,inst_34046,inst_34048,inst_34041,inst_34064,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files))
})();
var inst_34068__$1 = cljs.core.group_by.call(null,inst_34067,inst_34048);
var inst_34069 = cljs.core.seq_QMARK_.call(null,inst_34068__$1);
var state_34109__$1 = (function (){var statearr_34154 = state_34109;
(statearr_34154[(19)] = inst_34068__$1);

(statearr_34154[(32)] = inst_34064);

return statearr_34154;
})();
if(inst_34069){
var statearr_34155_34212 = state_34109__$1;
(statearr_34155_34212[(1)] = (26));

} else {
var statearr_34156_34213 = state_34109__$1;
(statearr_34156_34213[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (35))){
var inst_34075 = (state_34109[(30)]);
var inst_34098 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34075);
var inst_34099 = cljs.core.pr_str.call(null,inst_34098);
var inst_34100 = [cljs.core.str("not required: "),cljs.core.str(inst_34099)].join('');
var inst_34101 = figwheel.client.utils.log.call(null,inst_34100);
var state_34109__$1 = state_34109;
var statearr_34157_34214 = state_34109__$1;
(statearr_34157_34214[(2)] = inst_34101);

(statearr_34157_34214[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (19))){
var inst_34042 = (state_34109[(12)]);
var inst_34045 = (state_34109[(13)]);
var inst_34046 = (state_34109[(14)]);
var inst_34041 = (state_34109[(16)]);
var inst_34045__$1 = (state_34109[(2)]);
var inst_34046__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34045__$1);
var inst_34047 = (function (){var res = inst_34046__$1;
var res_SINGLEQUOTE_ = inst_34045__$1;
var files_SINGLEQUOTE_ = inst_34042;
var all_files = inst_34041;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34042,inst_34045,inst_34046,inst_34041,inst_34045__$1,inst_34046__$1,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files){
return (function (p1__33779_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33779_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34042,inst_34045,inst_34046,inst_34041,inst_34045__$1,inst_34046__$1,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files))
})();
var inst_34048 = cljs.core.filter.call(null,inst_34047,inst_34045__$1);
var inst_34049 = cljs.core.not_empty.call(null,inst_34046__$1);
var state_34109__$1 = (function (){var statearr_34158 = state_34109;
(statearr_34158[(13)] = inst_34045__$1);

(statearr_34158[(14)] = inst_34046__$1);

(statearr_34158[(15)] = inst_34048);

return statearr_34158;
})();
if(cljs.core.truth_(inst_34049)){
var statearr_34159_34215 = state_34109__$1;
(statearr_34159_34215[(1)] = (20));

} else {
var statearr_34160_34216 = state_34109__$1;
(statearr_34160_34216[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (11))){
var state_34109__$1 = state_34109;
var statearr_34161_34217 = state_34109__$1;
(statearr_34161_34217[(2)] = null);

(statearr_34161_34217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (9))){
var inst_34028 = (state_34109[(2)]);
var state_34109__$1 = state_34109;
var statearr_34162_34218 = state_34109__$1;
(statearr_34162_34218[(2)] = inst_34028);

(statearr_34162_34218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (5))){
var inst_33999 = (state_34109[(7)]);
var inst_33998 = (state_34109[(8)]);
var inst_34001 = (inst_33999 < inst_33998);
var inst_34002 = inst_34001;
var state_34109__$1 = state_34109;
if(cljs.core.truth_(inst_34002)){
var statearr_34163_34219 = state_34109__$1;
(statearr_34163_34219[(1)] = (7));

} else {
var statearr_34164_34220 = state_34109__$1;
(statearr_34164_34220[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (14))){
var inst_34009 = (state_34109[(27)]);
var inst_34018 = cljs.core.first.call(null,inst_34009);
var inst_34019 = figwheel.client.file_reloading.eval_body.call(null,inst_34018);
var inst_34020 = cljs.core.next.call(null,inst_34009);
var inst_33996 = inst_34020;
var inst_33997 = null;
var inst_33998 = (0);
var inst_33999 = (0);
var state_34109__$1 = (function (){var statearr_34165 = state_34109;
(statearr_34165[(7)] = inst_33999);

(statearr_34165[(8)] = inst_33998);

(statearr_34165[(9)] = inst_33996);

(statearr_34165[(33)] = inst_34019);

(statearr_34165[(10)] = inst_33997);

return statearr_34165;
})();
var statearr_34166_34221 = state_34109__$1;
(statearr_34166_34221[(2)] = null);

(statearr_34166_34221[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (26))){
var inst_34068 = (state_34109[(19)]);
var inst_34071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34068);
var state_34109__$1 = state_34109;
var statearr_34167_34222 = state_34109__$1;
(statearr_34167_34222[(2)] = inst_34071);

(statearr_34167_34222[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (16))){
var inst_34035 = (state_34109[(23)]);
var inst_34037 = (function (){var all_files = inst_34035;
return ((function (all_files,inst_34035,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files){
return (function (p1__33778_SHARP_){
return cljs.core.update_in.call(null,p1__33778_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_34035,state_val_34110,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files))
})();
var inst_34038 = cljs.core.map.call(null,inst_34037,inst_34035);
var state_34109__$1 = state_34109;
var statearr_34168_34223 = state_34109__$1;
(statearr_34168_34223[(2)] = inst_34038);

(statearr_34168_34223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (30))){
var state_34109__$1 = state_34109;
var statearr_34169_34224 = state_34109__$1;
(statearr_34169_34224[(2)] = null);

(statearr_34169_34224[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (10))){
var inst_34009 = (state_34109[(27)]);
var inst_34011 = cljs.core.chunked_seq_QMARK_.call(null,inst_34009);
var state_34109__$1 = state_34109;
if(inst_34011){
var statearr_34170_34225 = state_34109__$1;
(statearr_34170_34225[(1)] = (13));

} else {
var statearr_34171_34226 = state_34109__$1;
(statearr_34171_34226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (18))){
var inst_34042 = (state_34109[(12)]);
var inst_34041 = (state_34109[(16)]);
var inst_34041__$1 = (state_34109[(2)]);
var inst_34042__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_34041__$1);
var inst_34043 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34042__$1);
var state_34109__$1 = (function (){var statearr_34172 = state_34109;
(statearr_34172[(12)] = inst_34042__$1);

(statearr_34172[(16)] = inst_34041__$1);

return statearr_34172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34109__$1,(19),inst_34043);
} else {
if((state_val_34110 === (37))){
var inst_34104 = (state_34109[(2)]);
var state_34109__$1 = state_34109;
var statearr_34173_34227 = state_34109__$1;
(statearr_34173_34227[(2)] = inst_34104);

(statearr_34173_34227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (8))){
var inst_33996 = (state_34109[(9)]);
var inst_34009 = (state_34109[(27)]);
var inst_34009__$1 = cljs.core.seq.call(null,inst_33996);
var state_34109__$1 = (function (){var statearr_34174 = state_34109;
(statearr_34174[(27)] = inst_34009__$1);

return statearr_34174;
})();
if(inst_34009__$1){
var statearr_34175_34228 = state_34109__$1;
(statearr_34175_34228[(1)] = (10));

} else {
var statearr_34176_34229 = state_34109__$1;
(statearr_34176_34229[(1)] = (11));

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
});})(c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files))
;
return ((function (switch__25536__auto__,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto____0 = (function (){
var statearr_34180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34180[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto__);

(statearr_34180[(1)] = (1));

return statearr_34180;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto____1 = (function (state_34109){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_34109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e34181){if((e34181 instanceof Object)){
var ex__25540__auto__ = e34181;
var statearr_34182_34230 = state_34109;
(statearr_34182_34230[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34231 = state_34109;
state_34109 = G__34231;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto__ = function(state_34109){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto____1.call(this,state_34109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files))
})();
var state__25600__auto__ = (function (){var statearr_34183 = f__25599__auto__.call(null);
(statearr_34183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_34183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__,map__33983,map__33983__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33984,map__33984__$1,msg,files))
);

return c__25598__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34234,link){
var map__34236 = p__34234;
var map__34236__$1 = ((cljs.core.seq_QMARK_.call(null,map__34236))?cljs.core.apply.call(null,cljs.core.hash_map,map__34236):map__34236);
var file = cljs.core.get.call(null,map__34236__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__34236,map__34236__$1,file){
return (function (p1__34232_SHARP_,p2__34233_SHARP_){
if(cljs.core._EQ_.call(null,p1__34232_SHARP_,p2__34233_SHARP_)){
return p1__34232_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__34236,map__34236__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34240){
var map__34241 = p__34240;
var map__34241__$1 = ((cljs.core.seq_QMARK_.call(null,map__34241))?cljs.core.apply.call(null,cljs.core.hash_map,map__34241):map__34241);
var current_url_length = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34237_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34237_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__34243 = arguments.length;
switch (G__34243) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34245){
var map__34247 = p__34245;
var map__34247__$1 = ((cljs.core.seq_QMARK_.call(null,map__34247))?cljs.core.apply.call(null,cljs.core.hash_map,map__34247):map__34247);
var f_data = map__34247__$1;
var request_url = cljs.core.get.call(null,map__34247__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__34247__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__22374__auto__ = request_url;
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34248,files_msg){
var map__34270 = p__34248;
var map__34270__$1 = ((cljs.core.seq_QMARK_.call(null,map__34270))?cljs.core.apply.call(null,cljs.core.hash_map,map__34270):map__34270);
var opts = map__34270__$1;
var on_cssload = cljs.core.get.call(null,map__34270__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34271_34291 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__34272_34292 = null;
var count__34273_34293 = (0);
var i__34274_34294 = (0);
while(true){
if((i__34274_34294 < count__34273_34293)){
var f_34295 = cljs.core._nth.call(null,chunk__34272_34292,i__34274_34294);
figwheel.client.file_reloading.reload_css_file.call(null,f_34295);

var G__34296 = seq__34271_34291;
var G__34297 = chunk__34272_34292;
var G__34298 = count__34273_34293;
var G__34299 = (i__34274_34294 + (1));
seq__34271_34291 = G__34296;
chunk__34272_34292 = G__34297;
count__34273_34293 = G__34298;
i__34274_34294 = G__34299;
continue;
} else {
var temp__4126__auto___34300 = cljs.core.seq.call(null,seq__34271_34291);
if(temp__4126__auto___34300){
var seq__34271_34301__$1 = temp__4126__auto___34300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34271_34301__$1)){
var c__23159__auto___34302 = cljs.core.chunk_first.call(null,seq__34271_34301__$1);
var G__34303 = cljs.core.chunk_rest.call(null,seq__34271_34301__$1);
var G__34304 = c__23159__auto___34302;
var G__34305 = cljs.core.count.call(null,c__23159__auto___34302);
var G__34306 = (0);
seq__34271_34291 = G__34303;
chunk__34272_34292 = G__34304;
count__34273_34293 = G__34305;
i__34274_34294 = G__34306;
continue;
} else {
var f_34307 = cljs.core.first.call(null,seq__34271_34301__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34307);

var G__34308 = cljs.core.next.call(null,seq__34271_34301__$1);
var G__34309 = null;
var G__34310 = (0);
var G__34311 = (0);
seq__34271_34291 = G__34308;
chunk__34272_34292 = G__34309;
count__34273_34293 = G__34310;
i__34274_34294 = G__34311;
continue;
}
} else {
}
}
break;
}

var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__,map__34270,map__34270__$1,opts,on_cssload){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__,map__34270,map__34270__$1,opts,on_cssload){
return (function (state_34281){
var state_val_34282 = (state_34281[(1)]);
if((state_val_34282 === (2))){
var inst_34277 = (state_34281[(2)]);
var inst_34278 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_34279 = on_cssload.call(null,inst_34278);
var state_34281__$1 = (function (){var statearr_34283 = state_34281;
(statearr_34283[(7)] = inst_34277);

return statearr_34283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34281__$1,inst_34279);
} else {
if((state_val_34282 === (1))){
var inst_34275 = cljs.core.async.timeout.call(null,(100));
var state_34281__$1 = state_34281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34281__$1,(2),inst_34275);
} else {
return null;
}
}
});})(c__25598__auto__,map__34270,map__34270__$1,opts,on_cssload))
;
return ((function (switch__25536__auto__,c__25598__auto__,map__34270,map__34270__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto____0 = (function (){
var statearr_34287 = [null,null,null,null,null,null,null,null];
(statearr_34287[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto__);

(statearr_34287[(1)] = (1));

return statearr_34287;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto____1 = (function (state_34281){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_34281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e34288){if((e34288 instanceof Object)){
var ex__25540__auto__ = e34288;
var statearr_34289_34312 = state_34281;
(statearr_34289_34312[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34313 = state_34281;
state_34281 = G__34313;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto__ = function(state_34281){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto____1.call(this,state_34281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__,map__34270,map__34270__$1,opts,on_cssload))
})();
var state__25600__auto__ = (function (){var statearr_34290 = f__25599__auto__.call(null);
(statearr_34290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_34290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__,map__34270,map__34270__$1,opts,on_cssload))
);

return c__25598__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1436273480091