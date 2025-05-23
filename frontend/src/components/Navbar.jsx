import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { MdEventNote } from "react-icons/md";
import logo from '/assets/logo.png';
import API_BASE_URL from '../../ApiBaseURL';
import Cookies from 'js-cookie';


const Navbar = ({ setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/events');
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}auth/logout`, {
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        alert('Logged out successfully');
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        navigate('/');
      } else {
        const data = await response.json();
        alert(`Logout failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred while logging out.');
    }
  };

  return (

    <nav className="border-gray-200 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-300 text-white p-3 flex items-center justify-between">
      <Link to="/home">
        <div className='space-x-3 mx-5 hidden md:flex'>
          <img
            src={logo}
            alt="EventSpot Lite"
            className="h-12 w-auto"
          />
          <p className="text-2xl mt-2 text-black">EventCraft</p>
        </div>
        <img
          src={logo}
          alt="EventSpot Lite"
          className="block md:hidden h-12 w-13"
        />
      </Link>

      <div className="flex items-center">
        <div
          className="flex items-center bg-gray-100 rounded-full overflow-hidden md:w-64 w-full mx-3"
          onClick={handleSearchClick}
        >
          <input
            type="text"
            placeholder="Search events..."
            className="bg-gray-100 text-black w-full px-4 py-2 focus:outline-none md:block"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="p-2 cursor-pointer md:pl-2">
            <FaSearch className="text-blue-500 hover:text-blue-300" />
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition md:ml-4"
        >
          <FaSignOutAlt className="md:mr-2" />
          <span className='md:block hidden'>Logout</span>
        </button>
        <Link to="/booked-events">
          <button
            className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition md:ml-4 ml-2"
          >
            <MdEventNote className="md:mr-2" />
           <span className='md:block hidden'>My Events</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
