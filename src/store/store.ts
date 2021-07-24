import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerProduct from './ducks/reducerProducts/reducer'
import reducerUser from './ducks/reducerUser/reducer'

const createRootReducer = () => combineReducers({
  product: reducerProduct,
  user: reducerUser
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }