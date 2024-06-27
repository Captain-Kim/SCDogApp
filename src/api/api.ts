import supabase from "./supabase";

// 전체 data fetch
export const fetchAllData = async () => {
    const { data, error } = await supabase
        .from('bankstatement')
        .select('*');

    if (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

    return data;
};

// 합계 계산용 fetch
export const fetchSponsorshipData = async () => {
    const { data, error } = await supabase
      .from('bankstatement')
      .select('amounts, transactiontype')
    //   .eq('transactiontype', '후원');
  
    if (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  
    return data;
  };