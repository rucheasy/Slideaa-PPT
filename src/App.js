import React, { useState } from "react";

import axios from "axios";
import "./App.css";

function App() {
  const [topic, setTopic] = useState("");
  const [slides, setSlides] = useState(5);
  const [template, setTemplate] = useState("minimal");
  const [animation, setAnimation] = useState("fade");
  const [previewSlides, setPreviewSlides] = useState([]);

  const getPreview = async () => {
    const res = await axios.post("http://127.0.0.1:5000/preview", {
      topic,
      slides
    });
    setPreviewSlides(res.data.slides);
  };

  const download = async () => {
    const res = await axios.post(
      "http://127.0.0.1:5000/generate",
      { slides: previewSlides, template, animation },
      { responseType: "blob" }
    );

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.download = "final.pptx";
    link.click();
  };

  return (
    <div className="app">
      <div className="card">
        <h1 style={{ fontFamily: 'Indie Flower'}}>
        Slideaa
        </h1>

        <input placeholder="Enter topic"
          onChange={(e) => setTopic(e.target.value)} />

        <input type="number"
          value={slides}
          onChange={(e) => setSlides(e.target.value)} />

        <select onChange={(e) => setTemplate(e.target.value)}>
          <option value="minimal">Minimal</option>
          <option value="tech">Tech</option>
          <option value="aesthetic">Aesthetic</option>
        </select>

        <select onChange={(e) => setAnimation(e.target.value)}>
          <option value="fade">Fade</option>
          <option value="zoom">Zoom</option>
          <option value="slide">Slide</option>
        </select>

        <button onClick={getPreview}>Preview</button>

        {previewSlides.map((slide, i) => (
          <div key={i} className="slide">

            <input value={slide.title}
              onChange={(e) => {
                const updated = [...previewSlides];
                updated[i].title = e.target.value;
                setPreviewSlides(updated);
              }} />

            {slide.points.map((p, j) => (
              <input key={j} value={p}
                onChange={(e) => {
                  const updated = [...previewSlides];
                  updated[i].points[j] = e.target.value;
                  setPreviewSlides(updated);
                }} />
            ))}

            <input placeholder="Image URL"
              onChange={(e) => {
                const updated = [...previewSlides];
                updated[i].image = e.target.value;
                setPreviewSlides(updated);
              }} />
          </div>
        ))}

        <button onClick={download}>Download PPT</button>
      </div>
    </div>
  );
}

export default App;