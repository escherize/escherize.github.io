// Compiled by ClojureScript 0.0-3211 {}
goog.provide('looper.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('looper.handlers');
goog.require('looper.subs');
goog.require('looper.views');
looper.core.mount_root = (function looper$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looper.views.main_panel], null),document.getElementById("app"));
});
looper.core.init = (function looper$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return looper.core.mount_root.call(null);
});
goog.exportSymbol('looper.core.init', looper.core.init);

//# sourceMappingURL=core.js.map?rel=1467272471723