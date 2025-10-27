import React, { useEffect, useState } from "react";

const VALID_STATUSES = ["open", "in_progress", "closed"];

export default function TicketForm({ initial = {}, onSave, submitLabel = "Save" }) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [status, setStatus] = useState(initial.status || "open");
  const [priority, setPriority] = useState(initial.priority || "normal");
  const [errors, setErrors] = useState({});

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
  }

  return (
    <form onSubmit={handleSubmit} className="card" aria-label="ticket-form">
      <div className="form-row">
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} aria-describedby={errors.title ? "err-title" : undefined} />
        {errors.title && <div id="err-title" className="error" role="alert">{errors.title}</div>}
      </div>

      <div className="form-row">
        <label htmlFor="status">Status</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} aria-describedby={errors.status ? "err-status" : undefined}>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
        {errors.status && <div id="err-status" className="error" role="alert">{errors.status}</div>}
      </div>

      <div className="form-row">
        <label htmlFor="priority">Priority</label>
        <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="5" value={description} onChange={(e) => setDescription(e.target.value)} />
        {errors.description && <div className="error" role="alert">{errors.description}</div>}
      </div>

      <div className="controls">
        <button type="submit" className="button">{submitLabel}</button>
      </div>
    </form>
  );
}