// Interface bisa melanjutkan (extends) ke Interface lain
// Secara otomatis attribute Interface yang dilanjutkan dimiliki juga oleh interface tersebut
// Ini membuat kita lebih mudah ketika membuat tipe data yang kompleks

export interface Employee {
  id: string,
  name: string,
  division: string
}

export interface Manager extends Employee {
  numberOfEmployee: number
}
