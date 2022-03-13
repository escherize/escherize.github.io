// Compiled by ClojureScript 1.9.229 {}
goog.provide('blindfold.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('blindfold.views');
goog.require('blindfold.config');
goog.require('blindfold.events');
goog.require('re_frisk.core');
goog.require('blindfold.subs');
goog.require('re_frame.core');
blindfold.core.dev_setup = (function blindfold$core$dev_setup(){
if(cljs.core.truth_(blindfold.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

re_frisk.core.enable_re_frisk_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
blindfold.core.mount_root = (function blindfold$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blindfold.views.main_panel], null),document.getElementById("app"));
});
blindfold.core.init = (function blindfold$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

blindfold.core.dev_setup.call(null);

return blindfold.core.mount_root.call(null);
});
goog.exportSymbol('blindfold.core.init', blindfold.core.init);

//# sourceMappingURL=core.js.map?rel=1481770784829