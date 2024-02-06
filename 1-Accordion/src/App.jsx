import React, { useState } from 'react'
import data from '../components/data'


const App = () => {

  const [selected, setSelected]= useState(null)

  

  function handleSingleClick(currentId){
         setSelected (currentId === selected ? null : currentId)
  }

  return (
    <div className='wrapper'>

      
      <div className='accordion'>

         {
         data && data.length > 0 ?    
         
             data.map(dataitem => <div className='item'>
                    
                     <div onClick={()=>handleSingleClick(dataitem.id)} className='title'>
                        <h3>{dataitem.question}</h3>
                        <span>+</span>
                     </div>

                     {selected=== dataitem.id ? <div className='content'> {dataitem.answer}</div>  :null}

               </div>)
             
         : <div>No Data present</div>
        
        }

      </div>

    </div>
  )
}

export default App