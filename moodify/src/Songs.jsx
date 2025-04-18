import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchYouTubeVideos } from './api/youtubeSearch';
import './Songs.css';

const Songs = () => {
  const location = useLocation();
  const [currentMood, setCurrentMood] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get mood from navigation state
  useEffect(() => {
    const moodFromState = location.state?.mood;
    if (moodFromState) {
      setCurrentMood(moodFromState);
    }
  }, [location.state]);

  // Fetch videos whenever mood changes
  useEffect(() => {
    if (!currentMood) return;
    setLoading(true);
    fetchYouTubeVideos(`${currentMood} music`)
      .then(items => {
        setVideos(items);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos');
        setLoading(false);
      });
  }, [currentMood]);

  const title = currentMood
    ? `${currentMood.charAt(0).toUpperCase() + currentMood.slice(1)} Songs`
    : 'Select a Mood';

  return (
    <div className="songs-page">
      <h2 className="songs-heading">{title}</h2>
      {loading && <p className="loading-msg">Loading songs...</p>}
      {error && <p className="error-msg">{error}</p>}
      <div className="video-box">
        {!loading && !error && videos.length === 0 && currentMood && (
          <p>No songs found for {currentMood}</p>
        )}
        {videos.map((video, index) => (
          <div className="video-container" key={video.id.videoId || index}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songs;
