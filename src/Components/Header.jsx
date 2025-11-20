import React from 'react';
import { Link } from 'react-router';


const Header = () => {
  return (
    <div className="flex gap-4 p-4 bg-gray-100 shadow-md">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      <Link to="/about" className="text-blue-600 hover:underline">About</Link>
    </div>
  );
};

export default Header;
