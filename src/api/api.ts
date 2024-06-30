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

// 전체 지출내역 fetch
export const fetchExpenseData = async () => {
  const { data, error } = await supabase
    .from('bankstatement')
    .select('uuid, serielnumbers, securedname, datetime, amounts, details, securedaccountnumber, spendingmethods, receiptpics, bankname')
    .eq('transactiontype','지출')
    .order('datetime', { ascending: false }); // 내림차순으로 정렬
    

  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data;
};

// 최근 업데이트일 fetch
export const fetchLatestDatetime = async () => {
  const { data, error } = await supabase
    .from('bankstatement')
    .select('datetime')
    .order('datetime', { ascending: false })
    .limit(1); // 내림차순(최신순에서) 1개만 가져옴

  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data?.[0]?.datetime || null;
}