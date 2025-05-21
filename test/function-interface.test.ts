import { AddFunction } from '../src/function-interface'

describe('This Function Interface', () => {
  it('Support Function Interface', () => {
    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2
    }
    expect(add(2, 2)).toBe(4)
    console.info(add(1, 3))
  })
})