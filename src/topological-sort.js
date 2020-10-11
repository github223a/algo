// const sortGraph = graph => {
//     const add = (acc, node) => {
//         return Object.assign({}, acc, node in graph ? graph[node].reduce(add, acc) : {}, {[node]: true});
//     };
//
//     return Object.keys(Object.keys(graph).reduce(add, {}));
// };
//
// module.exports = sortGraph;

const sortGraph = graph => {
    const keys = Object.keys(graph);

    const add = (acc, node) => {
        if (keys.includes(node)) {
            acc[node] = graph[node].reduce(add, acc);
        } else {
            acc[node] = true;
        }
        return acc;
    };
    return Object.keys(Object.keys(graph).reduce(add, {}));
};

console.log(sortGraph({
    first: ['second'],
    second: ['123'],
    three: ['first'],
    fourth: [],
}));
