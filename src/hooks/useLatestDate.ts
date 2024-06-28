import { fetchLatestDatetime } from './../api/api';
import { useQuery } from "@tanstack/react-query";

export const useLatestDate = () => {
    return useQuery({
        queryKey: ['LatestDate'],
        queryFn: fetchLatestDatetime,
        staleTime: Infinity,
    });
};