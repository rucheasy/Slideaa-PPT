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

Setup
1. Clone the repository
git clone https://github.com/your-username/slideai.git
cd slideai
2. Setup Backend
cd backend
npm install        # or pip install -r requirements.txt
npm start          # or python app.py
3. Setup Frontend
cd frontend
npm install
npm start
4. Run Application

Open http://localhost:3000

# Future Improvements
- AI prompting for customizing slide content, tone, and structure
- Custom slide templates and design themes
- User-controlled editing of generated slides
- Authentication system
- Cloud deployment
