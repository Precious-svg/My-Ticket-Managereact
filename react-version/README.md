# Ticket Manager — React Implementation

This is the React implementation of the Frontend Stage 2 Ticket Manager.

## Features
- Landing page with wave hero and decorative circle
- Authentication (signup/login) simulated with localStorage using key `ticketapp_session`
- Protected routes: `/dashboard`, `/tickets`
- Dashboard showing ticket counts
- Ticket Management: Create, Read, Update, Delete with validation
- Inline errors + toast notifications
- Persistence via `localStorage` (tickets: `ticketapp_tickets_v1`)
- Accessibility: semantic markup, labels, aria-describedby, focus states
- Responsive layout, centered max-width: 1440px

## Example credentials
- email: `user@example.com`
- password: `password123`

## Run
```bash
npm install
npm run dev