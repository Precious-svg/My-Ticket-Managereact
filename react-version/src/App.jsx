import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import SignUp from './pages/auth/SignUp'
import LogIn from './pages/auth/LogIn'
import Dashboard from './pages/Dashboard'
import AddTickets from './pages/AddTickets'
import AllTickets from './pages/AllTickets'
import MainLayout from './layout/MainLayout'
import { Toaster } from 'react-hot-toast'
const App = () => {
  const isAuthenticated = !!localStorage.getItem("ticketapp_session")
  console.log(isAuthenticated)
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<Landing/>}/>
        <Route path="/auth/signup" element={<SignUp/>}/>
        <Route path="/auth/login" element={<LogIn/>}/>
        <Route path="/" element={<MainLayout/>}>
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard/> : <LogIn/> }/>
           <Route path="/all-tickets" element={isAuthenticated ? <AllTickets/> : <LogIn/> }/>
           <Route path="/add-ticket" element={isAuthenticated ? <AddTickets/> : <LogIn/> }/>
           <Route path="/add-ticket/:id" element={isAuthenticated ? <AddTickets/> : <LogIn/>}/>
        </Route>
      </Routes>

      <Toaster position="top-right" reverse-order="false"/>
    </>
  )
}

export default App