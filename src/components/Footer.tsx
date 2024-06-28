import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <p className="text-lg font-semibold">
          순창군유기견임시보호소 개인봉사자 운영 페이지
        </p>
        <p className="mt-4">
          인스타그램 {' '}
          <a 
            href="https://www.instagram.com/rluvdog_2022" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            @rluvdog_2022
          </a>
        </p>
        <p className="mt-4">
          본 페이지는 순창군과는 무관하며 개인 봉사자가 운영하는 페이지입니다.
        </p>
        <p className="mt-1">
          본 페이지 운영 비용은 봉사자 사비로 부담합니다.
        </p>
      </div>
    </footer>
  );
};

export default Footer;