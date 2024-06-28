import { useQuery } from '@tanstack/react-query';
import supabase from '../api/supabase';

export interface Sponsor {
  uuid: string;
  serielnumbers: string;
  name: string;
  datetime: string;
  amounts: number;
}

const fetchSponsorData = async () => {
  const { data, error } = await supabase
    .from('bankstatement')
    .select('uuid, serielnumbers, name, datetime, amounts')
    .eq('transactiontype','후원')
    .order('datetime', { ascending: false }); // 내림차순으로 정렬
    

  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data;
};

export const useSponsorList = () => {
  return useQuery({
    queryKey: ['sponsorList'],
    queryFn: fetchSponsorData,
    staleTime: Infinity,
  });
};