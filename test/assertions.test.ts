import { Person } from '../src/assertions'

describe('This assertions', () => {
  it('Should support assertions', () => {
    const person: any = {
      name: 'Eko',
      age: 30,
    }

    const person2: Person = person as Person;
    console.info(person2)
    // 1. person2 type nya Person
    // 2. variable person di konversi menjadi type Person
  })
})