function binarySearch(searchList, value) {
    let arrayPath = [];
    let left = 0
    let right = searchList.length - 1
    let middle = Math.floor(right / 2)
    while(searchList[middle] !== value) {
        arrayPath.push(searchList[middle])
        if (left > right) {
            return 'Value Not Found'
        }
        if (searchList[middle] > value) {
            right = middle - 1
            middle = left + Math.floor((right - left) / 2);
        } else {
            left = middle + 1
            middle = left + Math.floor((right - left) / 2);
        }
        
    }
    arrayPath.push(searchList[middle])
    return arrayPath;
  }

  const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
  ];
console.log(binarySearch(testArray, 0));