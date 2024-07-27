import supabase from "./supabase";
import { Expense } from "../types/type";

// 전체 data fetch
export const fetchAllData = async ({ page, pageSize }: { page: number, pageSize: number }) => {
  const { data, error } = await supabase
    .from('bankstatement')
    .select('*')
    .order('datetime', { ascending: true }) // 오름차순, 오래된 순서
    .range((page - 1) * pageSize, page * pageSize - 1); // 페이지 범위 설정

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
const ITEMS_PER_PAGE = 20; // 스크롤 한 번 당 fetch할 데이터의 개수

export const fetchExpenseData = async (page: number): Promise<Expense[]> => {
  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE - 1;

  const { data, error }: { data: Expense[] | null; error: unknown } = await supabase
    .from('bankstatement')
    .select('uuid, serielnumbers, name, datetime, amounts, securedname, securedaccountnumber, spendingmethods, details, receiptpics, bankname')
    .eq('transactiontype', '지출')
    .order('datetime', { ascending: false })
    .range(start, end); // 데이터 범위 설정

  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data ?? []; // null 반환 방지
};

// 특정 지출내역 fetch
export const fetchExpenseUUID = async (uuid: string) => {
  if (!uuid) {
    throw new Error('UUID가 인식되지 않았습니다.');
  }
  
  const { data, error } = await supabase
    .from('bankstatement')
    .select('uuid, serielnumbers, securedname, datetime, amounts, details, securedaccountnumber, spendingmethods, receiptpics, bankname')
    .eq('uuid', uuid)
    .single() // 단일 레코드 반환

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

// 공지글 fetch
export const fetchNoticeData = async () => {
  const { data, error } = await supabase
    .from('notice')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data;
}

// 특정 공지글 fetch
export const fetchNoticeUUID = async (uuid: string) => {
  const { data, error } = await supabase
    .from('notice')
    .select('*')
    .eq('id', uuid)
    .single();
  
  if (error) {
    throw error;
  }

  return data;
}