const binarySearch = (arr, i) => {
    const len = arr.length;
    const mid = Math.floor(len / 2);

    if (arr[mid] === i) {
        return mid;
    }
    if (arr[mid] < i && len > 0) {
        return binarySearch(arr.slice(mid), i);
    }
    return binarySearch(arr.slice(0, mid), i);
};

module.exports = binarySearch;

// log2(n)
