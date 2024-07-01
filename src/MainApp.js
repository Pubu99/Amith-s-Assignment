// src/MainApp.js

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import PlaylistSection from './components/PlaylistSection';
import MusicPlayer from './components/MusicPlayer';

const MainApp = () => {
  const [currentSong, setCurrentSong] = useState({
    title: 'Select a song to play',
    url: ''
  });

  const handleSongChange = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar onSongSelect={handleSongChange} />
        <div className="flex-1 p-4">
          <PlaylistSection onSongSelect={handleSongChange} />
        </div>
      </div>
      <MusicPlayer song={currentSong} />
    </div>
  );
};

export default MainApp;
