goog.provide('new_root.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
new_root.core.post_1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Hello Again",new cljs.core.Keyword(null,"content","content",15833224),(function (){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I'm here and im post 1."], null);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here's ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("new_root.core","post","new_root.core/post",-1550089405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null))], null),"post 0"], null),"."], null);
})], null);
new_root.core.post_0 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Hello World",new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I'm here, and im post 0."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here's ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("new_root.core","post","new_root.core/post",-1550089405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null))], null),"post 1"], null),"."], null)], null);
})], null);
new_root.core.posts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.post_0,new_root.core.post_1], null);
if((typeof new_root !== 'undefined') && (typeof new_root.core !== 'undefined') && (typeof new_root.core.app_state !== 'undefined')){
} else {
new_root.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
new_root.core.nav = (function new_root$core$nav(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav","div.nav",-1805454552),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("new_root.core","home","new_root.core/home",653924687))], null),"Home"], null)], null)," | ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("new_root.core","projects","new_root.core/projects",384607645))], null),"Projects"], null)], null)," | ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("new_root.core","post","new_root.core/post",-1550089405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(cljs.core.count(new_root.core.posts) - (1))], null))], null),"Last Post"], null)], null)], null)], null);
});
new_root.core.red_box = (function new_root$core$red_box(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#d24c53",new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"100px"], null)], null)], null);
});
new_root.core.blog = (function new_root$core$blog(page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.nav], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),page], null)], null);
});
new_root.core.teaser = (function new_root$core$teaser(p__28679){
var map__28680 = p__28679;
var map__28680__$1 = (((((!((map__28680 == null))))?(((((map__28680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28680):map__28680);
var _ = map__28680__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28680__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28680__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.small","h3.small",548412085),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#d24c53"], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null)], null)], null);
});
new_root.core.home = (function new_root$core$home(_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Bryan Zone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.blog,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4523__auto__ = (function new_root$core$home_$_iter__28682(s__28683){
return (new cljs.core.LazySeq(null,(function (){
var s__28683__$1 = s__28683;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__28683__$1);
if(temp__5720__auto__){
var s__28683__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28683__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__28683__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__28685 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__28684 = (0);
while(true){
if((i__28684 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__28684);
cljs.core.chunk_append(b__28685,new_root.core.teaser(p));

var G__28689 = (i__28684 + (1));
i__28684 = G__28689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28685),new_root$core$home_$_iter__28682(cljs.core.chunk_rest(s__28683__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28685),null);
}
} else {
var p = cljs.core.first(s__28683__$2);
return cljs.core.cons(new_root.core.teaser(p),new_root$core$home_$_iter__28682(cljs.core.rest(s__28683__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new_root.core.posts);
})())], null)], null);
});
new_root.core.projects = (function new_root$core$projects(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is the projects component"], null);
});
new_root.core.post = (function new_root$core$post(match){
var temp__5718__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match)));
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
var post = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_root.core.posts,parseInt(id));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("new_root.core","home","new_root.core/home",653924687))], null),"Home"], null),"]"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),(function (){var fexpr__28686 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_root.core.posts,parseInt(id)));
return (fexpr__28686.cljs$core$IFn$_invoke$arity$0 ? fexpr__28686.cljs$core$IFn$_invoke$arity$0() : fexpr__28686.call(null));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([match], 0))], null);
}
});
new_root.core.routes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new_root.core","home","new_root.core/home",653924687),new cljs.core.Keyword(null,"view","view",1247994814),new_root.core.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/projects",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new_root.core","projects","new_root.core/projects",384607645),new cljs.core.Keyword(null,"view","view",1247994814),new_root.core.projects], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/post/:id",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new_root.core","post","new_root.core/post",-1550089405),new cljs.core.Keyword(null,"view","view",1247994814),new_root.core.post,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.int_QMARK_], null)], null)], null)], null)], null);
new_root.core.current_page = (function new_root$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_root.core.app_state)))?(function (){var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_root.core.app_state))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_root.core.app_state))], null);
})():null)], null);
});
new_root.core.start = (function new_root$core$start(){
var G__28687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.current_page], null);
var G__28688 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__28687,G__28688) : reagent.core.render_component.call(null,G__28687,G__28688));
});
new_root.core.init = (function new_root$core$init(){
reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new_root.core.routes),(function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_root.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"match","match",1220059550),m);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));

return new_root.core.start();
});
goog.exportSymbol('new_root.core.init', new_root.core.init);
new_root.core.stop = (function new_root$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=new_root.core.js.map
