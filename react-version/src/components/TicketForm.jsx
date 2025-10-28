import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from 'react-router-dom'


const VALID_STATUSES = ["open", "in_progress", "closed"];

export default function TicketForm({ initial = {}, onSave, submitLabel = "Save", isEditing}) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [status, setStatus] = useState(initial.status || "open");
  const [priority, setPriority] = useState(initial.priority || "normal");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()


  useEffect(() => {
    setTitle(initial.title || "");
    setDescription(initial.description || "");
    setStatus(initial.status || "open");
    setPriority(initial.priority || "normal");
  }, [initial]);

  function validate() {
    const e = {};
    if (!title.trim()) e.title = "Title is required.";
    if (!VALID_STATUSES.includes(status)) e.status = "Status must be open, in_progress, or closed.";
    if (description && description.length > 1000) e.description = "Description too long (max 1000 chars).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    onSave({ title: title.trim(), description: description.trim(), status, priority });
    console.log("new edit saved")
    navigate("/all-tickets")
  }

  return (
    <form onSubmit={handleSubmit} className="w-[50%] mx-auto mt-9 flex flex-col items-start rounded-md px-4 py-6 bg-blue-50 shadow-lg" aria-label="ticket-form">
      <div className="flex flex-col gap-2 w-full ">
        <label htmlFor="title" className="text-lg font-medium">Title</label>
        <Input value={title} name={title} onChange={(e) => setTitle(e.target.value)} aria-describedby={errors.title ? "err-title" : undefined} 
        className="bg-white border-stone-600 border-2 py-4" placeholder="e.g Cook Tonight"/>
        {errors.title && <div id="err-title" className="error" role="alert">{errors.title}</div>}
      </div>

      <section className="w-full flex justify-between my-4">
        <div className="flex items-center  gap-2 ">
          <label htmlFor="status" className="text-lg font-medium">Status</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="bg-white rounded-md border-stone-200 border-2 p-4" aria-describedby={errors.status ? "err-status" : undefined}>
            <option value="open">Open</option>
            <option  value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        
          {errors.status && <div id="err-status" className="text-red-400" role="alert">{errors.status}</div>}
        </div>
        <div  className="flex items-center  gap-2 ">
         
          <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}  className="bg-white rounded-md border-stone-200 border-2 px-6 py-4">
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
          <label htmlFor="priority" className="text-lg font-medium">Priority</label>
        </div>
      </section>

      <div className="flex flex-col items-start  gap-2 w-full my-6">
        <label htmlFor="description" className="text-lg font-medium">Description</label>
        <textarea id="description" rows="5" value={description} onChange={(e) => setDescription(e.target.value)} 
        placeholder="Cook dinner for family using the recipe that was learnt online yesterday. Then get a Champange and toast to the new job." 
        className="bg-white border-stone-600 rounded-md border-2 py-4 px-4 w-full"/>
        {errors.description && <div className="error" role="alert">{errors.description}</div>}
      </div>

      <div className="my-6 mx-auto">
        <Button type="submit" className="bg-pink-500">{submitLabel}</Button>
      </div>
    </form>
  );
}