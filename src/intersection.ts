// Intersection merupakan cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain tanpa menambah object baru
// Hal ini sangat cocok ketika kita tidak bisa melakukan extends pada Interface
// Kita bisa membuat type dengan menggunakan kata kunci & (dan)


export interface HasName {
  name: string
}

export interface HasId {
  id: string
}

export type Domain = HasName & HasId; // menggabungkan interface tanpa menambahkan object baru