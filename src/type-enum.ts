// TypeScript memiliki tipe data enum, yaitu tipe data yang nilainya sudah pasti
// Tipe data ini tidak dimiliki di JavaScript
// Secara default tipe data enum ini akan dikonversi menjadi string di JavasScript, namun bisa juga dikonversi menjadi number

export enum CustomerType  {
  REGULAR = 'REGULAR',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM'
  // Secara default, enum di TypeScript akan dikonversi menjadi tipe data number
  // Kadang kita ingin ubah dari number menjadi String, kita bisa lakukan hal itu ketika membuat enum nya

}

export type Customer = {
  id: number | string;
  name: string;
  tpye: CustomerType;
}