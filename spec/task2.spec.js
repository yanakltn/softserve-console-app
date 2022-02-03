const tasks = require('../task2/task2')

describe('getDoubleSum', () => {
  it('should handle empty array', () => {
    const expected = 0
    const input = []

    const actual = tasks.getDoubleSum(input)
    expect(actual).toEqual(expected)
  })

  it('should handle negative first number case', () => {
    const expected = 0
    const input = [-5, 4, 5, 6]

    const actual = tasks.getDoubleSum(input)
    expect(actual).toEqual(expected)
  })

  it('should handle negative second number case', () => {
    const expected = 8
    const input = [8, -5, 5, 7]

    const actual = tasks.getDoubleSum(input)
    expect(actual).toEqual(expected)
  })

  it('should handle negative third number case', () => {
    const expected = 6
    const input = [2, 4, -5, 7]

    const actual = tasks.getDoubleSum(input)
    expect(actual).toEqual(expected)
  })
})
