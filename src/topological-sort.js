const sortGraph = graph => {
    const add = (acc, node) =>
        Object.assign({}, acc, node in graph ? graph[node].reduce(add, acc) : {}, {[node]: true});

    return Object.keys(Object.keys(graph).reduce(add, {}));
};

module.exports = sortGraph;
