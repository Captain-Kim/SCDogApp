import { useParams } from 'react-router-dom';
import { useExpenseUUID } from '../hooks/useExpenseUUID';
import LoadingSpinner from '../components/Loading';
import { useCommaFormat } from '../hooks/useCommaFormat';

const ExpenseDetail = () => {
  const { uuid } = useParams<{ uuid: string }>();

  if (!uuid) {
    return <div>Error: UUID is missing</div>;
  }

  const { data: expenseUUID, error, isPending } = useExpenseUUID(uuid);

  if (isPending) return <div><LoadingSpinner /></div>;
  if (error) return <div>Error loading data: {error.message}</div>;
  if (!expenseUUID) {
    return <div>No expense found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-2">{expenseUUID.serielnumbers}에 대한 상세 지출내역입니다.</h3>
          <p className="text-sm leading-6 text-gray-500">잘못된 정보나, 정보 비공개 요청은 관리자에게 연락해주세요.</p>
          <p className="text-sm leading-6 text-gray-500">부족한 정보는 계속해서 업데이트 중입니다. 관리해야 할 내용이 많아 시간이 다소 소요됩니다.</p>
        </div>
        <div className="mt-6 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">지출번호</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-2">{expenseUUID.serielnumbers}</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">지출금액</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-2">{useCommaFormat(Math.abs(expenseUUID.amounts))} 원</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">지출일자</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-2">{new Date(expenseUUID.datetime).toLocaleDateString()}</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">지출방법</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-2">{expenseUUID.spendingmethods}</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">지출처</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-2">{expenseUUID.securedname}</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">계좌정보</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-2">
                <table className="table-auto w-full">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 font-medium leading-6 text-gray-900">은행명</td>
                      <td className="px-4 py-2 leading-6 text-gray-700">{expenseUUID.bankname}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium leading-6 text-gray-900">계좌번호</td>
                      <td className="px-4 py-2 leading-6 text-gray-700">{expenseUUID.securedaccountnumber}</td>
                    </tr>
                  </tbody>
                </table>
              </dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">지출내용</dt>
              <dd className="col-span-2">
                <ul className="list-disc pl-5 space-y-1">
                  {expenseUUID.details.content.map((detail, index) => (
                    <li key={index} className="text-sm leading-6 text-gray-700">{detail}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">영수증/청구서</dt>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">현장사진</dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDetail;