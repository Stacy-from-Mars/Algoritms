function quickSort(array) {
    // Only change code below this line
    if (array.length === 0) {
        return []
    } else {
        let pivot = array[0]
        let less = []
        let equal = []
        let great = []
        for (let el of array) {
            el > pivot ? great.push(el) : el < pivot ? less.push(el) : equal.push(el)
        }
        return [...quickSort(less), ...equal, ...quickSort(great)];
    }

    // Only change code above this line
}


console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));