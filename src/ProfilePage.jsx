import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [currentMood, setCurrentMood] = useState("Select Mood");
  const navigate = useNavigate();

  const handleMoodChange = (e) => {
    const selectedMood = e.target.value;
    setCurrentMood(selectedMood);

    // Navigate to Songs page with the selected mood
    if (selectedMood !== "Select Mood") {
      navigate("/songs", { state: { mood: selectedMood } });
    }
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-container">
        <h2 className="profile-header">Your Mood Profile</h2>

        <div className="mood-form">
          <select
            className="mood-dropdown"
            onChange={handleMoodChange}
            value={currentMood}
          >
            <option value="Select Mood" disabled>Select Mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="chill">Chill</option>
            <option value="energetic">Energetic</option>
            <option value="excited">Excited</option>
            <option value="motivated">Motivated</option>
            <option value="angry">Angry</option>
            <option value="relaxed">Relaxed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
