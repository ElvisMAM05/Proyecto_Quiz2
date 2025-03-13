import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import React from 'react'
import  '../styles/Login.css'
import { getData } from '../services/llamados';
  
function Login() {

const [clave,setClave] = useState("")
const [nombre,setNombre] = useState("")
const [error,setError]= useState("")
const navigate= useNavigate()


async function LoginE(){
  const usuario ={
    nombre:nombre,
    clave:clave
   }
  
try{
  /*
   Dentro de la función hago el llamado del getData, esto para que SOLO y cuando se toque el botón se haga
   la petición de datos. En lugar de llamarse al inicio y al recargar la pág como se haría con un useEffect
  */
  const response= await getData("usuarios")
    
  const Found = response.find((CorretUser) => CorretUser.nombre===usuario.nombre && CorretUser.clave===usuario.clave)

    if(Found){
      console.log("Bienvenido", Found )

      navigate("/Todo")
    }else{
      setError("Contraseña incorrecta")
    }
} catch(err){
    setError("Ocurrió un error")
    console.error(err)
  }
  

}


  return (
    <div>


    <div className="Login">
    <h1 className="inicia">Inicia Sesión</h1>

        <p className="input">UserName:</p>
        <input id="user_Name" type="text" placeholder="User_Name" onChange={(e)=>setNombre(e.target.value)} className='ai'/>

        <p className="input">Password:</p>
        <input id="password" type="password" placeholder="Password" onChange={(e)=>setClave(e.target.value)} />

        {error && <p className="error">{error}</p>}

        <button id="send" onClick={LoginE}>Ingresar</button>

        <p></p>

    </div>

    </div>
  )
}

export default Login