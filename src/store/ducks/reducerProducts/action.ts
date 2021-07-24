import { action } from 'typesafe-actions'
import { TypesProduct } from './types'

export const getProducts = (payload: boolean) => action(TypesProduct.GET_PRODUCTS, payload)
