import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchExpenseData} from '../api/api';
import { Expense } from '../types/type';

export const useExpenseList = () => {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ['ExpenseList'],
    getNextPageParam: (lastPage: Expense[], allPages) => {
      if (lastPage.length === 0) return null;
      return allPages.length;
    },
    queryFn: ({ pageParam }: { pageParam: number }) => fetchExpenseData(pageParam),
    select: (data) => data.pages.flat(),
    staleTime: Infinity,
  });
};