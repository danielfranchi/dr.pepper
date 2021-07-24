export enum TypesUser {
  GET_USER = "GET_USER",
}

export interface ItemUser {
  email: string
  password: string
  name: string
  role: string
  id: number
}

export interface arrayUsertList {
  aa: boolean
}

export interface ReducerUser {
  user: arrayUsertList
}
