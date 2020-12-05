// 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。

import typeAssertion from '../../helper/typeAssertion';

/**
 * @param {Array} arr the array to process
 */
const compat = (arr) => {
  typeAssertion(arr, 'array');

  return es5(arr);
};

const es6 = (arr) => {
  return arr.filter((e) => !!e);
};

const es5 = (arr) => {
  const res = [];
  const length = arr.length;
  for (let i = 0; i < length; i += 1) {
    if (arr[i]) {
      res.push(arr[i]);
    }
  }
  return res;
};

export default compat;
