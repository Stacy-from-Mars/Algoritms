function selectionSort(array) {
    // Only change code below this line
    for (let i = 0; i < array.length; i++) {
        let min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j
            }
            swap(i, min, array)
        }
    }
    return array;
    // Only change code above this line
}

const swap = (a, b, arr) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));