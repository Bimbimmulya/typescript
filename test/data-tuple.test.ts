describe('Data tuple', function() {
  it('Should support data tuple', function() {

    const person : readonly [string, string, number] = ['Bimbim Mulya Krismon', 'Merried', 26];

    console.info(person);

    //Tuple adalah tipe data Array, yang panjang array dan juga tipe data di tiap index sudah ditentukan
    //Pada kasus tuple bersifat read only (tidak bisa diubah), kita bisa tambahkan kata kunci readonly
  })
})