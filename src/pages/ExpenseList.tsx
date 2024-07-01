import { useExpenseList } from '../hooks/useExpenseList';
import { Link } from 'react-router-dom';
import { useCommaFormat } from '../hooks/useCommaFormat';
import LoadingSpinner from '../components/Loading';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLatestDate } from '../hooks/useLatestDate';

const ExpenseList = () => {
  const [showAlert, setShowAlert] = useState(true);
  const { ref, inView } = useInView({ threshold: 0 });
  const { data: expenses, isFetching, fetchNextPage, hasNextPage, error } = useExpenseList();
  const { data: latestDate } = useLatestDate();

  useEffect(() => {
    if (!(inView && hasNextPage)) return;
    fetchNextPage();
  }, [hasNextPage, inView, fetchNextPage]);

  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {showAlert && (
        <div className='m-12 space-y-6'>
          <div className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3 relative" role="alert">
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setShowAlert(false)}>
              <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 5.652a1 1 0 10-1.414-1.414L10 7.172 7.066 4.238a1 1 0 00-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 001.414 1.414L10 12.828l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934z"/>
              </svg>
            </span>
            <p className="font-bold">계속 업데이트 중입니다!</p>
            <p className="text-sm">지출내역은 자료의 양이 많아 반영에 시간이 다소 소요되고 있습니다. 양해 부탁드립니다!</p>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-8 text-center">지출 목록</h1>
      <p>최근 업데이트 일: {latestDate ? new Date(latestDate).toLocaleDateString() : '데이터를 불러오는 중입니다...'}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {expenses && expenses.map((expense) => (
          <Link to={`/expenselist/detail/${expense.uuid}`} key={expense.uuid}>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-400 ease-in-out transform hover:-translate-y-2 border border-gray-300">
              <h2 className="text-xl font-semibold mb-2 text-pastelRed">{useCommaFormat(Math.abs(expense.amounts))}원</h2>
              <p className="font-semibold mb-2">{expense.serielnumbers}</p>
              <div className="h-[150px]">
                <p className="text-gray-700">{expense.details.content[0]}</p>
              </div>
              <p className="text-gray-700">{new Date(expense.datetime).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
        {isFetching && <LoadingSpinner />}
        <div className='h-10' ref={ref}></div>
      </div>
    </div>
  );
};

export default ExpenseList;