var width = window.innerWidth;
var height = window.innerHeight;

var color = d3.scale.category20();

nodes = [];
links = [];
node_widths = [];

node_height = 15;

force = cola.d3adaptor()
    .nodes(nodes)
    .links(links)
    .linkDistance(60)
    .size([width, height])
    .on("tick", tick);

var svg = d3
        .select("div.svg-contain")
        .append("svg")
        .style("background-color", "#272822")
        .attr("top", "0")
        .attr("left", "0")
        .attr("viewBox", "0 0 " + width + " " + height )
        .attr("preserveAspectRatio", "xMidYMid meet");

var node = svg.selectAll(".node"),
    link = svg.selectAll(".link"),
    label = svg.selectAll(".label");

function start() {

    node = node.data(force.nodes(), function (d) { return d.id; });
    node.enter()
        .append("rect")
        .attr("class", function (d) { return "node " + d.id; })
        .style("stroke", "#FFF")
        .style("stroke-width", 1)
        .style("fill", "rgb(248, 248, 242)")
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("width", function(d, i){return node_widths[i] || node_height;})
        .attr("height", node_height)
        .call(force.drag);

    node.exit().remove();

    label = label.data(force.nodes(), function (d) { return d.id; });
    label.enter()
        .append("text")
        .attr("class", "label")
        .text(function (d){return d.id;})
        .call(force.drag);
    label.exit().remove();

    link = link.data(force.links(),
                     function (d) { return d.source.id + "-" + d.target.id; });
    link.enter()
        .insert("line", ".node")
        .attr("class", "link")
        .style("stroke", "rgb(247, 0 ,94)")
        .style("stroke-width", 1.2)
        .attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.source.x; })
        .attr("y2", function (d) { return d.source.y; });
    link.exit().remove();

    force.start();
}

function tick() {

    link.attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

    label.attr("x", function (d,i) {
        return d.x})
        .attr("y", function (d) {
            var h = this.getBBox().height;
            return d.y + h/4;
        })
        .attr("unused", function(d, i){
            node_widths[i] = this.getBBox().width;
            return "not_used";
        });

    node.attr("x", function (d, i) { return d.x - (node_widths[i] / 2) - 5 || d.x; })
        .attr("y", function (d) { return d.y - 8; })
        .attr("width", function(d, i) {
            return node_widths[i] + 10 || node_height;
        })
        .attr("height", node_height);

}

function find_node(name){
    var dupe = -1
    for(idx in nodes){ if (nodes[idx].id == name) { dupe = idx; } }
    return dupe;
}

function find_edge(s, t){
    var dupe = -1
    for(idx in links){
        if (links[idx].source.id == s && links[idx].target.id == t) {
            dupe = idx;
        }
    }
    return dupe;
}

function add_node(name){
    if(-1 == find_node(name.id)){
        nodes.push({id: name.id});
        console.log(name.id + " added.");
    } else {
        console.log(name.id + " already exists.");
    }
}

function add_edge(e){
    var s = e.source;
    var t = e.target;
    s_idx = find_node(s.id);
    t_idx = find_node(t.id);
    if (-1 != s_idx){
        if (-1 != t_idx){
            if(-1 == find_edge(s, t)){
                links.push({source: nodes[s_idx], target: nodes[t_idx]});
            } else { console.log( "edge [" + s + " -> " + t + "] already exists."); }
        } else { console.log(t + " (target) does not exist."); }
    } else { console.log(s + " (source) does not exist."); }
}

function remove_node(name){
    var idx = find_node(name);
    if(-1 != idx){
        nodes.splice(idx, 1);

    } else { console.log(name + " does not exist.") }
}

function remove_edge(e){
    var s = e.source;
    var t = e.target;
    var idx = find_edge(s, t);
    console.log(idx);
    if(-1 != idx){
        links.splice(idx, 1);
    }
}

function clear(){
    while(links.pop()){};
    while(nodes.pop()){};
}
