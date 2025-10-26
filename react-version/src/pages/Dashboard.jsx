import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card';
import DashboardHeader from '../components/DashboardHeader';


const Dashboard = () => {
    const navigate = useNavigate();
    const storedUserData = JSON.parse(localStorage.getItem("ticketapp_user"))
    useEffect(() => {
        const session = localStorage.getItem("ticketapp_session")
        if(!session){
            navigate("/auth/login");
        }
    }, [])

    const totalNofTickets = 17;
    const totalNoOfOpen = 6;
    const totalNoOfClosed = 4
    const totalNoInProgress = 7

    const openPercent = Math.ceil((totalNoOfOpen/totalNofTickets) * 100)
    const closedPercent = Math.ceil((totalNoOfClosed/totalNofTickets) * 100)
    const inprogressPercent = Math.ceil((totalNoInProgress/totalNofTickets) * 100)

    const gradient = `conic-gradient(
    #8e51ff 0% ${openPercent}%,
    #009966 ${openPercent}%  ${openPercent + closedPercent}%,
    #ffb900 ${openPercent + closedPercent}% 100%
    )`
  return (
    <div className='min-h-[100vh] max-w-[1440px]'>
        <header>
            <DashboardHeader/>
        </header>

        <main className='w-full pt-[88px]'>
            <section>
                <p>Welcome, {storedUserData.firstName}</p>
            </section>

            <section>
                <Card bgColor='#8e51ff' textColor='text-black'>
                    <p>{openPercent}%</p>
                </Card>

                <Card bgColor='#009966' textColor='text-black'>
                    <p>{closedPercent}%</p>
                </Card>
            </section>

            <article className='w-[400px] h-[400px] relative mx-auto' >
                <div className='w-full h-full rounded-[50%] flex justify-center items-center' style={{background: `${gradient}`}}>
                    <section className=' w-[150px] h-[150px] border-2 border-pink-400 rounded-[50%] bg-white'>
                       <p className='text-center'>{totalNofTickets}</p>
                    </section>
                </div>
            </article>

            <section className='h-36 w-full'>
                <Card bgColor="bg-zinc-900" className='border-dashed h-full w-[25%]'>
                    <p className='text-2xl font-medium'>+</p>
                </Card>
            </section>
        </main>
    </div>

  )
}

export default Dashboard