export enum TypesProduct {
  GET_PRODUCTS = "GET_PRODUCTS",
}

export interface ItemProduct {
  id: number
  image: string
  description: string
  title: string
  price: string
}

export interface arrayProductList {
  aa: boolean
}

export interface ReducerProduct {
  product: arrayProductList
}
