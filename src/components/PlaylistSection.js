import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PlaylistSection = ({ onSongSelect }) => {
  const playlists = [
    { title: 'Wrong Semicolon', img: 'https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif', url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ' },
    { title: 'Essential coffee', img: 'https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif', url: 'https://www.youtube.com/watch?v=lTRiuFIWV54' },
    { title: 'Hmm Standard code', img: 'https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif', url: 'https://www.youtube.com/watch?v=lTRiuFIWV54' },
    { title: 'Focus on Deadline', img: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0' },
    { title: '24/7 Coding Non-stop', img: 'https://media.giphy.com/media/fwbZnTftCXVocKzfxR/giphy.gif', url: 'https://www.youtube.com/watch?v=FzG4uDgje3M' },
    { title: 'Bounty On My Code', img: 'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif', url: 'https://www.youtube.com/watch?v=6J6y8GOC11s' },
    { title: 'Debugging Battles', img: 'https://media.giphy.com/media/l0HlOvJ7yaacpuSas/giphy.gif', url: 'https://www.youtube.com/watch?v=DyDfgMOUjCI' },
    { title: 'Dancing While Coding', img: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif', url: 'https://www.youtube.com/watch?v=OpQFFLBMEPI' },
    { title: 'Doctor, I Can\'t C#', img: 'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif', url: 'https://www.youtube.com/watch?v=1tB73vGJ1jM' },
    { title: 'Devil\'s Validation', img: 'https://media.giphy.com/media/3orieRzvdjUqSNGDRS/giphy.gif', url: 'https://www.youtube.com/watch?v=2vjPBrBU-TM' },
    { title: 'Apocalyptic Java', img: 'https://media.giphy.com/media/TilmLMmWrRYYHjLfub/giphy.gif', url: 'https://www.youtube.com/watch?v=E1ZVSFfCk9g' },
    { title: 'Infinite Acoustic', img: 'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif', url: 'https://www.youtube.com/watch?v=DLzxrzFCyOs' }
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
