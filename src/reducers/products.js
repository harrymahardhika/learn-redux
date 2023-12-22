import productActions from '../actions/productActions'

const productReducer = (state = [], action) => {
  switch (action.type) {
    case productActions.setProducts:
      return action.payload || []
    case productActions.addProduct:
      return [...state, action.payload]
    case productActions.removeProduct:
      return state.filter((product) => product.id !== action.payload)
    default:
      return state
  }
}

export default productReducer
