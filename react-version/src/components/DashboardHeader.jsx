import React, {useState, useEffect} from 'react'
import {CircleChevronRight, CircleChevronLeft, CircleUser} from 'lucide-react'
import Sidebar from './Sidebar'
import Input from './Input'



const DashboardHeader = () => {
    const [isButtonOpen, setIsButtonOpen] = useState(false)
     const toggleButton = () => {
          setIsButtonOpen(prev => !prev)
     }
  return (
    
        <>
            <header className='h-17 fixed top-0 right-0 left-0 w-full flex justify-between'>
               
                
                <div className='flex items-center gap-2'>
                   <button onClick={toggleButton} className={`-ml-4 ${isButtonOpen ? "pl-62" : "pl-4"}`}>
                        {isButtonOpen ? <CircleChevronLeft className='h-8 w-8'/> : <CircleChevronRight className='h-8 w-8'/>}
                   </button>
                    <h3 className='text-nowrap text-3xl font-bold'>Ticket Manager</h3>
                    <Input type="text" className='bg-pink-100 border-2 border-pink-400 ml-8'/>
                </div>

                <div className='m-4 h-14 w-14 rounded-[50%]'>
                    <img src="/images/placeholder.jpeg"
                     alt="profile pic placeholder"
                     className="h-full w-full rounded-[50%]"
                     /> 
                </div>
            </header>

            {isButtonOpen && (
               <Sidebar isButtonOpen={isButtonOpen} />
            )} 
        
        </>
    
  )
}

export default DashboardHeader