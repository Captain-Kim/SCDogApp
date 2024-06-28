import { useQuery } from '@tanstack/react-query';
import supabase from '../api/supabase';

const fetchSponsorDetail = async (uuid: string) => {
  const { data, error } = await supabase
    .from('bankstatement')
    .select('uuid, serielnumbers, name, datetime, amounts')
    .eq('uuid', uuid)
    .single();

  if (error) {
    console.error('Error fetching sponsor detail:', error);
    throw error;
  }

  return data;
};

export const useSponsorDetail = (uuid: string) => {
  return useQuery({
    queryKey: ['sponsorDetail', uuid],
    queryFn: () => fetchSponsorDetail(uuid),
    staleTime: Infinity,
  });
};