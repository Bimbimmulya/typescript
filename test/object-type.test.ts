// Pada kasus yang sederhana, kadang membuat alias terlalu bertele-tele, kita juga bisa membuat tipe data JavaScript Object secara langsung dengan mendeklarasikan detail type nya ketika membuat  variabel nya
// Hal ini lebih sederhana dibandingkan membuat Type terlebih dahulu
// Tetapi pada kasus yg cukup komplit tetap disarankan menggunakan aliase

describe('This Object Type', function(){
  it('Should support Object Type', function() {

    const person: {id: string | number, name: string, hobbies? : string[]} = { // // memberikan tanda tanya artinya object tersebut optional
      id: 1,
      name: 'Bimbim'
    }

    console.info(person, '<--- person 1')

    person.id = 2;
    person.name = 'Bimbim Mulya Krismon';
    person.hobbies = ['reading', 'learning code',]

    console.info(person, '<-- person 2')
  })
})

// Notes for Type Optional
// Secara default, saat kita membuat attribute di Object atau Type, maka attribute tersebut wajib diisi nilainya
// Namun, kadang-kadang tidak semua attribute itu wajib diisi nilainya
// Pada kasus attribute nya tidak wajib diisi, kita bisa tambahkan tanda ? untuk menandakan bahwa itu adalah optional
