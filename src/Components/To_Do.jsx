import React, { useEffect, useState } from 'react';
import '../styles/To_Do.css';
import { getData, postData } from '../services/llamados';

function To_Do() {

  const [inputValue, setInputValue] = useState("");
  const [recargar,setRecargar] = useState(false)
  // Estado para la lista de tareas (HomeW)
  const [HomeW, setHomeW] = useState([]);

  useEffect(()=>{
    async function traerTareas() {
       const datos = await getData("Tareas")
       setHomeW(datos)
    }
    traerTareas()
  },[recargar])



  async function agregarTarea() {
     if (!inputValue.trim()) {
       alert("¡Por favor, ingresa una tarea!");
       return;
     }  
      const nuevaTarea = {
        "Tarea":inputValue,
        "eliminada":false
      }

      await postData(nuevaTarea,"Tareas")
      setRecargar(!recargar)
  }

  function eliminar(id) {
    console.log(id)
    const nuevasTareas = HomeW.filter((tarea) => tarea.id !== id);
  setHomeW(nuevasTareas);
  }

  return (
    <div>
      <div className="container">
        <h1 className="h1s">To-Do list</h1>
        <input
          className="btn"
          type="text"
          id="input"
          placeholder="Homework"
          value={inputValue}
          onChange={(evento)=>setInputValue(evento.target.value)}       
        />
        <button className="btn" id="btn" onClick={agregarTarea}>
          Asignar
        </button>
      </div>

      <div className="container2">
        <h1>Tareas</h1>
        <ul>
          {HomeW.map((tarea, index) => (
            <li key={index}>
              <strong>Tarea:</strong> {tarea.Tarea}
              <button onClick={()=>eliminar (tarea.id)}>Eliminar</button>
              <button>Editar</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="container3">
        <h1>Tareas Completadas</h1>
        <ul id="container3">


        </ul>

      </div>

      <div className="container4">
        <h1>Tareas borradas</h1>
        <ul id="container4"></ul>
      </div>
    </div>
  );
}

export default To_Do;