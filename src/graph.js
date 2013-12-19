define(["./frame"], function (Frame) {
    "use strict";

    var Graph = function () {
        this._nodeIds = {};
        this._nodes = [];
        this._edges = [];
    };

    Graph.prototype.addNode = function (node) {
        var id = node.getId();

        if (id) {
            this._nodeIds[id] = node;
        }

        this._nodes.push(node);

        return this;
    };

    Graph.prototype.getNode = function (id) {
        return this._nodeIds[id];
    };

    Graph.prototype.getNodes = function () {
        return this._nodes;
    };

    Graph.prototype.getEdges = function () {
        return this._edges;
    };

    Graph.prototype.addEdge = function (edge) {
        this.edges.push(edge);

        return this;
    };

    Graph.prototype.renderIn = function (elem) {
        return new Frame(elem, this);
    };

    return Graph;
});
