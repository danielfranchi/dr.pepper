import { action } from 'typesafe-actions'
import { TypesUser } from './types'

export const getUser = (payload: boolean) => action(TypesUser.GET_USER, payload)
