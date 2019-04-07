const insertionSort = array => {
    for (let i = 1; i < array.length; ++i) {
        const temp = array[i];
        let j = i - 1;
        for (; j >= 0 && array[j] > temp; --j) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
};

module.exports = insertionSort;

// best O(n); worst O(n^2);
