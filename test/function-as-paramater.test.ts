// Sama seperti di JavaScript, di TypeScript juga kita bisa gunakan Function sebagai parameter
// Hal ini sudah sering kita lakukan, biasanya ketika memanggil function yang membutuhkan callback function lainnya
// Pada TypeScript parameter yang berupa function, perlu kita beri tahu bahwa parameter tersebut adalah function
// Kita bisa gunakan Function Interface, atau bisa langsung sebutkan pada parameter nya, jumlah parameter dan return value function yang dibutuhkan


describe('This function as parameter', () => {
  it('Should support function as paramater', () => {
    // function sebagai paramater
    const SayHello = (name: string, filter: (name: string) => string) => {
      console.info(`Hello ${filter(name)}, <-- 1`)
      return `Hello ${filter(name)}`;
    };

    const upperCase = (name: string) : string => {
      console.info(name.toUpperCase(), '<--- 2')
      return name.toUpperCase()
    }

    expect(SayHello('Eko', upperCase)).toBe('Hello EKO');
  })

  it('Should support annymous function', () => {
    // function annymous
    const SayHello = (name: string, filter: (name: string) => string) => {
      console.info(`Hello ${filter(name)}, <--- 1`)
      return `Hello ${filter(name)}`
    }

    expect(SayHello('Bimbim', (name:string) : string => {
      console.info(name.toUpperCase(), '<---- 2')
      return name.toUpperCase()
    })).toBe('Hello BIMBIM')
  })

  it('Should support arrow function', () => {
    const SayHello = (name:string, filter: (name:string) => string) => {
      return (`Hello ${name.toUpperCase()}`)
    }

    expect(SayHello('Eko', (name: string) : string => {
      return name.toUpperCase()})).toBe('Hello EKO')
  })
})