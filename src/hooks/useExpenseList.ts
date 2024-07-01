import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchExpenseData } from '../api/api';
import { Expense } from '../types/type';

export const useExpenseList = () => {
  return useInfiniteQuery({
    initialPageParam: 0, // 초기 페이지 파라미터를 0으로 설정
    queryKey: ['ExpenseList'], // 쿼리 키를 'ExpenseList'로 설정
    getNextPageParam: (lastPage: Expense[], allPages) => {
      // 마지막 페이지가 비어있으면 더 이상 페이지가 없음을 의미
      if (lastPage.length === 0) return null;
      // 다음 페이지 파라미터로 현재까지의 페이지 수를 반환
      return allPages.length;
    },
    queryFn: ({ pageParam }: { pageParam: number }) => fetchExpenseData(pageParam), // 페이지 파라미터를 사용하여 데이터를 가져오는 함수
    select: (data) => data.pages.flat(), // 모든 페이지의 데이터를 평탄화하여 하나의 배열로 만듦
    staleTime: Infinity, // 데이터를 무한히 신선하게 유지
  });
};