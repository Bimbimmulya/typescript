// Pada kasus yang sederhana, kadang membuat alias terlalu bertele-tele, kita juga bisa membuat tipe data JavaScript Object secara langsung dengan mendeklarasikan detail type nya ketika membuat  variabel nya
// Hal ini lebih sederhana dibandingkan membuat Type terlebih dahulu
// Tetapi pada kasus yg cukup komplit tetap disarankan menggunakan aliase

describe('This Object Type', function(){
  it('Should support Object Type', function() {

    const person: {id: string | number, name: string} = {
      id: 1,
      name: 'Bimbim'
    }

    console.info(person)
  })
})