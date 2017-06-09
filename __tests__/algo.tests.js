import mergeSort from '../src/merge_sort';
import insertionSort from '../src/insertionSort';
import binarySearch from '../src/binarySearch';
import selectionSort from '../src/selectionSort';
import quickSort from '../src/quickSort';
import sortGraph from '../src/topological_sort';

describe('tests chapter_1', () => {
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
    expect(sortGraph(graph1)).toEqual(result1);
  });
});
