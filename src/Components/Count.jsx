import React from 'react'


function Count() {
 
    let valor=0
function CountPlus(){

    console.log("Aumentando el contador")
    valor +=1

}


  return (

    <div>
        <p>El contador está en {valor}</p>
        <button onClick={CountPlus}> Aumentar</button>


    </div>
  )

}

export default Count