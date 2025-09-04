import React from 'react';
import { Search, Hexagon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Hexagon className="w-8 h-8 text-red-500 fill-current" />
            <span className="text-white text-xl font-bold">TechBlogs</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* <button className="p-2 text-gray-300 hover:text-white transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button> */}
            
            <a 
              href="https://surendra-bishnoi29.github.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
              title="Visit Surendra's Portfolio"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEL3m0C52en4w/profile-displayphoto-shrink_400_400/B56ZOIchfGGgAg-/0/1733161000194?e=1759968000&v=beta&t=NQ2K9AYE6cIqsD3o70rwTgmADrswmc5Rl6cIkLnc6Ts"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;