import React, {useState, useEffect} from 'react'
import { fetchTickets } from '../services.jsx/ticketService'
import TicketCard from '../components/TicketCard'
import { deleteTicket, updateTicket } from '../services.jsx/ticketService'
import { useNavigate } from 'react-router-dom'

const AllTickets = () => {
    const [tickets, setTickets] = useState([])
    const [newStatus, setNewStatus] = useState("")
    const navigate = useNavigate()
    const [showConfirm, setShowConfirm] = useState(false)
    const [idToDel, setIdToDel] = useState()
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

    // to delete ticket 

    const handleDelete = (id) => {
        setShowConfirm(true)
        setIdToDel(id)
    }

    const confirmDelete =  async () => {
        const done = await deleteTicket(idToDel)
        if(done){
            console.log("ticket deleted")
            setShowConfirm(false)
            navigate("/all-tickets")
        }

        console.log("unable to delete try again")
        return;
        
    }

    const cancelDelete = () => {
        setShowConfirm(false)
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
                <TicketCard key={item.id} ticket={item} onDelete={() => handleDelete(item.id)} onAdvance={() => handleStatus(item.id, item.status)} onEdit={()=> handleEdit(item.id)}/>
            ))}
        </section>

        {showConfirm && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
                <div className=" w-[90%] py-6  bg-white shadow-lg mx-auto px-8 mt-6 lg:absolute lg:w-[30%] left-[30%] right-[30%] top-[40%]">
                  <p className="text-base font-lato tracking-wide text-center w-full -mt-4">Are you sure you want to cancel this booking?</p>
                  <div  className=" w-full flex justify-between mt-12  rounded-sm gap-4">
                     <button onClick={cancelDelete} className="font-lato text-blacktext-sm tracking-wide py-2 px-6">No</button>
                     <button onClick={confirmDelete} className="bg-[#F43434] font-lato  text-bgWhite text-sm tracking-wide py-2 px-8 rounded-lg">Yes</button>
                   </div>
            </div>
           </div>
        )}
    </div>
  )
}

export default AllTickets