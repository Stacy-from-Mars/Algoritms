function updateInventory(arr1, arr2) {
    for (let newItem of arr2) {
        let found = false
        for (let oldItem of arr1) {
            if (newItem[1] === oldItem[1]) {
                oldItem[0] += newItem[0]
                found = true
                break
            }
        }
        if (!found) {
            arr1.push([...newItem])
        }
    }
    return arr1.sort((a, b) => a[1] > b[1] ? 1 : -1);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));