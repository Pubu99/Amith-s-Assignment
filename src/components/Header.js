import React from 'react';
import { FaBolt, FaRocket } from 'react-icons/fa';
import { GiSpeaker } from 'react-icons/gi';

const Header = () => {
  return (
    <div className="bg-gray-500 text-white p-4 flex items-center justify-between fixed w-full z-10 ml-64"> {/* Add ml-64 to account for the sidebar width */}
      <div className="text-2xl font-bold flex items-center space-x-2">
        <GiSpeaker />
        <span>CodingRadio</span>
      </div>
      <div className="space-x-2">
        <FaBolt />
        <FaRocket />
      </div>
    </div>
  );
};

export default Header;
