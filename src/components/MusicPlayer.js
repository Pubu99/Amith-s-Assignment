import React from 'react';

const MusicPlayer = ({ song }) => {
  return (
    <div className="bg-gray-900 text-white p-4 fixed bottom-0 w-full flex items-center justify-between">
      <div className="text-lg">{song.title}</div>
      {song.url && (
        <iframe
          width="300"
          height="40"
          src={`https://www.youtube.com/embed/${new URL(song.url).searchParams.get('v')}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={song.title}
        ></iframe>
      )}
    </div>
  );
};

export default MusicPlayer;
