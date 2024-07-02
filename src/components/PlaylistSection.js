import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PlaylistSection = ({ onSongSelect }) => {
  const playlists = [
    { title: 'Wrong Semicolon', img: 'https://via.placeholder.com/150', url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ' },
    { title: 'Essential coffee', img: 'https://via.placeholder.com/150', url: 'https://www.youtube.com/watch?v=lTRiuFIWV54' },
    { title: 'Hmm Standard code', img: 'https://via.placeholder.com/150', url: 'https://www.youtube.com/watch?v=lTRiuFIWV54' },
    { title: 'Focus on Deadline', img: 'https://via.placeholder.com/150', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0' }
    // Add more playlists as needed
  ];

  return (
    <div className="p-4">
      <div className="text-lg font-bold mb-2">Pick your poison 🍷</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {playlists.map((playlist, index) => (
          <Card
            key={index}
            className="hover:shadow-xl cursor-pointer"
            onClick={() => onSongSelect(playlist)}
          >
            <img src={playlist.img} alt={playlist.title} className="w-full h-auto" />
            <CardContent>
              <Typography>{playlist.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlaylistSection;
