import { useState, useEffect } from "react";
import useSponsorshipAll from "../hooks/useSponsorshipData";
import { useCommaFormat } from "../hooks/useCommaFormat";
import LoadingSpinner from "../components/Loading";
import { useLatestDate } from "../hooks/useLatestDate";

interface Stat {
  id: number;
  name: string;
  value: string | number;
}

const initialStats: Stat[] = [
  { id: 1, name: '총 후원 금액', value: 0 },
  { id: 2, name: '총 지출 금액', value: 0 },
  { id: 3, name: '계좌 실제 잔액', value: 0 },
  { id: 4, name: '총 책임비 입금 금액', value: 0 },
  { id: 5, name: '총 책임비 반환 금액', value: 0 },
  { id: 6, name: '책임비 잔여 금액', value: 0 },
  { id: 7, name: '총 이자 금액', value: 0 },
];

export default function BankStatement() {
  const { data: sponsorshipAll, error, isPending } = useSponsorshipAll();
  const { data: latestDate } = useLatestDate();

  const [stats, setStats] = useState<Stat[]>(initialStats);

  useEffect(() => {
    if (sponsorshipAll) {
      const totalAmount = sponsorshipAll.reduce((sum, item) => sum + item.amounts, 0);

      const sponsorTotal = sponsorshipAll
        .filter((item) => item.transactiontype === '후원')
        .reduce((sum, item) => sum + item.amounts, 0);

      const expenseTotal = sponsorshipAll
        .filter((item) => item.transactiontype === '지출')
        .reduce((sum, item) => sum + item.amounts, 0);

      const responsibilityDepositTotal = sponsorshipAll
        .filter((item) => item.transactiontype === '책임비입금')
        .reduce((sum, item) => sum + item.amounts, 0);

      const responsibilityReturnTotal = sponsorshipAll
        .filter((item) => item.transactiontype === '책임비반환')
        .reduce((sum, item) => sum + item.amounts, 0);

      const responsibilityBalances = responsibilityDepositTotal + responsibilityReturnTotal;

      const interestTotal = sponsorshipAll
        .filter((item) => item.transactiontype === '이자')
        .reduce((sum, item) => sum + item.amounts, 0);

      const updatedStats: Stat[] = [
        { id: 1, name: '총 후원 금액', value: useCommaFormat(sponsorTotal) + '원' },
        { id: 2, name: '총 지출 금액', value: useCommaFormat(Math.abs(expenseTotal)) + '원' },
        { id: 3, name: '계좌 실제 잔액', value: useCommaFormat(totalAmount) + '원' },
        { id: 4, name: '총 책임비 입금 금액', value: useCommaFormat(responsibilityDepositTotal) + '원' },
        { id: 5, name: '총 책임비 반환 금액', value: useCommaFormat(Math.abs(responsibilityReturnTotal)) + '원' },
        { id: 6, name: '책임비 잔여 금액', value: useCommaFormat(responsibilityBalances) + '원 (' + (responsibilityBalances / 200000) + ' 마리)' },
        { id: 7, name: '총 이자 금액', value: useCommaFormat(interestTotal) + '원' },
      ];

      setStats(updatedStats);
    }
  }, [sponsorshipAll]);

  if (isPending) return <div><LoadingSpinner /></div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div className=" py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">후원계좌 전체 내역</h1>
        <p>최근 업데이트 일: {latestDate ? new Date(latestDate).toLocaleDateString() : '데이터를 불러오는 중입니다...'}</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-300"
            >
              <dt className="text-sm font-medium text-gray-500">{stat.name}</dt>
              <dd className={`mt-1 text-2xl font-semibold 
              ${stat.name
                  === '총 후원 금액' ? 'text-pastelRed' : stat.name
                  === '총 지출 금액' ? 'text-argentinianBlue' : stat.name
                  === '계좌 실제 잔액' ? 'text-lightSeaGreen' : 'text-gray-900'
                }`
              }>
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}