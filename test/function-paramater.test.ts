// Sama seperti di JavaScript, function di TypeScript bisa memiliki banyak parameter, rest parameter (variable argument) sampai default value
// Fitur yang berbeda dengan JavaScript adalah, di TypeScript setiap parameter wajib diisi, kecuali kita tentukan sebagai optional menggunakan ? (tanda tanya)

describe('This function paramater', () => {
  it('Should support function paramater', () => {
    const sayHallo = (name: string = 'Guest'): string => {
      console.info(`Hello ${name}`)
      return `Hello ${name}`;
    }

    expect(sayHallo('Bimbim')).toBe('Hello Bimbim'); // return parameter argument
    expect(sayHallo()).toBe('Hello Guest') // return default value = Guest
  })

  it('Should suppport function rest paramater', () => {
    // Sintaks parameter rest memungkinkan suatu fungsi menerima argumen dalam jumlah tak terbatas sebagai array
    const Sum = (...values: number[]) : number => {
        let total = 0;
        for (const value of values) {
          total += value
        }

        return total
    }
    expect(Sum(1, 2, 3, 4, 5)).toBe(15)
  })

  it('Should support function paramater optional', () => {
    const SayHello = (firstName: string, lastName?: string) : string => {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`
      } else {
        return `Hello ${firstName}`
      }
    }
    expect(SayHello('Bimbim')).toBe('Hello Bimbim');
    expect(SayHello('Bimbim', 'Mulya')).toBe('Hello Bimbim Mulya')
  })
})