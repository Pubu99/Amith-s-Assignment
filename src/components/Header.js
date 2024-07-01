import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-500 text-white p-4 flex items-center justify-between">
      <div className="text-2xl font-bold">CodingRadio</div>
      <div className="space-x-2">
        <span role="img" aria-label="lightning">⚡</span>
        <span role="img" aria-label="rocket">🚀</span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
