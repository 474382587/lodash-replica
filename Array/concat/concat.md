```JavaScript
  /**
    * Creates a new array concatenating `array` with any additional arrays
    * and/or values.
    *
    * @static
    * @memberOf _
    * @since 4.0.0
    * @category Array
    * @param {Array} array The array to concatenate.
    * @param {...*} [values] The values to concatenate.
    * @returns {Array} Returns the new concatenated array.
    * @example
    *
    * var array = [1];
    * var other = _.concat(array, 2, [3], [[4]]);
    *
    * console.log(other);
    * // => [1, 2, 3, [4]]
    *
    * console.log(array);
    * // => [1]
    */
  function concat() {
    var length = arguments.length; // 得到所有params的数量
    if (!length) { // 如果数量为0， 则返回空数组
      return [];
    }
    var args = Array(length - 1), // 新建一个空的数组用于存储结果
        array = arguments[0], // 得到第一个 param 就是原始需要连接的array
        index = length; // 

    while (index--) {
      args[index - 1] = arguments[index];
    }
    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
  }
```