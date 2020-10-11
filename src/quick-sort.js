const quickSort = array => {
    if (array.length === 0) {
        return [];
    }
    const head = array[0];
    const less = array.filter(el => el < head);
    const equal = array.filter(el => el === head);
    const more = array.filter(el => el > head);

    return quickSort(less).concat(equal, quickSort(more));
};

module.exports = quickSort;

// O(log n)


const quickSort = arr => {
    if (!arr.length) {
        return [];
    }

    const head = arr[0];
    const less = arr.filter(item => item < head);
    const equal = arr.filter(item => item === head);
    const more = arr.filter(item => item > head);

    return quickSort(less).concat(equal, quickSort(more));
};
