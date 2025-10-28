import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card';
import DashboardHeader from '../components/DashboardHeader';
import { fetchTickets } from '../services.jsx/ticketService';
import { Plus } from 'lucide-react';


const Dashboard = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([])
    const storedUserData = JSON.parse(localStorage.getItem("ticketapp_user"))
    useEffect(() => {
        const session = localStorage.getItem("ticketapp_session")
        if(!session){
            navigate("/auth/login");
        }
    }, [])
    
    useEffect(() => {
        fetchTickets().then(setTickets).catch(() => {
            console.log("error fetching tickets")
        })
    }, [])
    const safeDivide = (num, denom) => (denom ? (num / denom) * 100 : 0)
    const totalNofTickets = tickets.length;
    const totalNoOfOpen = tickets.filter((t) => t.status === "open").length ;
    const totalNoOfClosed = tickets.filter((t) => t.status === "closed").length ;
    const totalNoInProgress = tickets.filter((t) => t.status === "in_progress").length ;

    const openPercent = Math.round( Math.round(safeDivide(totalNoOfOpen, totalNofTickets)))
    const closedPercent = Math.round(safeDivide(totalNoOfClosed, totalNofTickets))
    const inprogressPercent = Math.round(safeDivide(totalNoInProgress, totalNofTickets))

    const gradient = `conic-gradient(
     #00bcff 0% ${openPercent === 0 ? 0 : openPercent}%, 
    #ffdf20 ${openPercent}%  ${inprogressPercent === 0 ? 0 : openPercent + inprogressPercent}%,
   #00bc7d ${inprogressPercent === 0 ? 0 : inprogressPercent + closedPercent}% 100%
    )`
   
  return (
    <div className='min-h-[100vh] max-w-[1440px] px-6'>
       
        <main className='w-full pt-20 pb-6'>
            <section>
                <p className='text-nowrap text-xl font-semibold ml-4'>
                    Welcome, {storedUserData.firstName?.[0].toUpperCase() + storedUserData.firstName.slice(1)}
                </p>
            </section>

            <section className='flex justify-center items-center my-12 gap-6'>
                <Card className="rounded-lg shadow-lg min-h-[150px] w-[280px] flex flex-col pl-3 justify-center items-start gap-4" bgColor='bg-sky-300' textColor='text-black' >
                    <p className="text-stone-500 text-md font-medium"> Total Number Of Opened Tickets</p>
                    <p className="text-4xl font-bold">{totalNoOfOpen}</p>
                    <p>View all open tickets</p>
                </Card>

                <Card className="rounded-lg shadow-lg min-h-[150px] w-[280px]  flex flex-col pl-3 justify-center items-start gap-4" bgColor='bg-emerald-200' textColor='text-black'>
                    <p className="text-stone-500 text-md font-medium">Total Number Of Closed Tickets</p>
                    <p  className="text-4xl font-bold">{totalNoOfClosed}</p>
                    <p>View all close tickets</p>
                </Card>
            </section>

            <article className='w-full relative mx-auto flex flex-col ' >
                <p className="text-sm font-semibold text-nowrap italic text-left pl-8">Below is a statistical summary of all the tickets you have ever created.</p>
                <div className='w-[200px] h-[200px] rounded-[50%] flex justify-center items-center self-center' style={{background: `${gradient}`}}>
                    <section className=' w-[100px] h-[100px] rounded-[50%] bg-white flex justify-center my-auto items-center s'>
                       <p className='text-center'>{totalNofTickets}</p>
                    </section>
                </div>
            </article>

            <section className='h-44 w-[30%] pt-4  mx-auto' onClick={() => navigate("/add-ticket")}>
                <Card bgColor="bg-zinc-700" className='border-dashed border-2 h-full w-full flex justify-center items-center' >
                    <Plus size={38}/>
                </Card>
            </section>
        </main>
    </div>

  )
}

export default Dashboard