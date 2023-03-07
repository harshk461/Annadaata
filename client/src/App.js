import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import Register from './pages/Register/register'
import Login from './pages/Login/login'
import ForgotPassword from './components/ForgotPassword/forgot'
import Blog from './pages/Blog/blog'
import Contact from './components/Contact/contact'
import Prediction from './pages/Prediction/prediction'
import DroneForm from './pages/DroneForm/droneform'

export default function App() {
  useEffect(() => {
    document.title = "Annadaata";
  }, [])
  return (
    < BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/predict' element={<Prediction />} />
        <Route path='/drone-form' element={<DroneForm />} />
      </Routes>
    </BrowserRouter >
  )
}
