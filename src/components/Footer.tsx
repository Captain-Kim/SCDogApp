import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 fixed bottom-0 w-full">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> 개인봉사자 후원금 사용내역 안내 페이지입니다. 순창군과는 무관합니다.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.instagram.com/rluvdog_2022" target="_blank" className="hover:underline me-4 md:me-6">인스타그램</a>
                    </li>
                    <li>
                        <a href="https://open.kakao.com/o/sWwjtTxe" target="_blank" className="hover:underline me-4 md:me-6">봉사문의</a>
                    </li>
                    <li>
                        <Link to="/supportinquiry" className="hover:underline me-4 md:me-6">후원문의</Link>
                    </li>
                    <li>
                        <Link to="/mappage" className="hover:underline me-4 md:me-6">보호소위치</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;