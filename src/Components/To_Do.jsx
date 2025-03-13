import React, { useEffect, useState } from 'react';
import '../styles/To_Do.css';
import { getData, postData } from '../services/llamados';
import ListaTareas from './ListaTareas';

function To_Do() {
  const [inputValue, setInputValue] = useState("");
  const [recargar, setRecargar] = useState(false);
  const [HomeW, setHomeW] = useState([]);
  const [tareasEliminadas, setTareasEliminadas] = useState([]);

  useEffect(() => {
    async function traerTareasNoEliminadas() {
     
      const datos = await getData("Tareas");
      const filtroTareas = datos.filter(tarea => tarea.eliminada === false);
      const filtroTareasEliminadas = datos.filter(tarea => tarea.eliminada === true);
      setHomeW(filtroTareas);
      setTareasEliminadas(filtroTareasEliminadas);
    
    }

    traerTareasNoEliminadas();
  }, [HomeW]);

  async function agregarTarea() {
    if (!inputValue.trim()) {
      alert("¡Por favor, ingresa una tarea!");
      return;
      
    }
 


    const nuevaTarea = {
      "Tarea": inputValue,
      "eliminada": false
    }
    await postData(nuevaTarea, "Tareas");
  setInputValue()

    setRecargar(!recargar);
  }
 



  return (

   
    <div>

<div className="bg"></div>
      <div className="container">
        <h1 className="h1s">To-Do list</h1>
        <input className="btn" type="text" placeholder="Homework" value={inputValue}
          onChange={(evento) => setInputValue(evento.target.value)}
        />
        <button className="btn" id="btn" onClick={agregarTarea}>
          Asignar
        </button>
      </div>

      <div className="container2">
        <h1>Tareas</h1>
        <ol>
          <ListaTareas lista={HomeW} todosBotones={true} estadoEliminada={true} />
        </ol>
      </div>

      <div className="container3">
        <h1>Tareas Completadas</h1>
        <ul>
          {/* Aquí puedes agregar la lógica para las tareas completadas si lo deseas */}
        </ul>
      </div>

      <div className="container4">
  <h1>Tareas borradas</h1>
  <ul id="container4">
    <ListaTareas lista={tareasEliminadas} btnBorradas={true}  estadoEliminada={false}/>
  </ul>
</div>
    </div>
  );
}

export default To_Do;