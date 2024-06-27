import { useQuery } from '@tanstack/react-query';
import { fetchAllData } from '../api/api';

const useBankStatement = () => {
    return useQuery({
        queryKey: ['bankstatement'],
        queryFn: fetchAllData,
        staleTime: Infinity,
    });
};

export default useBankStatement;