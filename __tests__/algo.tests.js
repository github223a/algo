const {
    bubbleSort,
    binarySearch,
    mergeSort,
    insertionSort,
    selectionSort,
    quickSort,
    topologicalSort,
    liSearch,
} = require('../src/index.js');

describe('tests chapter_1', () => {
    test('bublbe test', () => {
        const arr = [1, 3, 2, 4, 6, 5, 7, 9, 8].sort();
        const result = bubbleSort(arr);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('binary search', () => {
        const arr = [1, 3, 2, 4, 6, 5, 7, 9, 8].sort();
        const result = binarySearch(arr, 3);
        expect(result).toBe(2);
    });

    test('selection sort', () => {
        const result = selectionSort([1, 3, 2, 4, 6, 5, 7, 9, 8]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('insertion sort', () => {
        const result = insertionSort([1, 3, 2, 4, 6, 5, 7, 9, 8]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('merge sort', () => {
        const result = mergeSort([1, 3, 2, 4, 6, 5, 7, 9, 8]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('quick sort', () => {
        const result = quickSort([1, 3, 2, 4, 6, 5, 7, 9, 8]);
        const result2 = quickSort(['a', 'c', 'b', 'd', 'e', 'g', 'f', 'x', 'z']);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(result2).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'x', 'z']);
    });

    test('topological sort', () => {
        const graph1 = {
            mongo: [],
            tzinfo: ['thread_safe'],
            uglifier: ['execjs'],
            execjs: ['thread_safe', 'json'],
            redis: [],
        };
        const result1 = ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];
        expect(topologicalSort(graph1)).toEqual(result1);
    });

    test('(-)li-search-algoritm', () => {
        expect(liSearch(0, 0, 8, 1)).toEqual('Incorrect entry data');
    });

    test('(+)li-search-algoritm', () => {
        expect(liSearch(1, 8, 8, 1)).toEqual(14);
    });
});
