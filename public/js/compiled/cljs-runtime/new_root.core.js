goog.provide('new_root.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
goog.require('new_root.paint_snake_two.core');
goog.require('new_root.paint');
goog.require('new_root.mindustry');
goog.require('clojure.string');
goog.require('new_root.gen_art');
goog.require('new_root.leds');
goog.require('new_root.scratch');
goog.require('new_root.neumorph');
goog.require('new_root.gen_art_2');
if((typeof new_root !== 'undefined') && (typeof new_root.core !== 'undefined') && (typeof new_root.core._STAR_pointer !== 'undefined')){
} else {
new_root.core._STAR_pointer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(301),(301)], null));
}
if((typeof new_root !== 'undefined') && (typeof new_root.core !== 'undefined') && (typeof new_root.core.app_state !== 'undefined')){
} else {
new_root.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thingies","thingies",2070631329),(1)], null));
}
new_root.core.double_thingies = (function new_root$core$double_thingies(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_root.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"thingies","thingies",2070631329),(function (p1__62003_SHARP_){
return ((2) * p1__62003_SHARP_);
}));
});
new_root.core.link = (function new_root$core$link(text,post_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("new_root.core","post","new_root.core/post",-1550089405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),post_id], null))], null),text], null);
});
new_root.core.post_0 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"hello-world",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(0),new cljs.core.Keyword(null,"title","title",636505583),"Hello World",new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Welcome to my blog!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It's built as a single page app using\n               Clojurescript and reagent, which means the entire thing is\n               completely programmable. Visit my contents ",new_root.core.link("here.","hello-world")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new_root.core.double_thingies], null),"Click here to see stuff happen"], null)], null);
}),new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"I'm here, and im post 0."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here's ",new_root.core.link("Post 1","snake-game"),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Its a game I'm working on!"], null)], null);
})], null);
new_root.core.post_1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"snake-game",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(1),new cljs.core.Keyword(null,"title","title",636505583),"Adding goals and a way to die",new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is a riff on snake"], null);
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.paint_snake_two.core.view], null);
new_root.core.post_2 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(2),new cljs.core.Keyword(null,"title","title",636505583),"Force Directed Graph",new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"An updatable d3 Force Directed Graph."], null);
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.mindustry.view], null);
new_root.core.post_3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"paint",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(3),new cljs.core.Keyword(null,"title","title",636505583),"Paint fill game",new cljs.core.Keyword(null,"pure","pure",1433370394),true,new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Inspired by a python game I found on my raspberry pi"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Flood the canvas from the top left"], null)], null);
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.paint.view], null);
new_root.core.post_4 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"gen-art",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(4),new cljs.core.Keyword(null,"title","title",636505583),"Generative Art",new cljs.core.Keyword(null,"pure","pure",1433370394),true,new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Just getting warmed up"], null);
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.gen_art.view], null);
new_root.core.scratch = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"scratch",new cljs.core.Keyword(null,"title","title",636505583),"scratch",new cljs.core.Keyword(null,"exclude-post?","exclude-post?",-1796908485),true,new cljs.core.Keyword(null,"pure","pure",1433370394),true,new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.scratch.view], null);
new_root.core.post_5 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"neumorph",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(5),new cljs.core.Keyword(null,"title","title",636505583),"Dynamic Neumorphism",new cljs.core.Keyword(null,"pure","pure",1433370394),false,new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Yeah.. it's ",new_root.core.link("trendy","neumorph"),"."], null);
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.neumorph.view], null);
new_root.core.post_6 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"gen-art-2",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(6),new cljs.core.Keyword(null,"title","title",636505583),"More Art",new cljs.core.Keyword(null,"pure","pure",1433370394),true,new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Where circles don't overlap"], null);
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.gen_art_2.view], null);
new_root.core.post_7 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"light-strips",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(6),new cljs.core.Keyword(null,"title","title",636505583),"Working with LED Strips",new cljs.core.Keyword(null,"pure","pure",1433370394),true,new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
var n = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((3));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(50)], null)], null),clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(n),"\uD83D\uDCA1"))], null);
});
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.leds.view], null);
new_root.core.posts = (function new_root$core$posts(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.post_1,new_root.core.post_2,new_root.core.post_3,new_root.core.post_4,new_root.core.post_5,new_root.core.post_6,new_root.core.post_7,new_root.core.scratch], null)));
});
new_root.core.nav = (function new_root$core$nav(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav","div.nav",-1805454552),cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("new_root.core","home","new_root.core/home",653924687))], null),"Home"], null)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"thingies","thingies",2070631329).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_root.core.app_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new_root.core.double_thingies], null),"  |  "], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("new_root.core","projects","new_root.core/projects",384607645))], null),"Projects"], null)], null)], null))], null);
});
new_root.core.blog = (function new_root$core$blog(page){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.nav], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),page], null)], null));
});
new_root.core.teaser = (function new_root$core$teaser(p__62005){
var map__62006 = p__62005;
var map__62006__$1 = (((((!((map__62006 == null))))?(((((map__62006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62006):map__62006);
var _ = map__62006__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62006__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62006__$1,new cljs.core.Keyword(null,"title","title",636505583));
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62006__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62006__$1,new cljs.core.Keyword(null,"content","content",15833224));
var release = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62006__$1,new cljs.core.Keyword(null,"release","release",-1534371381));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.teaser-card","div.teaser-card",-1719041028),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"30px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px 20px 30px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new_root.core.link(title,id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(cljs.core.truth_(preview)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [preview], null):(cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null)
))], null)], null);
});
new_root.core.shadow_box = (function new_root$core$shadow_box(_STAR_pointer,content){
var _STAR_my_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(_STAR_my_position,new_root.neumorph.find_location(reagent.core.dom_node(this$)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_STAR_pointer__$1,content__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 30px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px 100px"], null),(cljs.core.truth_(cljs.core.deref(_STAR_my_position))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new_root.neumorph.p1_PLUS_p2__GT_box_shadow(cljs.core.deref(_STAR_pointer__$1),cljs.core.deref(_STAR_my_position))], null):null)], 0))], null),content__$1,null
], null);
})], null));
});
new_root.core.shadow_teaser = (function new_root$core$shadow_teaser(_STAR_pointer,p__62011){
var map__62012 = p__62011;
var map__62012__$1 = (((((!((map__62012 == null))))?(((((map__62012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62012):map__62012);
var _ = map__62012__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"title","title",636505583));
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"content","content",15833224));
var release = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"release","release",-1534371381));
var _STAR_my_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(_STAR_my_position,new_root.neumorph.find_location(reagent.core.dom_node(this$)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_STAR_pointer__$1,content__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"30px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null),(cljs.core.truth_(cljs.core.deref(_STAR_my_position))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new_root.neumorph.p1_PLUS_p2__GT_box_shadow(cljs.core.deref(_STAR_pointer__$1),cljs.core.deref(_STAR_my_position))], null):null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new_root.core.link(title,id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(cljs.core.truth_(preview)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [preview], null):(cljs.core.truth_(content__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null)
))], null)], null),null
], null);
})], null));
});
new_root.core.footer = (function new_root$core$footer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Copyright Bryan Maass 2019"], null)], null);
});
new_root.core.sorter = (function new_root$core$sorter(id1,id2){
var G__62014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [typeof id1 === 'string',typeof id2 === 'string'], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__62014)){
return id2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__62014)){
return id1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__62014)){
return cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id1,id2], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),G__62014)){
return cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id1,id2], null)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62014)].join('')));

}
}
}
}
});
new_root.core.home = (function new_root$core$home(_){
var with_let62016 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let62016","with-let62016",1493681048));
var temp__5739__auto___62034 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___62034 == null)){
} else {
var c__36993__auto___62035 = temp__5739__auto___62034;
if((with_let62016.generation === c__36993__auto___62035.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let62016.generation = c__36993__auto___62035.ratomGeneration);
}


var init62017 = (with_let62016.length === (0));
var handler = ((init62017)?(with_let62016[(0)] = (function (p1__62015_SHARP_){
return cljs.core.reset_BANG_(new_root.core._STAR_pointer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62015_SHARP_.pageX,p1__62015_SHARP_.pageY], null));
})):(with_let62016[(0)]));
var ___$1 = ((init62017)?(with_let62016[(1)] = document.addEventListener("mousemove",handler)):(with_let62016[(1)]));
var touch_handler = ((init62017)?(with_let62016[(2)] = (function (e){
var last_idx = (e.touches.length - (1));
var last_item = (e.touches[last_idx]);
return cljs.core.reset_BANG_(new_root.core._STAR_pointer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_item.clientX,last_item.clientY], null));
})):(with_let62016[(2)]));
var ___$2 = ((init62017)?(with_let62016[(3)] = document.addEventListener("touchmove",touch_handler)):(with_let62016[(3)]));
var res__36994__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"64%",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.shadow_box,new_root.core._STAR_pointer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Escherize Zone"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.nav], null)], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"wrap"], null)], null)], null),(function (){var iter__4582__auto__ = (function new_root$core$home_$_iter__62018(s__62019){
return (new cljs.core.LazySeq(null,(function (){
var s__62019__$1 = s__62019;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62019__$1);
if(temp__5735__auto__){
var s__62019__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62019__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62019__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62021 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62020 = (0);
while(true){
if((i__62020 < size__4581__auto__)){
var map__62022 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62020);
var map__62022__$1 = (((((!((map__62022 == null))))?(((((map__62022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62022):map__62022);
var p = map__62022__$1;
var exclude_post_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62022__$1,new cljs.core.Keyword(null,"exclude-post?","exclude-post?",-1796908485));
cljs.core.chunk_append(b__62021,(cljs.core.truth_(exclude_post_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.shadow_teaser,new_root.core._STAR_pointer,p], null)));

var G__62036 = (i__62020 + (1));
i__62020 = G__62036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62021),new_root$core$home_$_iter__62018(cljs.core.chunk_rest(s__62019__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62021),null);
}
} else {
var map__62024 = cljs.core.first(s__62019__$2);
var map__62024__$1 = (((((!((map__62024 == null))))?(((((map__62024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62024):map__62024);
var p = map__62024__$1;
var exclude_post_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62024__$1,new cljs.core.Keyword(null,"exclude-post?","exclude-post?",-1796908485));
return cljs.core.cons((cljs.core.truth_(exclude_post_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.shadow_teaser,new_root.core._STAR_pointer,p], null)),new_root$core$home_$_iter__62018(cljs.core.rest(s__62019__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new_root.core.sorter,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(new_root.core.posts())))));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.footer], null)], null);
var destroy__36992__auto___62037 = (function (){
document.removeEventListener("mousemove",handler);

return document.removeEventListener("touchmove",touch_handler);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let62016.destroy == null)){
(with_let62016.destroy = destroy__36992__auto___62037);
} else {
}
} else {
destroy__36992__auto___62037();
}

return res__36994__auto__;
});
new_root.core.projects = (function new_root$core$projects(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Here are some projects and toys going back to 2012."], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__4582__auto__ = (function new_root$core$projects_$_iter__62026(s__62027){
return (new cljs.core.LazySeq(null,(function (){
var s__62027__$1 = s__62027;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62027__$1);
if(temp__5735__auto__){
var s__62027__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62027__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62027__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62029 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62028 = (0);
while(true){
if((i__62028 < size__4581__auto__)){
var project = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62028);
cljs.core.chunk_append(b__62029,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/works/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(project)].join('')], null),clojure.string.capitalize(project)], null));

var G__62038 = (i__62028 + (1));
i__62028 = G__62038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62029),new_root$core$projects_$_iter__62026(cljs.core.chunk_rest(s__62027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62029),null);
}
} else {
var project = cljs.core.first(s__62027__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/works/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(project)].join('')], null),clojure.string.capitalize(project)], null),new_root$core$projects_$_iter__62026(cljs.core.rest(s__62027__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blindfold","catan","circles","cljsfiddle","colors","dnd5","hiccup.space","looper","magic","santorini","transpose"], null));
})())], null);
});
new_root.core.post = (function new_root$core$post(match){
var temp__5733__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match)));
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
var posts = new_root.core.posts();
var map__62030 = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(posts,id);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(posts,parseInt(id));
}
})();
var map__62030__$1 = (((((!((map__62030 == null))))?(((((map__62030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62030):map__62030);
var post = map__62030__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62030__$1,new cljs.core.Keyword(null,"content","content",15833224));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62030__$1,new cljs.core.Keyword(null,"title","title",636505583));
var pure_QMARK_ = new cljs.core.Keyword(null,"pure","pure",1433370394).cljs$core$IFn$_invoke$arity$1(post);
if(cljs.core.truth_(pure_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("new_root.core","home","new_root.core/home",653924687))], null),"Home"], null),"]"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([match], 0))], null);
}
});
new_root.core.about = (function new_root$core$about(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"under construction"], null);
});
new_root.core.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new_root.core","home","new_root.core/home",653924687),new cljs.core.Keyword(null,"view","view",1247994814),new_root.core.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/projects",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new_root.core","projects","new_root.core/projects",384607645),new cljs.core.Keyword(null,"view","view",1247994814),new_root.core.projects], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new_root.core","about","new_root.core/about",-396189973),new cljs.core.Keyword(null,"view","view",1247994814),new_root.core.about], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/post/:id",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new_root.core","post","new_root.core/post",-1550089405),new cljs.core.Keyword(null,"view","view",1247994814),new_root.core.post,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.int_QMARK_], null)], null)], null)], null)], null);
new_root.core.current_page = (function new_root$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_root.core.app_state)))?(function (){var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_root.core.app_state))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_root.core.app_state))], null);
})():null)], null);
});
new_root.core.start = (function new_root$core$start(){
var G__62032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.current_page], null);
var G__62033 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__62032,G__62033) : reagent.core.render_component.call(null,G__62032,G__62033));
});
new_root.core.init = (function new_root$core$init(){
reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new_root.core.routes),(function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_root.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"match","match",1220059550),m);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));

new_root.paint_snake_two.core.init();

return new_root.core.start();
});
goog.exportSymbol('new_root.core.init', new_root.core.init);
new_root.core.stop = (function new_root$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=new_root.core.js.map
