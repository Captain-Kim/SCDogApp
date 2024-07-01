import { fetchAllData } from '../api/api';
import { useQuery } from '@tanstack/react-query';

const useBankStatement = (page: number, pageSize: number) => {
    return useQuery({
        queryKey: ['bankstatement', page, pageSize],
        queryFn: () => fetchAllData({ page, pageSize }),
        staleTime: Infinity,
        select: (data) => data, // 데이터를 선택하는 함수 추가
    });
};

export default useBankStatement;