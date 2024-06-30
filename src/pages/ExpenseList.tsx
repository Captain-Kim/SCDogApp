import { useExpenseList } from '../hooks/useExpenseList';
import { Link } from 'react-router-dom';
import { useCommaFormat } from '../hooks/useCommaFormat';
import LoadingSpinner from '../components/Loading';
import { Expense } from '../types/type';
import { useLatestDate } from '../hooks/useLatestDate';

const ExpenseList = () => {
  const { data, error, isPending } = useExpenseList();
  const expenses = data as Expense[];

  const { data: latestDate } = useLatestDate();

  console.log('익스펜스', expenses);

  if (isPending) return <div><LoadingSpinner /></div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">

      <div className='m-12 space-y-6'>
        <div className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert">
          <p className="font-bold">계속 업데이트 중입니다!</p>
          <p className="text-sm">지출내역은 자료의 양이 많아 반영에 시간이 다소 소요되고 있습니다. 양해 부탁드립니다!</p>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center">지출 목록</h1>
      <p>최근 업데이트 일: {latestDate ? new Date(latestDate).toLocaleDateString() : '데이터를 불러오는 중입니다...'}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {expenses && expenses.map((expense) => (
          <Link to={`/expenselist/detail/${expense.uuid}`} key={expense.uuid}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 border border-gray-300">
              <h2 className="text-xl font-semibold mb-2 text-aliceBlue">{useCommaFormat(expense.amounts)}원</h2>
              <p className=" font-semibold mb-2">{expense.serielnumbers}</p>
              <div className="h-28">
                <p className="text-gray-700">{expense.details.content[0]}</p>
              </div>
              <p className="text-gray-700">{new Date(expense.datetime).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;