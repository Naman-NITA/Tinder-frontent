import React, { Profiler } from 'react'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './Body'
import Login from './Login'
import Profile from './Profile'

const App = () => {
  return (
    <>
      <BrowserRouter basename='/'>
       <Routes>
        <Route path='/' element={<Body/>} >
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        </Route>
       </Routes>
      </BrowserRouter>

  

    </>
  )
}

export default App
