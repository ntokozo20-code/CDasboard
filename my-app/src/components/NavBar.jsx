import React, { useState } from 'react';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between backdrop-blur-sm bg-white/95">
      <div className="flex-1 max-w-md mx-6 relative">
        <input
          type="text"
          placeholder="Search type of keywords"
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50 focus:bg-white"
        />
        <span className="absolute left-4 top-3.5 text-gray-400 text-lg"></span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Laurice</span>
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
          L
        </div>
      </div>
    </header>
  );
}

export default Header;