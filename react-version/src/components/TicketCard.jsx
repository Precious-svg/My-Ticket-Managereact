import React from "react";
import Card from "./Card";
import {FlagTriangleRight} from "lucide-react"
import Button from "./Button";

export default function TicketCard({ ticket, onAdvance, onEdit, onDelete }) {
  return (
    <article aria-labelledby={`t-${ticket.id}`}>
      <Card className="rounded-lg shadow-xl px-6 py-4 min-h-[200px]" bgColor={ticket.status === "open" ? "bg-sky-300" : ticket.status === "closed" ? "bg-emerald-200" : "bg-yellow-500"}>
        <h3 className="text-xl font-semibold text-stone-800 my-2">{ticket.title}</h3>
        <p className="text-md font-medium ">{ticket.description} </p>
        <div className={`my-2 bg-stone-800 w-[40%] p-1 rounded-xl`} aria-hidden>{ticket.status.replace("_"," ").toUpperCase()}</div>
        <div className="kv" style={{marginTop:'0.75rem'}}>
           <p style={{color:'#6b7280'}} className="text-sm flex gap-2"> Priority: {ticket.priority} <FlagTriangleRight fill={ticket.priority === "high" ? "#c10007" : ticket.priority === "normal" ? "#9810fa" : "#497d00"}/>
           </p>
           <div className="my-3 flex gap-4 justify-between items-center">
              <Button onClick={() => onAdvance(ticket)} color="bg-green-none" textColor="text-stone-900" className="border-1 border-white cursor-pointer">Advance</Button>
              <Button onClick={() => { console.log("Delete clicked for:"); onDelete()}}   color="bg-red-600" className="cursor-pointer">Delete</Button>
              <Button onClick={() => onEdit(ticket)}  color="bg-none"  textColor="text-stone-600" className="border-1 border-white cursor-pointer">Edit</Button>
             
           </div>
       </div>
      </Card>
    </article>
  );
}