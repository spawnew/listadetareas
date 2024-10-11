import React, { useState } from 'react'
import Newtarea from './Newtarea'
import { FiTrash2 } from "react-icons/fi";
import './tareas.css';
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

    <div className='listatarea'><h1>Lista de tareas </h1>
   {listaTarea.map((tareas, index)=>{
     
     return <div className='tareas'>
      <h1>{tareas}</h1>
    
       <button onClick={() => borrar(index)}><FiTrash2 /></button>
    </div>
   })}
  
    
    <Newtarea setear={setear}/>
    </div>
 



)
}

export default Tarea