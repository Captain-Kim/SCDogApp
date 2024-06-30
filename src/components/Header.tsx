import { Link } from 'react-router-dom';

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;