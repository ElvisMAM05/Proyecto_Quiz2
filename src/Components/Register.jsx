import { useState } from 'react'
import '../styles/Register.css';
import { postData } from '../services/llamados';

function Register() {   
  const [nombre,setNombre] = useState("")
  const [correo,setCorreo] = useState("")
  const [clave,setClave] = useState("")

  async function guardarDatos() {
     const usuario ={
      nombre:nombre,
      correo:correo,
      clave:clave
     }
     await postData(usuario,"usuarios")
  }

  return (
    <div>
    <div className='Login'>  

        <h2>Registro</h2>
        <label class="input">Nombre completo:</label>
        <input  type="text" placeholder="Name" className="input" onChange={(e)=>setNombre(e.target.value)}/>
        
        <label class="input">Correo:</label>
        <input  type="email" placeholder="email" className="input" onChange={(e)=>setCorreo(e.target.value)}/>

        <label class="input">Contraseña:</label> 
        <input  type="password" placeholder="password"  className="input" onChange={(e)=>setClave(e.target.value)}/>

    <button onClick={guardarDatos} >Ingresar</button>
    </div>
    </div>
  )
}

export default Register
