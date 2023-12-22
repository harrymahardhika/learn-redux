import { useDispatch, useSelector } from 'react-redux'
import { setCounter, increment, decrement } from './stores/counterSlice.js'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

const RTKCounter = ({ initialValue }) => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCounter(initialValue))
  }, [dispatch, initialValue])

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(setCounter(initialValue))}>Reset</button>
    </>
  )
}

RTKCounter.propTypes = {
  initialValue: PropTypes.number.isRequired
}
export default RTKCounter
