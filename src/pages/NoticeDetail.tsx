// import { useParams } from 'react-router-dom';
// import LoadingSpinner from '../components/Loading';
// import useNoticeUUID from '../hooks/useNoticeUUID';

// const NoticeDetail = () => {
//     const { uuid } = useParams<{ uuid: string }>();
//     if (!uuid) return <div>No UUID</div>;

//     const { data: notice, isPending, error } = useNoticeUUID(uuid);

//     if (error) return <div>Error: {error.message}</div>;
//     if (isPending) return <div><LoadingSpinner/></div>;
//     if (!notice) return <div>No notice found</div>;

//     if (Array.isArray(notice)) return <div>Invalid notice data</div>;

//     return (
//         <div>
//             <h1>{notice.title}</h1>
//             <p>{notice.content}</p>
//         </div>
//     );
// };

// export default NoticeDetail;