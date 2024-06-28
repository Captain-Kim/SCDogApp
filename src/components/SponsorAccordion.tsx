import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    id: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, id }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <h2 id={`accordion-heading-${id}`}>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 my-10"
                    onClick={toggleOpen}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-body-${id}`}
                >
                    <span>{title}</span>
                    <svg
                        className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id={`accordion-body-${id}`}
                className={`${isOpen ? '' : 'hidden'} p-5 border border-b border-gray-200 dark:border-gray-700`}
                aria-labelledby={`accordion-heading-${id}`}
            >
                {content}
            </div>
        </>
    );
};

const SponsorAccordion: React.FC = () => {
    return (
        <div id="accordion-collapse">
            <AccordionItem
                id="1"
                title="후원자 이름을 바꿔주실 수 있나요?"
                content={
                    <>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            통장 내역을 토대로 후원자 내역이 자동으로 생성되기 때문에 관리자가 임의로 변경하기 어렵습니다.
                        </p>
                    </>
                }
            />
            <AccordionItem
                id="2"
                title="후원하고 싶습니다."
                content={
                    <>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            본 개인 봉사자는 후원금을 모금하지 않습니다. 이곳에 올라오는 후원 내역은 봉사자들께서 자발적으로 후원금을 보내주신 내용입니다.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            다만 후원 문의를 원하신다면 웹 사이트 하단의 '후원문의'를 클릭하여 별도 문의 부탁드립니다.
                        </p>
                    </>
                }
            />
        </div>
    );
};

export default SponsorAccordion;