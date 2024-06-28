import { useExpenseList } from '../hooks/useExpenseList';
import { Link } from 'react-router-dom';
import { useCommaFormat } from '../hooks/useCommaFormat';
import LoadingSpinner from '../components/Loading';

const ExpenseList = () => {
  const { data: sponsors, error, isPending } = useExpenseList();

  if (isPending) return <div><LoadingSpinner/></div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">후원자 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sponsors && sponsors.map((sponsor) => (
          <Link to={`/sponsorlist/detail/${sponsor.uuid}`} key={sponsor.uuid}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">{sponsor.name}</h2>
              <h2 className="text-xl font-semibold mb-2 text-pastelRed">{useCommaFormat(sponsor.amounts)}원</h2>
              <p className="text-gray-700">{sponsor.serielnumbers}</p>
              <p className="text-gray-700">{new Date(sponsor.datetime).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;