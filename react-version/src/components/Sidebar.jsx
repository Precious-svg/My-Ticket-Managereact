import React from 'react'
import {LogOut, LibraryBig} from "lucide-react"

const Sidebar = ({isButtonOpen}) => {
    const navItems = [{name: "Log Out", icon: LogOut, handleFunc: () => {

    }}, {name: "All Tasks", icon: LibraryBig, handleFunc: () => {} }]
  return (
    <div>
        <aside className={`flex flex-col justify-between h-screen top-0 bottom-0 left-0 transition-all duration-300 ease-in-out 
            ${isButtonOpen ? "w-52 translate-w-0" : "w-0 translate-w-full"} lg:w-60 lg:translate-x-0`}>
            {navItems.map((item) => (
                <div>
                    <p>{item.name}</p>
                    <component is={item.icon}/>
                </div>
            ))}
        </aside>
    </div>
  )
}

export default Sidebar