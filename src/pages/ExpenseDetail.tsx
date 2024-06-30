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
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">{expenseUUID.serielnumbers}에 대한 상세 지출내역입니다.</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">잘못된 정보나, 정보 비공개 요청은 관리자에게 연락해주세요.</p>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">부족한 정보는 계속해서 업데이트 중입니다. 관리해야 할 내용이 많아 시간이 다소 소요됩니다.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">지출번호</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{expenseUUID.serielnumbers}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">지출금액</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{useCommaFormat(Math.abs(expenseUUID.amounts))} 원</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">지출일자</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{new Date(expenseUUID.datetime).toLocaleDateString()}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">지출방법</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{expenseUUID.spendingmethods}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">지출처</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{expenseUUID.securedname}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">계좌정보</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
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
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">지출내용</dt>
            {expenseUUID.details.content.map((detail, index) => (
              <dd key={index} className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {detail}
              </dd>
            ))}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">영수증/청구서</dt>
            {/* <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd> */}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">현장사진</dt>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default ExpenseDetail;