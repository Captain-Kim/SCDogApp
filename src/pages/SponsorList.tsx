import { useSponsorList } from '../hooks/useSponsorList';
import { Link } from 'react-router-dom';
import { useCommaFormat } from '../hooks/useCommaFormat';
import LoadingSpinner from '../components/Loading';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLatestDate } from '../hooks/useLatestDate';

const SponsorList = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const { data: sponsors, isFetching, fetchNextPage, hasNextPage, error } = useSponsorList();
  const { data: latestDate } = useLatestDate();
  useEffect(
    () => {
      if (!(inView && hasNextPage)) return;
      fetchNextPage();
    }
    , [hasNextPage, inView, fetchNextPage]);

  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">후원자 목록</h1>
      <p>최근 업데이트 일: {latestDate ? new Date(latestDate).toLocaleDateString() : '데이터를 불러오는 중입니다...'}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sponsors && sponsors.map((sponsor) => (
          <Link to={`/sponsorlist/detail/${sponsor.uuid}`} key={sponsor.uuid}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 border border-gray-300">
              <h2 className="text-xl font-semibold mb-2">{sponsor.name}</h2>
              <h2 className="text-xl font-semibold mb-2 text-pastelRed">{useCommaFormat(sponsor.amounts)}원</h2>
              <p className="text-gray-700">{sponsor.serielnumbers}</p>
              <p className="text-gray-700">{new Date(sponsor.datetime).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
        {isFetching && <LoadingSpinner />}

        <div className='h-10' ref={ref}></div>
      </div>
    </div>
  );
};

export default SponsorList;