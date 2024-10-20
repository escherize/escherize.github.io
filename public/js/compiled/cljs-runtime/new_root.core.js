goog.provide('new_root.core');
if((typeof new_root !== 'undefined') && (typeof new_root.core !== 'undefined') && (typeof new_root.core._STAR_pointer !== 'undefined')){
} else {
new_root.core._STAR_pointer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(301),(301)], null));
}
if((typeof new_root !== 'undefined') && (typeof new_root.core !== 'undefined') && (typeof new_root.core.app_state !== 'undefined')){
} else {
new_root.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thingies","thingies",2070631329),(1)], null));
}
new_root.core.link = (function new_root$core$link(text,post_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("new-root.core","post","new-root.core/post",1841552209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),post_id], null))], null),text], null);
});
new_root.core.post_0 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"hello-world",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(0),new cljs.core.Keyword(null,"title","title",636505583),"Hello World",new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Welcome to my blog!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It's built as a single page app using\n               Clojurescript and reagent, which means the entire thing is\n               completely programmable. Visit my contents ",new_root.core.link("here.","hello-world")], null)], null);
}),new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"I'm here, and im post 0."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here's ",new_root.core.link("Post 1","snake-game"),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Its a game I'm working on!"], null)], null);
})], null);
new_root.core.post_1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"snake-game",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(1),new cljs.core.Keyword(null,"title","title",636505583),"Adding goals and a way to die",new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is a riff on snake"], null);
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.paint_snake_two.core.view], null);
new_root.core.post_2 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(2),new cljs.core.Keyword(null,"title","title",636505583),"Force Directed Graph",new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"An updatable d3 Force Directed Graph."], null);
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.simple_dag.view], null);
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
new_root.core.post_7 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"gen-art-3",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(7),new cljs.core.Keyword(null,"title","title",636505583),"Even More Art",new cljs.core.Keyword(null,"pure","pure",1433370394),true,new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Vector Fields 101"], null);
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.gen_art_3.view], null);
new_root.core.post_8 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"pico8",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(8),new cljs.core.Keyword(null,"title","title",636505583),"Pico-8",new cljs.core.Keyword(null,"pure","pure",1433370394),true,new cljs.core.Keyword(null,"no-content","no-content",-1860206018),true,new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"To play, use the arrow keys and z, and x. ","They also work on mobile.",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null),new cljs.core.Keyword(null,"href","href",-793805698),"/works/pico8/tetris_attack"], null),"Tetris Attack v1.1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null),new cljs.core.Keyword(null,"href","href",-793805698),"/works/pico8/ammo_thruster"], null),"Ammo Thruster v0.9"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null),new cljs.core.Keyword(null,"href","href",-793805698),"/works/pico8/sliding_tiles"], null),"Sliding Tiles v0.4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null),new cljs.core.Keyword(null,"href","href",-793805698),"/works/pico8/gunner_men"], null),"Gunner Men 0.1"], null)], null)], null);
})], null);
new_root.core.post_9 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"light-strips",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(9),new cljs.core.Keyword(null,"title","title",636505583),"Working with LED Strips",new cljs.core.Keyword(null,"pure","pure",1433370394),true,new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return "Setting up a low-fi LED display, and accessing 2d arrays";
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.leds.view], null);
new_root.core.post_10 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"weights",new cljs.core.Keyword(null,"sorder","sorder",2122475113),(10),new cljs.core.Keyword(null,"title","title",636505583),"Barbell Calculator",new cljs.core.Keyword(null,"pure","pure",1433370394),true,new cljs.core.Keyword(null,"preview","preview",451279890),(function (){
return "Quickly visualize what to put on your bar";
}),new cljs.core.Keyword(null,"content","content",15833224),new_root.weight.view], null);
new_root.core.posts = (function new_root$core$posts(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.post_0,new_root.core.post_1,new_root.core.post_2,new_root.core.post_3,new_root.core.post_4,new_root.core.post_5,new_root.core.post_6,new_root.core.post_8,new_root.core.post_9,new_root.core.post_10,new_root.core.scratch], null)));
});
new_root.core.nav = (function new_root$core$nav(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"home",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("new-root.core","home","new-root.core/home",1625415997))], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"projects"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("new-root.core","projects","new-root.core/projects",-787071581))], null),"Projects"], null)], null)], null);
});
new_root.core.blog = (function new_root$core$blog(page){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.nav], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),page], null)], null));
});
new_root.core.teaser = (function new_root$core$teaser(p__47983){
var map__47984 = p__47983;
var map__47984__$1 = cljs.core.__destructure_map(map__47984);
var _ = map__47984__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"title","title",636505583));
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"content","content",15833224));
var no_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"no-content","no-content",-1860206018));
var release = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"release","release",-1534371381));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.teaser-card","div.teaser-card",-1719041028),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"30px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px 20px 30px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),(cljs.core.truth_(no_content)?title:new_root.core.link(title,id))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(cljs.core.truth_(preview)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [preview], null):(cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null)
))], null)], null);
});
new_root.core.btn_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"25px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#dde",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border","border",1444987323),"5px rgb(12, 112, 160) solid",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10),new cljs.core.Keyword(null,"padding","padding",1660304693),"30px"], null);
new_root.core.squirt = (function new_root$core$squirt(x){
if((x > (0))){
return Math.sqrt(Math.abs(x));
} else {
return ((-1) * Math.sqrt(Math.abs(x)));
}
});
new_root.core.clamp = (function new_root$core$clamp(lo,n,hi){
var x__4298__auto__ = hi;
var y__4299__auto__ = (function (){var x__4295__auto__ = lo;
var y__4296__auto__ = n;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
});
new_root.core.style_fn = (function new_root$core$style_fn(p__47985){
var map__47986 = p__47985;
var map__47986__$1 = cljs.core.__destructure_map(map__47986);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47986__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47986__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47986__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var dist = Math.sqrt(((x * x) + (y * y)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.8 * new_root.core.squirt(x))),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.8 * new_root.core.squirt(y))),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((h / (100))),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((h / (80))),"px ","#aab"].join(''),new cljs.core.Keyword(null,"background-color","background-color",570434026),["hsl(-130,40%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4295__auto__ = ((95) - (h / (100)));
var y__4296__auto__ = (85);
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()),"%)"].join('')], null);
});
new_root.core.shadow_box = (function new_root$core$shadow_box(_STAR_pointer,content){
var _STAR_my_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(_STAR_my_position,new_root.neumorph.find_location(reagent.dom.dom_node(this$)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_STAR_pointer__$1,content__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_root.core.btn_style,(cljs.core.truth_(cljs.core.deref(_STAR_my_position))?new_root.core.style_fn(new_root.neumorph.p1_PLUS_p2__GT_box_shadow_main(cljs.core.deref(_STAR_pointer__$1),cljs.core.deref(_STAR_my_position))):null)], 0))], null),content__$1], null);
})], null));
});
new_root.core.shadow_teaser = (function new_root$core$shadow_teaser(_STAR_pointer,p__47987){
var map__47988 = p__47987;
var map__47988__$1 = cljs.core.__destructure_map(map__47988);
var _ = map__47988__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47988__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47988__$1,new cljs.core.Keyword(null,"title","title",636505583));
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47988__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var no_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47988__$1,new cljs.core.Keyword(null,"no-content","no-content",-1860206018));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47988__$1,new cljs.core.Keyword(null,"content","content",15833224));
var release = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47988__$1,new cljs.core.Keyword(null,"release","release",-1534371381));
var _STAR_my_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(_STAR_my_position,new_root.neumorph.find_location(reagent.dom.dom_node(this$)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_STAR_pointer__$1,content__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shadow-teaser","div.shadow-teaser",336975696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin","margin",-995903681),"30px 25px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#dde",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border","border",1444987323),"8px rgb(21, 121, 169) solid",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"20px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null),(cljs.core.truth_(cljs.core.deref(_STAR_my_position))?new_root.core.style_fn(new_root.neumorph.p1_PLUS_p2__GT_box_shadow_main(cljs.core.deref(_STAR_pointer__$1),cljs.core.deref(_STAR_my_position))):null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),(cljs.core.truth_(no_content)?title:new_root.core.link(title,id))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(cljs.core.truth_(preview)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [preview], null):(cljs.core.truth_(content__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null)
))], null)], null),null
], null);
})], null));
});
new_root.core.footer = (function new_root$core$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(100)], null)], null)], null);
});
new_root.core.width = (function new_root$core$width(){
return window.innerWidth;
});
new_root.core.height = (function new_root$core$height(){
return window.innerHeight;
});
console.log("width:",new_root.core.width());
console.log("height:",new_root.core.height());
new_root.core.to_scale = (function new_root$core$to_scale(range,n){
return ((range * 0.45) + ((range * n) * 0.35));
});
new_root.core.home_posts = (function new_root$core$home_posts(){
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sorder","sorder",2122475113),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(new_root.core.posts()))));
});
new_root.core.home = (function new_root$core$home(_){
var with_let47990 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let47990","with-let47990",-1383483726));
var temp__5757__auto___48003 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___48003 == null)){
} else {
var c__42553__auto___48004 = temp__5757__auto___48003;
if((with_let47990.generation === c__42553__auto___48004.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let47990.generation = c__42553__auto___48004.ratomGeneration);
}


var init47991 = (with_let47990.length === (0));
var handler = ((init47991)?(with_let47990[(0)] = (function (p1__47989_SHARP_){
return cljs.core.reset_BANG_(new_root.core._STAR_pointer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47989_SHARP_.pageX,p1__47989_SHARP_.pageY], null));
})):(with_let47990[(0)]));
var ___$1 = ((init47991)?(with_let47990[(1)] = document.addEventListener("mousemove",handler)):(with_let47990[(1)]));
var res__42554__auto__ = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top","div.top",154731355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"30px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Escherize Zone"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.nav], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"wrap",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-evenly"], null)], null)], null),(function (){var iter__4611__auto__ = (function new_root$core$home_$_iter__47992(s__47993){
return (new cljs.core.LazySeq(null,(function (){
var s__47993__$1 = s__47993;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47993__$1);
if(temp__5753__auto__){
var s__47993__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47993__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47993__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47995 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47994 = (0);
while(true){
if((i__47994 < size__4610__auto__)){
var map__47996 = cljs.core._nth(c__4609__auto__,i__47994);
var map__47996__$1 = cljs.core.__destructure_map(map__47996);
var p = map__47996__$1;
var exclude_post_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47996__$1,new cljs.core.Keyword(null,"exclude-post?","exclude-post?",-1796908485));
cljs.core.chunk_append(b__47995,(cljs.core.truth_(exclude_post_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.shadow_teaser,new_root.core._STAR_pointer,p], null)));

var G__48005 = (i__47994 + (1));
i__47994 = G__48005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47995),new_root$core$home_$_iter__47992(cljs.core.chunk_rest(s__47993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47995),null);
}
} else {
var map__47997 = cljs.core.first(s__47993__$2);
var map__47997__$1 = cljs.core.__destructure_map(map__47997);
var p = map__47997__$1;
var exclude_post_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47997__$1,new cljs.core.Keyword(null,"exclude-post?","exclude-post?",-1796908485));
return cljs.core.cons((cljs.core.truth_(exclude_post_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.shadow_teaser,new_root.core._STAR_pointer,p], null)),new_root$core$home_$_iter__47992(cljs.core.rest(s__47993__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new_root.core.home_posts());
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.footer], null)], null);
});
var destroy__42552__auto___48006 = (function (){
return document.removeEventListener("mousemove",handler);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let47990.destroy == null)){
(with_let47990.destroy = destroy__42552__auto___48006);
} else {
}
} else {
destroy__42552__auto___48006();
}

return res__42554__auto__;
});
new_root.core.projects = (function new_root$core$projects(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Here are some projects and toys going back to 2012."], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__4611__auto__ = (function new_root$core$projects_$_iter__47998(s__47999){
return (new cljs.core.LazySeq(null,(function (){
var s__47999__$1 = s__47999;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47999__$1);
if(temp__5753__auto__){
var s__47999__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47999__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47999__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__48001 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__48000 = (0);
while(true){
if((i__48000 < size__4610__auto__)){
var project = cljs.core._nth(c__4609__auto__,i__48000);
cljs.core.chunk_append(b__48001,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/works/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(project)].join('')], null),clojure.string.capitalize(project)], null));

var G__48007 = (i__48000 + (1));
i__48000 = G__48007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48001),new_root$core$projects_$_iter__47998(cljs.core.chunk_rest(s__47999__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48001),null);
}
} else {
var project = cljs.core.first(s__47999__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/works/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(project)].join('')], null),clojure.string.capitalize(project)], null),new_root$core$projects_$_iter__47998(cljs.core.rest(s__47999__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blindfold","catan","circles","cljsfiddle","colors","dnd5","hiccup.space","looper","magic","santorini","transpose"], null));
})())], null);
});
new_root.core.post = (function new_root$core$post(match){
var temp__5751__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match)));
if(cljs.core.truth_(temp__5751__auto__)){
var id = temp__5751__auto__;
var posts = new_root.core.posts();
var map__48002 = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(posts,id);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(posts,parseInt(id));
}
})();
var map__48002__$1 = cljs.core.__destructure_map(map__48002);
var post = map__48002__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48002__$1,new cljs.core.Keyword(null,"content","content",15833224));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48002__$1,new cljs.core.Keyword(null,"title","title",636505583));
var pure_QMARK_ = new cljs.core.Keyword(null,"pure","pure",1433370394).cljs$core$IFn$_invoke$arity$1(post);
if(cljs.core.truth_(pure_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("new-root.core","home","new-root.core/home",1625415997))], null),"Home"], null),"]"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([match], 0))], null);
}
});
new_root.core.about = (function new_root$core$about(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"under construction"], null);
});
new_root.core.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new-root.core","home","new-root.core/home",1625415997),new cljs.core.Keyword(null,"view","view",1247994814),(function (){
return new_root.core.home;
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/projects",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new-root.core","projects","new-root.core/projects",-787071581),new cljs.core.Keyword(null,"view","view",1247994814),(function (){
return new_root.core.projects;
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new-root.core","about","new-root.core/about",-626346247),new cljs.core.Keyword(null,"view","view",1247994814),(function (){
return new_root.core.about;
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/post/:id",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("new-root.core","post","new-root.core/post",1841552209),new cljs.core.Keyword(null,"view","view",1247994814),(function (){
return new_root.core.post;
}),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.int_QMARK_], null)], null)], null)], null)], null);
new_root.core.current_page = (function new_root$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_root.core.app_state)))?(function (){var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_root.core.app_state))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_root.core.app_state))], null);
})():null)], null);
});
new_root.core.start = (function new_root$core$start(){
console.log("starting..");

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root.core.current_page], null),document.getElementById("app"));
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
