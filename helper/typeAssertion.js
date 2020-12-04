var toType = (obj) => {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
};

const typeAssertion = (item, type) => {
  if (toType(item) !== type) {
    throw new Error(
      `Please check your input, the input your entered is not "${type}"`,
    );
  }
};

export default typeAssertion;
