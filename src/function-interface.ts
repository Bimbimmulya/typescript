// Di TypeScript, kita juga bisa membuat deklarasi Function dalam bentuk Interface
// Dengan demikian ketika kita ingin membuat variabel yang berisi function, kita bisa dengan mudah menggunakan interface tersebut

export interface AddFunction {
  (value1: number, value2: number ): number
}