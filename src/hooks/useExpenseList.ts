import { useQuery } from '@tanstack/react-query';
import supabase from '../api/supabase';

// export interface Expense {
//   uuid: string;
//   serielnumbers: string;
//   name: string;
//   datetime: string;
//   amounts: number;
// }

const fetchExpenseData = async () => {
  const { data, error } = await supabase
    .from('bankstatement')
    .select('uuid, serielnumbers, name, datetime, amounts, details, accountnumber, spendingmethods, receiptpics, bankname')
    .eq('transactiontype','지출')
    .order('datetime', { ascending: false }); // 내림차순으로 정렬
    

  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data;
};

export const useExpenseList = () => {
  return useQuery({
    queryKey: ['ExpenseList'],
    queryFn: fetchExpenseData,
    staleTime: Infinity,
  });
};