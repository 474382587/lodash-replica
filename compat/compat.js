// 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。

const { default: typeAssertion } = require('../helper/typeAssertion');

/**
 * @param {Array} arr the array to process
 */
const compat = (arr) => {
  typeAssertion(arr, 'array');

  return arr.filter((e) => !!e);
};

export default compat;
