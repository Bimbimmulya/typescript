// Function Overloading adalah kemampuan untuk membuat Function dengan nama yang sama, namun dengan parameter input yang berbeda
// Di JavaScript, membuat satu Function dengan input data yang berbeda dan output yang bisa menghasil data yang berbeda sudah biasa dilakukan
// Namun hal ini kadang bisa membuat sebuah Function tidak aman, karena bisa menghasilkan berbeda-beda tipe data.
// TypeScript memberikan kemampuan Function Overloading, agar pembuatan Function seperti ini lebih aman dilakukan

describe('This function overloading', () => {
  it('Should support function overloading', () => {
    function callMe (value: string): string;
    function callMe (value: number): number;
    function callMe (value: any): any {
      if (typeof value === 'string') {
        console.info(value.toLocaleUpperCase())
        return value.toLocaleUpperCase()
      } else if(typeof value === 'number') {
        console.info(value * 10)
        return value * 10
      } else {
        console.info('sokinnnnn')
      }
    }

    expect(callMe('selamat datang')).toBe('SELAMAT DATANG');
    expect(callMe(10)).toBe(100);
  })
})
 