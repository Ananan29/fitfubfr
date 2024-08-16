import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning, faAppleAlt, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import './Home2.css';

function Home2() {
  const features = [
    { icon: faDumbbell, title: 'Strength Training', description: 'Build muscle and get stronger with our guided workouts.' },
    { icon: faRunning, title: 'Cardio Workouts', description: 'Improve your endurance with our cardio routines.' },
    { icon: faAppleAlt, title: 'Nutrition Plans', description: 'Eat healthy with personalized meal plans and recipes.' },
    { icon: faHeartbeat, title: 'Wellness Tracking', description: 'Track your progress and stay motivated.' },
  ];

  return (
    <div className="feature-container">
      {features.map((feature, index) => (
        <div className="feature-box" key={index}>
          <FontAwesomeIcon icon={feature.icon} size="3x" />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home2;