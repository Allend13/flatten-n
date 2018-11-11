const flatten = require('../flatten')

const exampleArray = [[1,2,[3]],4]
const exampleArrayResult = [1,2,3,4]

const throwErr1 = 'Wrong param: not an array'
const throwErr2 = 'Wrong param: not a number or array is passed'

describe('flatten array of numbers', () => {
  test('flattened [[1,2,[3]],4] should return [1,2,3,4]', () => {
    expect(flatten(exampleArray)).toEqual(exampleArrayResult);
  });

  test('flattened [] should return []', () => {
    expect(flatten([])).toEqual([]);
  });

  test(`if pass not an Array, throw error: "${throwErr1}"`, () => {
    const flattenString = () => flatten('a')
    const flattenObject = () => flatten({})
    expect(flattenString).toThrowError(throwErr1)
    expect(flattenObject).toThrowError(throwErr1)
  });

  test(`if Array includes not a Number|Array, throw error: "${throwErr2}"`, () => {
    const flattenWrongArray = () => flatten([[1,2,["3"]],4])
    expect(flattenWrongArray).toThrowError(throwErr2)
  });
})