import React, { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState()

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
  }, [])

  return (
    <div className='App'>
      <p>{message}</p>
    </div>
  )
}

export default App