import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure Tailwind CSS is imported here
import Sidebar from './components/Sidebar';
import PlaylistSection from './components/PlaylistSection';
import MusicPlayer from './components/MusicPlayer';
import Banner from './components/Banner';
import Header from './components/Header';
import Suggestions from './components/Suggestions';

const App = () => {
  const [currentSong, setCurrentSong] = useState({
    title: 'Select a song to play',
    url: ''
  });

  const handleSongSelect = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <Banner />
      <div className="flex flex-1">
        <Sidebar onSongSelect={handleSongSelect} className="w-1/4 bg-gray-800" />
        <div className="flex-1 p-4">
          <PlaylistSection onSongSelect={handleSongSelect} />
          <Suggestions />
        </div>
      </div>
      <MusicPlayer song={currentSong} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
