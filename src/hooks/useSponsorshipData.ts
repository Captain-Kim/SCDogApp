import { useQuery } from '@tanstack/react-query';
import { fetchSponsorshipData } from '../api/api';


const useSponsorshipAll = () => {
    return useQuery({
        queryKey: ['SponsorshipAll'],
        queryFn: fetchSponsorshipData,
        staleTime: Infinity,
    });
};

export default useSponsorshipAll;