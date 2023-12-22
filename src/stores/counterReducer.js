import counterActions from '../actions/counterActions'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case counterActions.setCounter:
      return action.payload || 0
    case counterActions.increment:
      return state + (action.payload || 1)
    case counterActions.decrement:
      return state - (action.payload || 1)
    default:
      return state
  }
}

export default counterReducer
