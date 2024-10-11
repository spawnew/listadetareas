import React, { useState } from 'react'

const Newtarea = ({setear}) => {
 
 const [input,setinput]=useState("")
 
 const agregar=(e)=>{
    setinput(e.target.value)
 }
   const submit=(e)=>{
    e.preventDefault(); 
    setear(input)
    setinput("")
   }
 

 
 return (
    <div>
    <form onSubmit={submit}>
    
   
   
    <input type="text"
    placeholder='ingrese una tarea'
    value={input}
    onChange={agregar} />

</form>


    </div>
  )
}

export default Newtarea