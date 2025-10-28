import React from 'react'
import TicketForm from '../components/TicketForm'
import { createTicket, updateTicket } from "../services.jsx/ticketService";
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchOneTicket } from '../services.jsx/ticketService';
const AddTickets = () => {
    const {id} = useParams()
    const [edit, setEdit] = useState(false)
    const [initialData, setIsInitialData] = useState({})
    const navigate = useNavigate();
    const handleSave = (updates) => {
        if(id){
            const loadTicket = async() => {
                const ticket = await fetchOneTicket()
                setIsInitialData(ticket)
                console.log("loaded ticket to edit:", ticket)
            }
            loadTicket()
            updateTicket(id, updates)
        }else{
            setIsInitialData({})
            createTicket(updates)
            navigate("/all-tickets")
        }
    }
    useEffect(() => {
        if(id){
            setEdit(true)
        }else{
            setEdit(false)
        }
    }, [id])
  return (
    <div className="w-full max-w-[1440px] pt-20 px-4min-h-[100vh] flex items-center "> 
        <TicketForm initial={initialData} onSave={handleSave} submitLabel={edit ? 'Edit Tcket' : 'Create Ticket'} isEditing={edit}/>
    </div>
  )
}

export default AddTickets