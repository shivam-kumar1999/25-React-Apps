import React, { useState } from 'react'

const App = () => {

    const [bill, setBillValue]=useState(0)

    const [billPercent1 , setBillPercent1]= useState(0)
    const [billPercent2 , setBillPercent2]= useState(0)


     let tip= bill * ((billPercent1 + billPercent2)/2/100)
     
     function handle(){
           setBillValue(0)
          setBillPercent1(0)
          setBillPercent2(0)
     }

  return (

    <div className='box'>
        <label htmlFor="text">How much was the bill?</label>
        <input type="text" id='text' placeholder='Bill value' onChange={(e)=>setBillValue(Number(e.target.value))} />   
         
         <br />
         <br />

         <label htmlFor="id">How did you like the service?</label>
        <select name="" id="id" value={billPercent1} onChange={(e)=> setBillPercent1(Number(e.target.value))}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was Good (10%)</option>
          <option value="20">It was Great (20%)</option>
        </select>

     
      <br /> <br />
        <label htmlFor="id">How did your friend the service?</label>
        <select name="" id="id" value={billPercent2} onChange={(e)=> setBillPercent2(Number(e.target.value)) }>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was Good (10%)</option>
          <option value="20">It was Great (20%)</option>
        </select>



        <div>
            <h2> You pay ${bill + tip} (${bill} + ${tip})</h2>
        </div>
       

        <button  onClick={()=>handle()}>Reset</button>

        

    </div>

  )
}

export default App