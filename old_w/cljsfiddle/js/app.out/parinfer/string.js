// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('parinfer.string');
goog.require('cljs.core');
goog.require('clojure.string');
parinfer.string.insert_string = (function parinfer$string$insert_string(orig,idx,insert){
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(orig,(0),idx)),cljs.core.str(insert),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(orig,idx))].join('');
});
parinfer.string.remove_str_range = (function parinfer$string$remove_str_range(orig,start,end){
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(orig,(0),start)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(orig,end))].join('');
});
/**
 * get all lines (even empty ones)
 *   source: http://stackoverflow.com/a/29614863/142317
 */
parinfer.string.get_lines = (function parinfer$string$get_lines(text){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(text,/\n/,(-1));
});
