// src/api/youtube.js
const API_KEY = 'AIzaSyA1DKNpkiGDUKwN3yC9oIE1KwZr6J8I14o';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchYouTubeVideos = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}?part=snippet&q=${encodeURIComponent(query)}&key=${API_KEY}&maxResults=10`
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
};
