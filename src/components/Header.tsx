import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
          순창보호소
        </Link>
        <ul className="flex items-center gap-5">
          <li>
            <Link to="/" className="hover:text-cyan-500 transition-colors">
              후원계좌 현황
            </Link>
          </li>
          <li>
            <Link to="/sponsorlist" className="hover:text-cyan-500 transition-colors">
              후원자 목록
            </Link>
          </li>
          <li>
            <Link to="/expenselist" className="hover:text-cyan-500 transition-colors">
              지출 목록
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleMenu}
          className="text-gray-900 dark:text-white ml-4 md:hidden"
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
      <div className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out md:hidden`}>
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