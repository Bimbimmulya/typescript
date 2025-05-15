// Saat kita menggunakan ? pada variabel atau parameter, secara otomatis kita bisa mengirim data undefined
// Tapi kadang-kadang, ada kasus kita juga ingin mengirim data null, pada kasus ini kita juga bisa menggunakan tipe data null

describe('This Null or Undefined', () => { 
  it('Should type null or undefined', () => {
   const sayHallo = (name?: string | null) => {
      if (name) {
        console.info(`Hello ${name}`)
      } else {
        console.info('Hello')
      }
    }
    sayHallo('Bimbim')
    const name: string | undefined = undefined
    console.info(name)
  })
 })