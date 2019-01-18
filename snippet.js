function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
  // return arr instanceof Array
  // return arr.constructor === Array
}

function isString(str) {
  return typeof str === 'string'
}

// flat multidimensional arrays
function flatArr(arr) {
  if (isArray(arr)) {
    return arr.flat(Infinity)
  }
  return arr
}

function arrToObj(arr) {
  return Object.assign({}, arr)
  // return {...arr}
}

// remove the duplicate data in array/string
function rmDuplicate(data) {
  if (isArray(data)) {
    return [...new Set(data)]
  } else if (isString(data)) {
    return [...new Set(data)].join('')
  }
  return data
}





