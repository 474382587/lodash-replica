import typeAssertion from '../../helper/typeAssertion';

/**
 * @param {Array} arr
 * @return {Array}
 */
const flatten = (arr) => {
  typeAssertion(arr, 'array');

  const res = [];
  const length = arr.length;
  let i = 0;
  while (i < length) {
    const item = arr[i];
    if (item instanceof Array) {
      const len = item.length;
      let j = 0;
      while (j < len) {
        res.push(item[j]);
        j += 1;
      }
      i += 1;
      continue;
    }
    res.push(item);
    i += 1;
  }
  return res;
};

export default flatten;
