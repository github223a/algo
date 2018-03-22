const binarySearch = (arr, i) => {
  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === i) {
    return mid;
  } else if (arr[mid] < i && arr.length > 0) {
    return binarySearch(arr.slice(mid), i);
  }
  return binarySearch(arr.slice(0, mid), i);
};

export default binarySearch;

// log2(n)
