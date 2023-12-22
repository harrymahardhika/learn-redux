import PropTypes from 'prop-types'
import { useReducer } from 'react'
import { actionTypes, reducer } from './reducers/counter'

const Counter = ({ initialValue }) => {
  const [counter, dispatch] = useReducer(reducer, initialValue)

  return (
    <>
      <div>{counter}</div>
      <button
        onClick={() => dispatch({ type: actionTypes.decrement, payload: 10 })}
      >
        -10
      </button>
      <button onClick={() => dispatch({ type: actionTypes.decrement })}>
        -
      </button>
      <button onClick={() => dispatch({ type: actionTypes.increment })}>
        +
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.increment, payload: 10 })}
      >
        + 10
      </button>
      <button
        onClick={() =>
          dispatch({ type: actionTypes.setCounter, payload: initialValue })
        }
      >
        Reset
      </button>
    </>
  )
}

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired
}

export default Counter
