import React from 'react'

import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LoginP from '../pages/LoginP'
import RegisterP from '../pages/RegisterP'
import HomeP from '../pages/HomeP'
import To_DoP from '../pages/To_DoP'

function Routing() {
  return (
    
    <div>
        <Router>
            <Routes>

                <Route path="/LoginP" element={<LoginP/>}/>
                <Route path="/RegisterP" element={<RegisterP/>}/>
                <Route path='/Home' element={<HomeP/>}/>
                <Route path='/Todo' element={<To_DoP/>}/>


            </Routes>



        </Router>




    </div>
  )
}

export default Routing