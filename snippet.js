function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
  // return arr instanceof Array
  // return arr.constructor === Array
}

// flat multidimensional arrays
function flatArr(arr) {
  if (isArray(arr)) {
    return arr.flatMap(a => {
      if (isArray(arr)) {
        return flatArr(a)
      }
      return a
    })
  }
  return arr
}

function arrToObj(arr) {
  return Object.assign({}, arr)
  // return {...arr}
}

// remove the duplicate data in array
function rmDuplicate(arr) {
  return Array.from(new Set(arr))
}



