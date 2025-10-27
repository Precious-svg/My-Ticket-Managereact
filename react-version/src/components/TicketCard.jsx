import React from "react";

export default function TicketCard({ ticket, onAdvance, onEdit, onDelete }) {
  return (
    <article className="ticket-card" aria-labelledby={`t-${ticket.id}`}>
      <h3 id={`t-${ticket.id}`}>{ticket.title}</h3>
      <p style={{color:'#6b7280'}}>{ticket.description}</p>
      <div className={`ticket-status ${ticket.status}`} aria-hidden>{ticket.status.replace("_"," ")}</div>
      <div className="kv" style={{marginTop:'0.75rem'}}>
        <small style={{color:'#6b7280'}}>Priority: {ticket.priority}</small>
        <div className="controls">
          <button onClick={() => onAdvance(ticket)} className="link-ghost">Advance</button>
          <button onClick={() => onEdit(ticket)} className="link-ghost">Edit</button>
          <button onClick={() => onDelete(ticket)} className="link-ghost">Delete</button>
        </div>
      </div>
    </article>
  );
}