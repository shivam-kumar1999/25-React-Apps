import { useState } from "react"


function App() {

  const [input, setInput]=useState('')
  const [todos, setTodos]= useState([])
  

  function add(){
    if(input.trim !==''){
          setTodos([...todos, input])
          setInput('')
    }
  }


  function remove(index){
       const updatedTodo= todos.filter((_, i)=> i !==index)
       setTodos(updatedTodo)
  }


  return (
    <div>

      <input type="text" onChange={(e)=>setInput(e.target.value)} />

      <button onClick={add}>Add</button>

       <ul>
         
            {todos.map((todo, index)=>(
                 <li key={index}>
                      {todo}   <button onClick={()=>remove(index)}>remove</button>

                 </li>
                 
            ))}
        
       </ul>


    </div>
  )
}

export default App
