import { combineReducers, createStore } from 'redux'
import userReducer from './userReducer'
import counterReducer from './counterReducer'
import productReducer from '../reducers/products'

const store = createStore(
  combineReducers({
    counter: counterReducer,
    user: userReducer,
    products: productReducer
  })
)

export default store
