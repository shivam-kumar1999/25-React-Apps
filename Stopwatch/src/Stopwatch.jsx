import React, { useRef, useState } from 'react'

const Stopwatch = () => {
 
   const [time, setTime]= useState(null)
   const [now , setNow]= useState(null)

   const intervalRef= useRef(null)

  function handleStart(){
    setTime(Date.now());
    setNow(Date.now())

    intervalRef.current= setInterval(()=>{
          setTime(Date.now())
    },10)
  }

  const handleStop=()=>{
    clearInterval(intervalRef.current)
  }

  let timePassed=(time-now)/1000

  return (

    <div className='div'>
         <h1> Stopwatch With React </h1>
          <h2>Stopwatch :{timePassed.toFixed(2)}</h2>

          <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
          </div>
    </div>

  )
}

export default Stopwatch