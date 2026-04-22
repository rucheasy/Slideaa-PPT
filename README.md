Slideaa – AI PPT Generator

Slideaa is a full-stack web application that generates structured presentation slides from a given topic. It uses a React frontend and a backend API to create and display slide titles and key bullet points dynamically.

Features
AI-based slide content generation
Dynamic slide preview
Customizable number of slides
Frontend–backend API integration
Simple and clean UI
Tech Stack
Frontend: React.js, CSS
Backend: Node.js / Flask
Communication: REST API (JSON)
Project Structure
SlideAI/
├── frontend/
├── backend/
└── README.md
How It Works
User enters a topic and number of slides
Frontend sends a POST request to the backend
Backend generates slide data
Frontend renders the slides dynamically
API

Endpoint

POST /preview

Request

{
  "topic": "Artificial Intelligence",
  "slides": 5
}

Response

{
  "slides": [
    {
      "title": "Introduction to AI",
      "points": ["Definition", "History", "Applications"]
    }
  ]
}
Setup
Clone repository
git clone https://github.com/your-username/slideai.git
cd slideai
Backend
cd backend
npm install   # or pip install -r requirements.txt
npm start     # or python app.py
Frontend
cd frontend
npm install
npm start

Open:

http://localhost:3000
Future Improvements
Export to PPT/PDF
Improved UI templates
Authentication
Cloud deployment
