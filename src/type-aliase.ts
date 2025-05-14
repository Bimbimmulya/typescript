export type ID = string | number //type alias with type union

export type Category = {
  id: ID,
  name: string,
}

export type Product = {
  id: ID,
  name: string,
  price: number,
  category: Category

}