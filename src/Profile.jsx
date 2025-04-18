import React, { useState } from 'react';
import CustomDropdown from './CustomDropdown';
import './Profile.css';

export default function Profile({ onMoodChange }) {
  const [selectedMood, setSelectedMood] = useState('');

  const moods = ['happy', 'sad', 'chill', 'energetic'];

  const handleChange = (mood) => {
    setSelectedMood(mood);
    onMoodChange(mood);
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-form">
        <h2 className="profile-title">What's Your Mood Today? 🌟</h2>

        <CustomDropdown
          options={moods}
          value={selectedMood}
          onChange={handleChange}
          placeholder="Select your mood"
        />
      </div>
    </div>
  );
}
