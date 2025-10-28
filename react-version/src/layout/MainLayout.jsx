import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardHeader from '../components/DashboardHeader'

const MainLayout = () => {
  return (
    <>
        <DashboardHeader/>
        <Outlet/>
    </>
  )
}

export default MainLayout