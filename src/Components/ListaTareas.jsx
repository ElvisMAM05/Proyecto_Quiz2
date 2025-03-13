import { getData, patchData } from "../services/llamados";
import Swal from 'sweetalert2';

const ListaTareas = ({ lista, btnCompletas, btnBorradas, todosBotones,estadoEliminada }) => {
  async function eliminar(id, index) {
    // const tareasAEliminar = await getData("Tareas");
    const infoEliminada = { 
      eliminada: estadoEliminada
    };
    await patchData(infoEliminada, "Tareas", id);
  }

 function mostrarAlerta(id) {
    Swal.fire({
      title: "<strong>EDITE SU TAREA AQUÍ</strong>",
      icon: "info",
      html: `
        <input type="text" id="inputEditar" placeholder="EDITAR TAREA" />
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Hecho!
      `
      ,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonColor: '#d33', 
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i> Cancelar
      `,
      cancelButtonAriaLabel: "Thumbs down"
    }).then(async(result) => {
      if (result.isConfirmed) {
        let inputEditar = document.getElementById("inputEditar")
        const actualizacionTarea = {
          Tarea: inputEditar.value
       }
        await patchData(actualizacionTarea,"Tareas",id)
      }
    })
   }
  
  
  
  
  
  
  

  return (
    <>
      {lista.map((tarea, index) => (
        <li key={index}>
          {btnCompletas === false && <strong>Tarea: {tarea.Tarea}</strong>}
          {todosBotones === true && (
            <>
              <strong>Tarea: {tarea.Tarea}</strong>
              <button onClick={() => eliminar(tarea.id, index,estadoEliminada)}>Eliminar</button>
              <button onClick={()=>mostrarAlerta(tarea.id)}>Editar</button>
            </>
          )}
          {
          btnBorradas === true && 
          <>
          <strong>Tarea: {tarea.Tarea}</strong>
          <button onClick={() => eliminar(tarea.id, index,estadoEliminada)}>Eliminar</button>
          </>
          }
        </li>
      ))}
    </>
  );
};

export default ListaTareas;