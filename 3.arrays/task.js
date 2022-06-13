function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length !== arr2.length) {
    result = false;
  } else {
    result = arr1.every((item, index) => item === arr2[index]);
  }
  return result;
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(item => item % 3 === 0 && item > 0);
  resultArr = resultArr.map(item => item * 10);
  return resultArr;
}
