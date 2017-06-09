/* eslint no-plusplus: "off" */
/* eslint no-param-reassign: "off" */

const insertionSort = (array) => {
  const length = array.length;
  for (let i = 1; i < length; ++i) {
    const temp = array[i];
    let j = i - 1;
    for (; j >= 0 && array[j] > temp; --j) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

export default insertionSort;
