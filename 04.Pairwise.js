function pairwise(arr, arg) {
    let pair = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg && !pair.includes(i) && !pair.includes(j)) {
                pair.push(i, j)
            }
        }
    }
    return pair.reduce((sum, curr, index) => sum + curr, 0)
}

//     let pair = {}
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (pair[arr[i]]) {
//             sum += i + pair[arr[i]].shift()
//             if (pair[arr[i]].length === 0) {
//                 delete pair[arr[i]]
//             }
//         }
//         else {
//             pair[arg - arr[i]] = pair[arg - arr[i]] || []
//             pair[arg - arr[i]].push(i)
//         }
//     }
//     return sum;
// }

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));