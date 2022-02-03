const tasks = require('../task1/task1')

describe('increaseNumber', () => {
  it('should add ones from left and right', () => {
    const expected = 151
    const input = 5

    const actual = tasks.increaseNumber(input)
    expect(actual).toEqual(expected)
  })

  it('should pass set of tests', () => {
    const input = [
      10,
      103930,
      100288,
      2978,
      0,
      20480,
      460,
      5
    ]

    const expected = [
      1101,
      11039301,
      11002881,
      129781,
      101,
      1204801,
      14601,
      151
    ]

    input.forEach((value, index) => {
      const expectedResult = expected[index]
      const actual = tasks.increaseNumber(value)

      expect(expectedResult).toEqual(actual)
    })
  })
})