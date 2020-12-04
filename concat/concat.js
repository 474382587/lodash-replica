// _.concat(array, [values])#
// 创建一个新数组，将array与任何数组 或 值连接在一起。
import typeAssertion from '../helper/typeAssertion';
/**
 * @param {Array} arr the array to concat to
 * @param {[values]} [values] needs to be concat
 */

const concat = (arr, ...args) => {
  typeAssertion(arr, 'array');

  const length = args.length;
  if (length < 1) {
    return arr;
  }

  for (let i = 0; i < length; i += 1) {
    arr.push(args[i]);
  }

  return arr;
};

export default concat;
