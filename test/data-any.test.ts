describe('Data type Any', function() {
  it('Should support data type Any', function() {

    const person : any = {
      id: 1,
      name: 'Bimbim Mulya Krismon',
      age: 30,
    }

    person.name = 'Bimbimmulya';
    person.address = 'JL. Verina X Graha Raya Blok J No 28'
    //bisa melakukan perubahan data dan menambah data karena data type nya any, akan tetapi disarankan tidak terlalu sering menggunakan data type any
    console.info(person)
  })
})