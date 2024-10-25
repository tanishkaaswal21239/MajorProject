import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-50  via-emerald-100 to-emerald-50 text-black flex justify-between items-center p-2 border-b-2 border-emeral-300">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">GreenXchange</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/" className="hover:text-gray-300">About</a></li>
          <li><a href="/" className="hover:text-gray-300">Dashboard</a></li>
          <li><a href="/" className="hover:text-gray-300">Login</a></li>
        </ul>
      </nav>
      <button className=" border-2 border-emerald-100 text-gray-800 rounded-full px-4 py-2 hover:bg-gray-400">
        Get Started →
      </button>
    </header>
  );
};

export default Header;
