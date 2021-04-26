const filter = (fn, items) => {
    if (!items.length) {
        return [];
    }

    const res = [];
    const [head, ...other] = items;

    if (fn(head)) {
        res.push(head);
    }
    return filter(fn, other);
};

const check = item => item % 2 === 0;

console.log(filter(check, [2, 5, 6, 24, 12, 32]));
