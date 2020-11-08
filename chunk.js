export const chunk = (arr, size = 1) => {
  const res = [];

  if (!(arr instanceof Array)) {
    // use Array.isArray instead
    // console.warn("You've entered the wrong input");
    return res;
  }
  if (arr.length <= size) {
    return arr;
  }

  let temp = [];
  arr.forEach((item, index) => {
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
