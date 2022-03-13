// Compiled by ClojureScript 0.0-3211 {}
goog.provide('looper.js_inits');
goog.require('cljs.core');
looper.js_inits.init_ace = (function looper$js_inits$init_ace(handler){
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");

editor.getSession().setMode("ace/mode/clojure");

editor.setOptions({"fontSize": (18), "showPrintMargin": false, "highlightActiveLine": false, "showGutter": false, "enableSnippets": true, "enableBasicAutocompletion": true});

editor.getSession().on("change",handler);

return handler.call(null);
});

//# sourceMappingURL=js_inits.js.map?rel=1439034073492