import React, {useState, useEffect} from 'react'
import { fetchTickets } from '../services.jsx/ticketService'
import TicketCard from '../components/TicketCard'
import { deleteTicket, updateTicket } from '../services.jsx/ticketService'
import { useNavigate } from 'react-router-dom'

const AllTickets = () => {
    const [tickets, setTickets] = useState([])
    const [newStatus, setNewStatus] = useState("")
    const navigate = useNavigate()
    const handleEdit = (id) => {
        navigate(`/add-ticket/${id}`)
    }

    const handleStatus = (id, stat) => {
        if(stat === "open"){
            setNewStatus("in_progress")
            updateTicket(id, {status: newStatus})
            return;
        }else{
            setNewStatus("closed")
            updateTicket(id, {status: newStatus})
        }

    }
    const loadTickets = async() => {
        const all = await fetchTickets()
        console.log("fetch all tickets:", all)
       setTickets(all)
    }
    useEffect(() => {
        loadTickets()
    }, [])

    useEffect(() => {
        loadTickets()
    }, [newStatus])


  return (
    <div className='w-full max-w-[1440px] pt-24'>
        <section className='w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto'>
            {tickets.map((item) => (
                <TicketCard key={item.id} ticket={item} onDelete={deleteTicket} onAdvance={() => handleStatus(item.id, item.status)} onEdit={()=> handleEdit(item.id)}/>
            ))}
        </section>
    </div>
  )
}

export default AllTickets