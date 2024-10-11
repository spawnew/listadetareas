import React, { useState } from 'react'
import Newtarea from './Newtarea'
const Tarea = () => {
 

 const [listaTarea,setlista]=useState([])
const borrar=(index)=>{
  const nuevasTareas = listaTarea.filter((_, i) => i !== index);
    setlista(nuevasTareas);
}
 const setear = (input)=>{
   setlista([...listaTarea,input])
 }
 
 
    return (

    <div><h1>Lista de tareas </h1>
   {listaTarea.map((tareas, index)=>{
     
     return <div>
      <h1>{tareas}</h1>
    
      <button onClick={()=>borrar(index)}>borrar</button>
    </div>
   })}
  
    
    <Newtarea setear={setear}/>
    </div>
 



)
}

export default Tarea