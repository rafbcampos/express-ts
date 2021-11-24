import { isEmpty } from '../../src/utils/isEmpty'

describe('isEmpty', () => {
  it('returns true for an empty object', () => {
    expect(isEmpty({})).toBeTruthy()
  })

  it('returns false for an object containing properties', () => {
    expect(isEmpty({ test: 'test' })).toBeFalsy()
  })
})
