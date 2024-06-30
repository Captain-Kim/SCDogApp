import { useQuery } from "@tanstack/react-query";
import { fetchExpenseUUID } from "../api/api";
import { Expense } from "../types/type";

// uuid는 ExpenseDetail 페이지에서 URL 파라미터 매개 변수로 받아옴
export const useExpenseUUID = (uuid: string) => {
    return useQuery<Expense, Error>({
      queryKey: ['ExpenseUUID', uuid],
      queryFn: () => fetchExpenseUUID(uuid),
      staleTime: Infinity,
    });
  };