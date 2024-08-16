import React from 'react';
import './Home3.css';

function Home3() {
  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Introduction to FITHUB" },
    { id: 2, url: "https://www.youtube.com/embed/tgbNymZ7vqY", title: "Workout Basics" },
    { id: 3, url: "https://www.youtube.com/embed/sVx1mJDeQ5s", title: "Nutrition Tips" },
    { id: 4, url: "https://www.youtube.com/embed/OiR2SoP-z3s", title: "Advanced Training Techniques" },
    
  ];

  return (
    <div className="video-section">
      <h1 className="video-h1">Watch Our Videos</h1>
      <p>Explore our collection of video tutorials and introductions to get the most out of FITHUB.</p>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home3;