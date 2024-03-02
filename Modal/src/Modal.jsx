import React, { useState } from 'react'

const Modal = () => {

 const [modal , setModal]= useState(false)


   

  return (

    <div className='main'>
        <div>
            <h1>Modal</h1>
            <button onClick={()=>setModal(true)}>Show Modal</button>
        </div>

        <div >

             {
                modal? <div className='box'>
                

                <h2>Modal Demo</h2> 
                <button onClick={()=>setModal(false) }>Close Demo</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt consequuntur sed blanditiis aut. Expedita dolorem consequuntur ab cumque, eum nisi vero quod nemo. Fuga quasi modi eligendi sint earum laborum, sed placeat est, veniam eos cum architecto aliquid exercitationem sit obcaecati sequi fugit fugiat. Iusto, ratione mollitia. Adipisci, commodi!</p>

          </div> :
                     null
             }

            
             
        </div>
    </div>

  )
}

export default Modal