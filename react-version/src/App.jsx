import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import SignUp from './pages/auth/SignUp'
import LogIn from './pages/auth/LogIn'
import Dashboard from './pages/Dashboard'

const App = () => {
  const isAuthenticated = !!localStorage.getItem("ticketapp_session")
  console.log(isAuthenticated)
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/auth/signup" element={<SignUp/>}/>
      <Route path="/auth/login" element={<LogIn/>}/>
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard/> : <LogIn/> }/>
      
    </Routes>
  )
}

export default App