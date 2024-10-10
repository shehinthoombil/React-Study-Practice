import React, { useEffect, useState } from 'react'

function StartStopTimer() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true)
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
      setIntervalId(id)
    }
  }
  const stopTimer = () => {
    setIsRunning(false)
    clearInterval(intervalId)
  }
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    }
  }, [intervalId])

  return (
    <div>
      <button onClick={startTimer} disabled={isRunning}> Start</button>
      <p> Timer:{time} seconds</p>
      <button onClick={stopTimer} disabled={!isRunning}> Stop</button>
    </div>
  )
}

export default StartStopTimer

