function mergeSort(array) {
    // Only change code below this line
    if (array.length === 1) {
        return array
    } else {
        const middleIndex = Math.floor(array.length / 2)
        return merge(
            mergeSort(array.slice(0, middleIndex)),
            mergeSort(array.slice(middleIndex))
        )
    }
}
const merge = (arr1, arr2) => {
    let merged = []
    while (arr1.length && arr2.length) {
        arr1[0] < arr2[0] ? merged.push(arr1.shift()) : arr1[0] > arr2[0] ? merged.push(arr2.shift()) : merged.push(arr1.shift(), arr2.shift())
    }
    return [...merged, ...arr1, ...arr2];
    // Only change code above this line
}


console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));