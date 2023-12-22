const actionTypes = {
  setCounter: 'SET_COUNTER',
  increment: 'INCREMENT',
  decrement: 'DECREMENT'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setCounter:
      return action.payload

    case actionTypes.increment:
      if (action.payload) {
        return state + action.payload
      }
      return ++state

    case actionTypes.decrement:
      if (state > 0) {
        if (action.payload) {
          return state - action.payload
        }

        return --state
      }
      return state

    default:
      return state
  }
}

export { reducer, actionTypes }
