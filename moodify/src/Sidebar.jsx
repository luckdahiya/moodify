// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FaHome, FaUserAlt, FaMusic } from 'react-icons/fa'; // ICON GANG 🎶🔥

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Moodify</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome style={{ marginRight: '10px' }} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaUserAlt style={{ marginRight: '10px' }} />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/songs">
              <FaMusic style={{ marginRight: '10px' }} />
              Songs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
