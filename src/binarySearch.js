const binarySearch = (arr, i) => {
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === i) {
    return mid;
  } else if (arr[mid] < i && arr.length > 1) {
    return binarySearch(arr.splice(mid), i);
  } else if (arr[mid] > i && arr.length > 1) {
    return binarySearch(arr.splice(0, mid), i);
  }
  return -1;
};

export default binarySearch;
