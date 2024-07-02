import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Sidebar = ({ onSongSelect }) => {
  const songs = [
    { title: 'Wrong Semicolon', url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ' },
    { title: 'Essential coffee', url: 'https://www.youtube.com/watch?v=lTRiuFIWV54' },
    { title: 'Hmm Standard code', url: 'https://www.youtube.com/watch?v=lTRiuFIWV54' },
    { title: 'Focus on Deadline', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0' },
    { title: '24/7 Coding Non-stop', url: 'https://www.youtube.com/watch?v=FzG4uDgje3M' },
    { title: 'Bounty On My Code', url: 'https://www.youtube.com/watch?v=6J6y8GOC11s' },
    { title: 'Debugging Battles', url: 'https://www.youtube.com/watch?v=DyDfgMOUjCI' },
    { title: 'Dancing While Coding', url: 'https://www.youtube.com/watch?v=OpQFFLBMEPI' },
    { title: 'Doctor, I Can\'t C#', url: 'https://www.youtube.com/watch?v=1tB73vGJ1jM' },
    { title: 'Devil\'s Validation', url: 'https://www.youtube.com/watch?v=2vjPBrBU-TM' },
    { title: 'Apocalyptic Java', url: 'https://www.youtube.com/watch?v=E1ZVSFfCk9g' },
    { title: 'Infinite Acoustic', url: 'https://www.youtube.com/watch?v=DLzxrzFCyOs' }
  ];

  return (
    <div className="bg-gray-800 text-white p-4 space-y-4 w-64 h-full fixed top-0 left-0 flex flex-col">
      <div className="font-bold text-lg">CodingRadio</div>
      <ul className="space-y-2 flex-1 overflow-auto">
        {songs.map((song, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-gray-400 flex justify-between items-center"
            onClick={() => onSongSelect(song)}
          >
            <span>{song.title}</span>
            <FaPlay className="ml-2" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
