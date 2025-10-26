import React, {useState, useEffect} from 'react'
import {CircleChevronRight, CircleChevronLeft, CircleUser} from 'lucide-react'
import Sidebar from './Sidebar'

const DashboardHeader = () => {
    const [isButtonOpen, setIsButtonOpen] = useState(false)
     const toggleButton = () => {
          setIsButtonOpen(prev => !prev)
     }
  return (
    <div className='w-full h-17 flex justify-between items-center fixed right-0 left-0 flex justify-between'>
        <button onClick={toggleButton}>
            {isButtonOpen ? <CircleChevronLeft/> : <CircleChevronRight/>}
        </button>

        <section>
            {isButtonOpen && (
                <Sidebar isButtonOpen={isButtonOpen}/>
            )}
        </section>
      
        <div>
            <CircleUser/>
        </div>
    </div>
  )
}

export default DashboardHeader