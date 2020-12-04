import typeAssertion from '../helper/typeAssertion';

export const chunk = (arr, size = 1) => {
  const res = [];

  typeAssertion(arr, 'array');

  if (arr.length <= size) {
    return arr;
  }

  let temp = [];
  arr.forEach((item) => {
    if (temp.length < size) {
      temp.push(item);
    } else {
      res.push(temp);
      temp = [];
      temp.push(item);
    }
  });
  if (temp.length > 0) res.push(temp);
  return res;
};
