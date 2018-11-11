
const isNumber = testedItem => typeof testedItem === 'number'
const isArray = testedItem => Array.isArray(testedItem)

const flattenArrayReducer = (sumArr, nextItem) => {
  if (isNumber(nextItem)) {
   return [...sumArr, nextItem]
  } else if (isArray(nextItem)) {
    const nestedArrrayFlatten = flattenArray(nextItem)
    return [...sumArr, ...nestedArrrayFlatten]
  } else {
    throw 'Wrong param: not a number or array is passed'
  }
}

const flattenArray = (array) => {
  if (!isArray(array)) throw 'Wrong param: not an array'

  return array.reduce(flattenArrayReducer, [])
}

module.exports = flattenArray