import React, { useState } from 'react'

const App = () => {

  const [countState, setCountState] = useState({
    count: 0,
  })

  countState.handleIncrement = () => {
    setCountState({ ...countState, count: countState.count + 1 })
  }


  return (
    <>
      <h1>Count: {countState.count}</h1>
      <button onClick={countState.handleIncrement}>+</button>
    </>
  )
}

export default App
