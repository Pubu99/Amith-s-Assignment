import React from 'react';

const Suggestions = () => {
  return (
    <div className="bg-gray-800 text-white p-4 space-y-4 w-64">
      <div className="text-lg font-bold">You might also like 🎁</div>
      <img src="https://picsum.photos/300/100?random=1" alt="Visualize your data for free" className="w-full" />
      <img src="https://picsum.photos/300/100?random=2" alt="Away From Keyboard" className="w-full" />
      <img src="https://picsum.photos/300/100?random=3" alt="Wiser" className="w-full" />
      
      <div className="mt-4">
        <div className="font-bold">Makers 🛠</div>
        <div className="mt-2">
          <div className="flex items-center space-x-2">
            <img src="https://picsum.photos/40?random=4" alt="Dinuka" className="rounded-full" />
            <div>Dinuka Jayasuriya</div>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <img src="https://picsum.photos/40?random=5" alt="Shehan" className="rounded-full" />
            <div>Shehan Ekanayake</div>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <img src="https://picsum.photos/40?random=6" alt="Nuwan" className="rounded-full" />
            <div>Nuwan Delwita</div>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="font-bold">Would you like to buy us a Coffee? 🙏</div>
        <div>This will help us stay up at night and make this app even better. Coffee translates to code ☕</div>
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 w-full">Buy us a coffee ☕</button>
        <button className="bg-pink-500 text-white px-4 py-2 mt-2 w-full">Make a Donation 🙏</button>
      </div>
      
      <div className="mt-4">
        <div className="font-bold">🔑 Here’s how we plan to use Donations</div>
        <div className="mt-2 text-xs justify-between">
          <p>About · Contact</p>
          <p>© Copyright 2018 - App360 Softwares - Made by Dinuka and Shehan</p>
          <p>Icon kindly by Dave Gandy and Freepik</p>
          <p>Version 1.3.0</p>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
