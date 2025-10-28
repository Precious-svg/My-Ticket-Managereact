import React from 'react'
import {LogOut, LibraryBig, LayoutDashboard, Ticket, TicketsPlane} from "lucide-react"
import { useNavigate, useLocation } from 'react-router-dom'
import { logout } from '../services.jsx/ticketService'

const Sidebar = ({isButtonOpen}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const navItems = [
    {name: "Dashboard", icon: LayoutDashboard, path: "/dashboard", handleFunc: () => {
        navigate(path)
    } },

     {name: "Add Ticket", icon: Ticket, path: "/add-ticket", handleFunc: () => {
        navigate(path)
    } },
     {name: "All Tickets", icon: LibraryBig, path: "/all-tickets", handleFunc: () => {
        navigate(path)
    } }
   ]

   const handleLogOut = async() => {
       await(logout)
        navigate("/auth/login")
   }
  return (
    
        <aside className={`cursor-pointer z-50 bg-neutral-100 flex flex-col border-l-2 border- justify-start h-screen absolute top-0 bottom-0 left-0 transition-all duration-300 ease-in-out 
            ${isButtonOpen ? "w-52 translate-x-0" : "w-0 translate-x-full"} lg:w-64`}>
            <h3 className="mx-auto text-2xl font-bold my-8 italic py-3 px-4 rounded-md bg-white flex gap-2 items-center" >
               <TicketsPlane style={{ fill: "#193cb8", stroke: ""}} size={35}/> MyTicketApp
                </h3>
            <section className="flex flex-col gap-6 pt-8">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.path
                    return (
                       <div onClick={() => navigate(item.path)} className={`mx-3 flex items-center gap-6 ${isActive ? "bg-blue-900 rounded-md py-3 px-4" : "bg-none" }`} 
                       key={item.name}
                       >
                           <Icon size={25} stroke={ isActive ? "#f8fafc" : "#292524"}/>
                          <p className={`text-base font-medium ${isActive && "text-white"}`}>{item.name}</p>
                      </div>
                )})}
            </section>
           
            <div className='w-full mt-80' onClick={handleLogOut} >
               <div className="w-full border-t-2 border-gray-500 my-6"></div>
                <div className='pl-6 flex items-center gap-6'>
                    <LogOut size={25} stroke="#ec003f"/>
                    <p>Log Out</p>
                </div>
            </div>
        </aside>
  
  )
}

export default Sidebar