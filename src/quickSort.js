const quickSort = (array) => {
  if (array.length === 0) { return []; }
  const head = array[0];
  const less = array.filter(el => el < head);
  const equal = array.filter(el => el === head);
  const more = array.filter(el => el > head);
  return quickSort(less).concat(equal, quickSort(more));
};

export default quickSort;
