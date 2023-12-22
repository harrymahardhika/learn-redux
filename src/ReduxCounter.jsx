import { useDispatch, useSelector } from 'react-redux'

import PropTypes from 'prop-types'
import { useEffect } from 'react'

const ReduxCounter = ({ initialValue }) => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'SET_COUNTER', payload: initialValue })
  }, [dispatch, initialValue])

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'SET_COUNTER', payload: initialValue })}>
        Reset
      </button>
    </>
  )
}

ReduxCounter.propTypes = {
  initialValue: PropTypes.number.isRequired
}

export default ReduxCounter
