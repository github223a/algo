const map = (fn, items) => {
    const iter = (elements, acc) => {
        if (!elements.length) {
            return acc;
        }
        const [head, ...other] = elements;
        acc.push(fn(head));
        return iter(other, acc);
    };
    return iter(items, []);
};


const change = item => item * 2;
console.log(map(change, [2, 3, 5]));

