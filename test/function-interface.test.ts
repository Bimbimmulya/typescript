import { AddFunction } from '../src/function-interface'

describe('This Function Interface', () => {
  it('Support Function Interface', () => {
    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2
    }
    expect(add(2, 2)).toBe(4)
    // console.info(add(1, 3))
  })

  it('Support Function Interface', () => {
    //  Implementasi dari Interface di JavaScript sebenarnya adalah sebuah object
    // Seperti yang kita tahu, di JavaScript, kita bisa menambahkan function sebagai attribute di object
    // Hal ini juga bisa kita lakukan di Interface

    interface Person {
      name: string,
      sayHallo(name: string): string;
    }

    const person: Person = {
      name: 'Bimbim',
      sayHallo: function (name: string) : string {
        return `Hello ${name}, my name is ${this.name}`;
      }
    }

    console.info(person.sayHallo('Alika'))
  })
})