const selectionSort = (array) => {
  const iter = (arr, acc) => {
    if (arr.length === 0) {
      return acc;
    }
    const min = Math.min.apply(null, arr);
    const index = arr.indexOf(min);
    arr.splice(index, 1);
    acc.push(min);
    return iter(arr, acc);
  };

  return iter(array, []);
};

export default selectionSort;

// O(n^2);
