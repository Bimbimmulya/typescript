//JavaScript sebenarnya bisa menyimpan berbagai jenis tipe data di variabel yang sama
//Namun di TypeScript, hal itu dilarang karena praktek yang buruk
//Pada kasus jika kita ingin membuat variabel yang bisa berubah bentuk tipe data, kita bisa memberi tahunya menggunakan union type
//Secara otomatis TypeScript akan membolehkan kita mengubah tipe data, namun sesuai yang sudah ditentukan di union type nya

//union type
let sample: string | number | boolean = "Bimbim"

sample = 'bismillah'
sample = 2
sample = false
//end union type

//testing union type
describe('Union code', function() {
  it("should union code", function() {
    function sample(value: string | number | boolean) {
      value = 'bismillah'
      value = 2 + 6
      value = false
      console.info(value)
      expect(value).toBe('Jancuk');
      expect(value).toBe(8);
      expect(value).toBe(false)
    }

    function usingTypeOf(data: string | number | boolean) {
      //note: 
      //1. Saat kita membuat Union Type, kita perlu berhati-hati ketika memanggil method terhadap variabel tersebut
      // 2. Hal ini karena tipe datanya bisa berubah, oleh karena itu ada baiknya kita melakukan pengecekan tipe data terlebih dahulu menggunakan typeof
      if (typeof data === 'string') {
        return data.toUpperCase()
      } else if (typeof data === 'number') {
        return data + 2
      } else {
        return !data;
      }
    }
    expect(usingTypeOf(100)).toBe(102);
    expect(usingTypeOf('WElcOmeee')).toBe('WELCOMEEE');
    expect(usingTypeOf(true)).toBe(false);
  })
})
//end testing 