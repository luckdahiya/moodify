import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar'; 
import Home from './Home';
import ProfilePage from './ProfilePage'; 
import Songs from './Songs';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
