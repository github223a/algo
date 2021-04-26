const filter = (fn, items) => {
    const iter = (elements, acc) => {
        if (!elements.length) {
            return acc;
        }
        const [head, ...other] = elements;

        fn(head) && acc.push(head);
        return iter(other, acc);
    };
    return iter(items, []);
};

const check = item => item === 2;
console.log(filter(check, [2, 5, 6, 24, 2, 2]));
