import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          순창보호소
        </Link>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-900 dark:text-white ml-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <nav className="flex flex-col space-y-2 px-4 pb-4">
          <Link to="/" className="text-right text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
            후원계좌 현황
          </Link>
          <Link to="/sponsorlist" className="text-right text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
            후원자 목록
          </Link>
          <Link to="/expenselist" className="text-right text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
            지출 목록
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;