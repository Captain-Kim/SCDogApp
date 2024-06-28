import { fetchExpenseData } from './../api/api';
import { useQuery } from '@tanstack/react-query';

// export interface Expense {
//   uuid: string;
//   serielnumbers: string;
//   name: string;
//   datetime: string;
//   amounts: number;
// }

export const useExpenseList = () => {
  return useQuery({
    queryKey: ['ExpenseList'],
    queryFn: fetchExpenseData,
    staleTime: Infinity,
  });
};