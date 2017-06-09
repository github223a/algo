const merge = (left, right) => {
  const iter = (current, another, result) => {
    if (current.length === 0) {
      return [...result, ...another];
    } else if (another.length === 0) {
      return [...result, ...current];
    }

    let newCurrent;
    let newAnother;

    if (current[0] >= another[0]) {
      newCurrent = another;
      newAnother = current;
    } else {
      newCurrent = current;
      newAnother = another;
    }

    return iter(newCurrent.slice(1), newAnother, [...result, newCurrent[0]]);
  };
  return iter(left, right, []);
};

// const merge = (left, right) => {
//   if (left.length === 0) return right;
//   if (right.length === 0) return left;
//   const x = left[0];
//   const y = right[0];
//
//   return (x < y)
//      ? [x, ...merge(left.slice(1), right)]
//      : [y, ...merge(left, right.slice(1))];
// };


const mergeSort = (array) => {
  if (array.length < 2) { return array; }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;
