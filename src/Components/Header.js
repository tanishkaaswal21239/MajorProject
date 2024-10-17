import React from 'react';

const Header = () => {
  return (
    <header className="bg-emerald-800 flex justify-between items-center p-3">
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
      <button className="bg-gray-300 text-gray-800 rounded px-4 py-2 hover:bg-gray-400">
        Get Started
      </button>
    </header>
  );
};

export default Header;
