function sym() {
  const args = []
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
  }
  const diff = (array1, array2) => {
    const result = []
    array1.forEach(item => {
      if (array2.indexOf(item) < 0 && result.indexOf(item) < 0) {
      result.push(item)
      }
    })
    array2.forEach(item => {
      if (array1.indexOf(item) < 0 && result.indexOf(item) < 0) {
      result.push(item)
      }
    })
    return result
  }
  return args.reduce(diff)
}

  console.log(sym([1, 2, 3], [5, 2, 1, 4]));