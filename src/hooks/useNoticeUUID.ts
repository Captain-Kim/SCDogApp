import { useQuery } from "@tanstack/react-query";
import { fetchNoticeUUID } from "../api/api";
import { Notice } from "../types/type";

export const useNoticeUUID = (uuid: string) => {
    return useQuery<Notice, Error>({
        queryKey: ['NoticeUUID', uuid],
        queryFn: () => fetchNoticeUUID(uuid),
        staleTime: Infinity,
    });
};

export default useNoticeUUID;