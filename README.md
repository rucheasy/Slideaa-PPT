# Slideaa – AI PPT Generator  

Slideaa is a full-stack web application that generates structured presentation slides from a given topic. It uses a React frontend and a backend API to dynamically create slide titles and key bullet points.

---

## Features  

- AI-based slide content generation  
- Dynamic slide preview rendering  
- Customizable number of slides  
- Frontend–backend API integration  
- Clean and minimal UI  

---

## Tech Stack  

- Frontend: React.js, CSS  
- Backend: Node.js / Flask  
- API Communication: REST (JSON)  

---

## Project Structure  

Slideaa/
├── frontend/
├── backend/
└── README.md  

---

## How It Works  

1. User enters a topic and number of slides  
2. Frontend sends a POST request to the backend  
3. Backend processes the request and generates slide data  
4. Frontend renders the slides dynamically  

---

## API  

### Endpoint  
POST /preview  

### Request  
```json
{
  "topic": "Artificial Intelligence",
  "slides": 5
}
