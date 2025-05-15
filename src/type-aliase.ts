export type ID = string | number //type alias with type union

export type Category = {
  id: ID,
  name: string,
  description? : string // memberikan tanda tanya artinya object tersebut optional
}

export type Product = {
  id: ID,
  name: string,
  price: number,
  category: Category
  description? : string // memberikan tanda tanya artinya object tersebut optional

}