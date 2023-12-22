import { createStore } from 'redux'

const counterReducer = (state = { count: 0 }, action) => {
  action.payload = action.payload || 1

  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload }
    case 'DECREMENT':
      return { count: state.count - action.payload }
    default:
      return state
  }
}

const store = createStore(counterReducer)

const handleStateChange = () => {
  console.log(store.getState())
}

store.subscribe(handleStateChange)

store.dispatch({ type: 'INCREMENT' }) // { count: 1 }
store.dispatch({ type: 'INCREMENT', payload: 2 }) // { count: 3 }
store.dispatch({ type: 'DECREMENT', payload: 1 })
store.dispatch({ type: 'INCREMENT', payload: 1 })

console.log(`Final state: ${JSON.stringify(store.getState())}`)
