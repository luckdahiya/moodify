import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile'); // Redirect to the profile page
  };

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1 className="home-title">Moodify 🎧</h1>
        <p className="home-subtitle">music that matches your vibe 👋</p>
        <button onClick={goToProfile} className="home-button">Get Started</button>
        <p className="home-footer">made with ☕ + 😭 by Miminoiz</p>
      </div>
    </div>
  );
};

export default Home;
