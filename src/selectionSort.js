const selectionSort = (array) => {
  const iter = (arr, acc) => {
    if (arr.length === 0) { return acc; }
    const min = Math.min.apply(null, arr);
    const ind = arr.indexOf(min);
    arr.splice(ind, 1);
    acc.push(min);
    return iter(arr, acc);
  };
  return iter(array, []);
};

export default selectionSort;
