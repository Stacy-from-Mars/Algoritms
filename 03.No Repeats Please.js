function permAlone(str) {
    const regex = /(.)\1+/
    const arr = str.split("")
    const permut = []
    let temp
    if (str.match(regex) !== null && str.match(regex)[0] === str) {
        return 0
    }
    const swap = (index1, index2) => {
        temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
    }
    const generate = (int) => {
        if (int === 1) {
            permut.push(arr.join(""))
        } else {
            for (let i = 0; i != int; i++) {
                generate(int - 1)
                swap(int % 2 ? 0 : i, int - 1)
            }
        }
    }
    generate(arr.length)

    const filtered = permut.filter(function (string) {
        return !string.match(regex)
    })
    return filtered.length
}

console.log(permAlone('aab'));