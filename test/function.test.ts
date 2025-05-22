// Sama seperti di JavaScript, TypeScript juga mendukung pembuatan function
// Cara pembuatan function di TypeScript pun sama dengan di JavaScript
// Salah satu yang membedakan adalah, pada parameter kita perlu menentukan tipe data, dan pada function kita juga perlu menentukan tipe data return value nya
// Pada kasus function tersebut tidak mengembalikan value, kita bisa menggunakan tipe data void, atau tidak perlu menyebutkan sama sekali seperti di JavaScript


describe('This function in typescript', () => {
  it('Should support function in typescript', () => {
    const sayHello = (name: string): string => {
      console.info(`Hello ${name}`)
      return `Hello ${name}`
    }
    sayHello('Bimbim 1')
    expect(sayHello('Bimbim 1')).toBe('Hello Bimbim 1')

    const printHello = (name: string): void => {
      console.info(`Hello ${name}`)
    }

    printHello('Bimbim')
  })
})