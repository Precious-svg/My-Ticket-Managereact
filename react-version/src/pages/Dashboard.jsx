import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card';


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
        <header></header>

        <main className='w-full'>
            <section>
                <p>Welcome, {storedUserData.firstName}</p>
            </section>

            <section>
                <Card>
                    <p>{openPercent}%</p>
                </Card>

                <Card>
                    <p>{closedPercent}%</p>
                </Card>
            </section>

            <article className='w-[400px] h-[400px]  mx-auto'>
                <div className='w-full h-full rounded-[50%] mx-auto'></div>

                <section className='absolute top-[1/2] left-[1/2] w-[200px] h-[200px] border-2 border-pink-400 rounded-[50%] bg-white'>{totalNofTickets}</section>
            </article>
        </main>
    </div>

  )
}

export default Dashboard