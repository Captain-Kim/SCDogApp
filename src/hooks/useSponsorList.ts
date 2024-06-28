import { useInfiniteQuery } from '@tanstack/react-query';
import supabase from '../api/supabase';

export interface Sponsor {
  uuid: string;
  serielnumbers: string;
  name: string;
  datetime: string;
  amounts: number;
}

const ITEMS_PER_PAGE = 20; // 페이지당 항목 수

const fetchSponsorData = async (page: number): Promise<Sponsor[]> => {

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE - 1;

  const { data, error }: { data: Sponsor[] | null; error: any } = await supabase
    .from('bankstatement')
    .select('uuid, serielnumbers, name, datetime, amounts')
    .eq('transactiontype', '후원')
    .order('datetime', { ascending: false })
    .range(start, end); // 데이터 범위 설정


  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data ?? []; // null 반환 방지
};

export const useSponsorList = () => {

  // const [page, setPage] = useState(0); // 현재 페이지 번호를 저장할 상태

  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ['sponsorList'],
    getNextPageParam: (lastPage: Sponsor[], allPages) => {
      if (lastPage.length === 0) return null;
      return allPages.length
    },
    queryFn: ({ pageParam }: { pageParam: number }) => fetchSponsorData(pageParam),
    select: (data) => data.pages.flat(),
    staleTime: Infinity,
  });
};