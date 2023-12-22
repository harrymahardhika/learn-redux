const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload || { name: null, email: null }
    default:
      return state
  }
}

export default userReducer
