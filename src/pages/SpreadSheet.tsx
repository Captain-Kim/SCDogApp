import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBankStatement from '../hooks/useBankStatement';
import { AllData } from '../types/type';
import LoadingSpinner from '../components/Loading';
import { useLatestDate } from '../hooks/useLatestDate';
import { useCommaFormat } from '../hooks/useCommaFormat';

const SpreadSheet = () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const { data, isFetching, isError } = useBankStatement(page, pageSize);
    const { data: latestDate } = useLatestDate();
    const navigate = useNavigate();

    const handleDetailsClick = (transactionType: string, uuid: string) => {
        if (transactionType === '후원') {
            navigate(`/sponsorlist/detail/${uuid}`);
        } else if (transactionType === '지출') {
            navigate(`/expenselist/detail/${uuid}`);
        }
    };

    if (isFetching) return <div><LoadingSpinner /></div>;
    if (isError) return <div>Error loading data</div>;

    const items = Array.isArray(data) ? data : (data as any)?.items || [];

    return (
        <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full max-w-full px-3 mb-6 mx-auto">
                <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                        {/* card header */}
                        <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                            <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                <span className="mr-3 font-semibold text-dark">전체 통장내역</span>
                                <span className="mt-1 font-medium text-secondary-dark text-lg/normal">최근 업데이트 일: {latestDate ? new Date(latestDate).toLocaleDateString() : '데이터를 불러오는 중입니다...'}</span>
                            </h3>
                            <div className="relative flex flex-wrap items-center my-2">
                                <button
                                    onClick={() => alert('PDF 요청하기(준비중)')}
                                    className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                                >
                                    PDF 요청하기(준비중)
                                </button>
                            </div>
                        </div>
                        {/* end card header */}
                        {/* card body */}
                        <div className="flex-auto block py-8 pt-6 px-9">
                            <div className="overflow-x-auto">
                                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                    <thead className="align-bottom text-center">
                                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                            <th className="pb-3 min-w-[175px]">번호</th>
                                            <th className="pb-3 min-w-[100px]">일련번호</th>
                                            <th className="pb-3 min-w-[100px]">금액</th>
                                            <th className="pb-3 pr-12 min-w-[175px]">구분</th>
                                            <th className="pb-3 pr-12 min-w-[100px]">이름</th>
                                            <th className="pb-3 min-w-[50px]">일자</th>
                                            <th className="pb-3 min-w-[50px]">지출방법</th>
                                            <th className="pb-3 min-w-[50px]">상세내용</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item: AllData, index: number) => (
                                            <tr key={item.uuid} className="border-b border-dashed last:border-b-0 text-center">
                                                <td className="p-3 pl-0">{(page - 1) * pageSize + index + 1}</td>
                                                <td className="p-3 pr-0">{item.serielnumbers}</td>
                                                <td className="p-3 pr-0">{useCommaFormat(item.amounts)}원</td>
                                                <td className={`p-3 pr-12 ${item.transactiontype === '후원' ? 'text-pastelRed' : item.transactiontype === '지출' ? 'text-lightSeaGreen' : ''}`}>
                                                    {item.transactiontype}
                                                </td>
                                                <td className="p-3 pr-0">{item.securedname}</td>
                                                <td className="p-3 pr-0">{new Date(item.datetime).toLocaleDateString()}</td>
                                                <td className="p-3 pr-0">{item.spendingmethods}</td>
                                                <td className="p-3 pr-0">
                                                    {item.transactiontype === '후원' || item.transactiontype === '지출' ? (
                                                        <button
                                                            onClick={() => handleDetailsClick(item.transactiontype, item.uuid)}
                                                            className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center"
                                                        >
                                                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    ) : null}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* end card body */}
                    </div>
                </div>
            </div>
            <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
                <p className="text-sm text-slate-500 py-1"> 문의사항이 있으실 경우 일련번호로 문의주시면 빠른 답변이 가능합니다. </p>
            </div>
            <div className="flex justify-center my-4">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-100"
                >
                    이전
                </button>
                <span className="px-4 py-2 mx-1">{page}</span>
                <button
                    onClick={() => setPage((prev) => (items.length < pageSize ? prev : prev + 1))}
                    disabled={items.length < pageSize}
                    className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-100"
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default SpreadSheet;