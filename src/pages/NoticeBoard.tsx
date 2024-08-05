// import { useNotice } from '../hooks/useNotice';
// import { Link, useParams } from 'react-router-dom';
// import LoadingSpinner from '../components/Loading';
// import { Notice } from '../types/type';

// const NoticeBoard = () => {
//     const { uuid } = useParams<{ uuid: string }>();
//     const { data: notice, error } = useNotice<Notice>();
//     if (error) return <div>Error: {error.message}</div>;
//     if (!notice) return <div><LoadingSpinner/></div>;

//     return (
//         <div className="container mx-auto p-4">
//             <table className="min-w-full bg-white">
//                 <thead>
//                     <tr>
//                         <th className="py-2">번호</th>
//                         <th className="py-2">제목</th>
//                         <th className="py-2">작성자</th>
//                         <th className="py-2">작성일</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr key={notice.id} className="border-b"> 
//                         <td className="py-2 text-center">1</td>
//                         <td className="py-2">
//                             <Link 
//                                 to={{
//                                     pathname: `/notice/${notice.id}`
//                                 }}
//                                 className="text-sm font-bold cursor-pointer"
//                             >
//                                 {notice.title}
//                             </Link>
//                         </td>
//                         <td className="py-2 text-center">{notice.author}</td>
//                         <td className="py-2 text-center">{notice.created_at ? new Date(notice.created_at).toLocaleDateString() : 'N/A'}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default NoticeBoard;