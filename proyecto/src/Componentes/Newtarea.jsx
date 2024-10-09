import React, { useState } from 'react'

const Newtarea = () => {
 
 const [input,setinput]=useState("")
 
 const agregar=(e)=>{
    setinput(e.input.target.value)
 }
   const submit=(e)=>{
    e.preventDefault(); 
    setinput(e.input.target.value)
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