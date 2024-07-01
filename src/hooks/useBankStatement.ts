import { fetchAllData } from '../api/api';
import { useQuery } from '@tanstack/react-query';

const useBankStatement = (page: number, pageSize: number) => {
    return useQuery({
        queryKey: ['bankstatement', page, pageSize],
        queryFn: fetchAllData,
        staleTime: Infinity,
    });
};

export default useBankStatement;