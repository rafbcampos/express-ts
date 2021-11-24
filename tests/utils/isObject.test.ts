import { isObject } from '../../src/utils/isObject'

describe('isObject', () => {
  it('returns true for an object', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject({ test: 'test' })).toBeTruthy()
  })

  it('returns false for an Array', () => {
    expect(isObject([])).toBeFalsy()
  })

  it('returns true for null', () => {
    expect(isObject(null)).toBeFalsy()
  })

  it('returns true for string', () => {
    expect(isObject('test')).toBeFalsy()
  })
})
