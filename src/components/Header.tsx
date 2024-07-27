import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // 햄버거 메뉴 아이콘

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
          순창보호소
        </Link>
        <div className="md:hidden">
          <FaBars onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
        </div>
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/notice" className="hover:text-cyan-500 transition-colors">
                공지사항
              </Link>
            </li>
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
            <li>
              <Link to="/spreadsheet" className="hover:text-cyan-500 transition-colors">
                전체 통장내역
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-5 py-5">
            <li>
              <Link to="/" className="hover:text-cyan-500 transition-colors" onClick={() => setIsOpen(false)}>
                후원계좌 현황
              </Link>
            </li>
            <li>
              <Link to="/sponsorlist" className="hover:text-cyan-500 transition-colors" onClick={() => setIsOpen(false)}>
                후원자 목록
              </Link>
            </li>
            <li>
              <Link to="/expenselist" className="hover:text-cyan-500 transition-colors" onClick={() => setIsOpen(false)}>
                지출 목록
              </Link>
            </li>
            <li>
              <Link to="/spreadsheet" className="hover:text-cyan-500 transition-colors" onClick={() => setIsOpen(false)}>
                전체 통장내역
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
