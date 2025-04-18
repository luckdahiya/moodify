import React, { useState, useEffect } from 'react';
import './MoodHistory.css';

function MoodHistory() {
  const [moodHistory, setMoodHistory] = useState([]);

  // Load mood history from localStorage every time the component is rendered
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];
    setMoodHistory(storedHistory);
  }, []); // Empty dependency array ensures this only runs on mount

  const getMoodEmoji = (mood) => {
    switch (mood) {
      case 'happy':
        return '😊';
      case 'sad':
        return '😢';
      case 'chill':
        return '😌';
      case 'energetic':
        return '⚡';
      default:
        return '';
    }
  };

  return (
    <div className="mood-history-wrapper">
      <h2 className="mood-history-heading">Your Mood Timeline</h2>
      {moodHistory.length > 0 ? (
        <div className="mood-grid">
          {moodHistory.map((entry, index) => (
            <div className="mood-card" key={index}>
              <div className="mood-emoji">{getMoodEmoji(entry.mood)}</div>
              <div className="mood-info">
                <p className="mood-type">{entry.mood.toUpperCase()}</p>
                <p className="mood-time">{entry.time}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-history">No mood history yet, start vibing! 🎶</p>
      )}
    </div>
  );
}

export default MoodHistory;
