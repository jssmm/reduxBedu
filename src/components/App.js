import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import Usuarios from './Usuarios'

const Tareas = () => <div className='margen'>Tareas owo</div>

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path='/' element={<Usuarios />} />
        <Route exact path='/tareas' element={Tareas()} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
