import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Marge from './Component/MargeAll/Marge'
import Login from './Component/Login/Login'
import Recover from './Component/Login/Recover'
import SignUp from './Component/Login/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<Marge />}></Route>
    <Route path='/logIn' element={<Login />}></Route>
    <Route path='/recover' element={<Recover />}></Route>
    <Route path='/signup' element={<SignUp/>} > </Route>
    </Routes>
    </>
  )
}

export default App
