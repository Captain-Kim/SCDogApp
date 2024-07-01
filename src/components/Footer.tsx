import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
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
                        <a href="https://map.naver.com/p/search/%EC%88%9C%EC%B0%BD%EA%B5%B0%20%EC%8B%9C%ED%97%98%ED%8F%AC/address/14142212.8228085,4223533.8036743,%EC%A0%84%EB%B6%81%20%EC%88%9C%EC%B0%BD%EA%B5%B0%20%EA%B5%AC%EB%A6%BC%EB%A9%B4%20%EC%9B%94%EC%A0%95%EB%A6%AC%20888?c=19.00,0,0,0,dh" target="_blank" className="hover:underline">보호소위치</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;