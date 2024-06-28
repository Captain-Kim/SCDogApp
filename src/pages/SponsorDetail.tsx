import { useParams } from 'react-router-dom';
import { useSponsorDetail } from '../hooks/useSponsorDetail';
import LoadingSpinner from '../components/Loading';

const SponsorDetail = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { data: sponsor, error, isPending } = useSponsorDetail(uuid!);

  if (isPending) return <div><LoadingSpinner/></div>;
  if (error) return <div>Error loading sponsor detail: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-md text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg"></div>
        <div className="relative z-10">
          <div className="flex justify-end">
            <p className="text-gray-700 dark:text-gray-300 text-right">
              {sponsor?.serielnumbers}
            </p>
          </div>
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">후원 감사장</h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
            <strong>{sponsor?.name}</strong> 님,
          </p>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
            따뜻한 마음 감사합니다.
          </p>
          <div className="dark:bg-gray-700 p-6 rounded-lg mb-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2"><strong className="text-5xl text-argentinianBlue">{sponsor?.amounts.toLocaleString()}</strong> 원</p>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            보내주신 성원은 꼭 필요한 곳에 사용하겠습니다.
          </p>
          <p className="text-1x1 text-gray-700 dark:text-gray-300 mt-10">
            순창군유기견임시보호소 개인 봉사자 드림
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{new Date(sponsor?.datetime).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default SponsorDetail;