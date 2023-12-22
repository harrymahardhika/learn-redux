const actionTypes = {
  setUser: 'SET_USER',
  setUserName: 'SET_USER_NAME'
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.setUser:
      return action.payload

    case actionTypes.setUserName:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}

export { userReducer, actionTypes }
