import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';

const MusicPlayer = ({ song }) => {
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current, {
        videoId: new URL(song.url).searchParams.get('v'),
        events: {
          onReady: event => {
            setPlayer(event.target);
            event.target.playVideo();
            setIsPlaying(true);
          }
        }
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }
  }, [song]);

  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 fixed bottom-0 w-full flex items-center justify-between">
      <div className="text-lg">{song.title}</div>
      <div className="flex-1 flex justify-center">
        <div className="flex items-center space-x-4">
          <FaVolumeUp className="text-2xl cursor-pointer" />
          <FaStepBackward className="text-2xl cursor-pointer" />
          <button onClick={handlePlayPause} className="bg-pink-500 p-2 rounded-full">
            {isPlaying ? <FaPause className="text-2xl text-white" /> : <FaPlay className="text-2xl text-white" />}
          </button>
          <FaStepForward className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div ref={playerRef} style={{ display: 'none' }}></div>
    </div>
  );
};

export default MusicPlayer;
