import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NewReduxCounter = ({ initialValue }) => {
  const count = useSelector((state) => state.counter)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'SET_COUNTER', payload: initialValue || 0 })
    dispatch({ type: 'SET_USER', payload: { name: 'Rizky' } })
  }, [dispatch, initialValue])

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>

      <br />

      <div>User: {user ? user.name : null}</div>

      <button onClick={() => dispatch({ type: 'SET_USER' })}>Reset User</button>
    </>
  )
}

NewReduxCounter.propTypes = {
  initialValue: PropTypes.number
}

export default NewReduxCounter
