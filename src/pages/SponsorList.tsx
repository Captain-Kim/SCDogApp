import useSponsorshipAll from "../hooks/useSponsorshipData";
import { useState, useEffect } from "react";
import { useCommaFormat } from "../hooks/useCommaFormat";

const SponsorList = () => {
  const { data: sponsorshipAll, error, isLoading } = useSponsorshipAll();
  
  const [sponsor, setSponsor] = useState(0);
  const [expense, setExpense] = useState(0);
  const [responsibilityDeposit, setResponsibilityDeposit] = useState(0);
  const [responsibilityReturn, setResponsibilityReturn] = useState(0);
  const [interest, setInterest] = useState(0);

  useEffect(() => {
    if (sponsorshipAll) {
      const sponsorTotal = sponsorshipAll
        .filter((item) => item.transactiontype === '후원')
        .reduce((sum, item) => sum + item.amounts, 0);
      setSponsor(sponsorTotal);

      const expenseTotal = sponsorshipAll
        .filter((item) => item.transactiontype === '지출')
        .reduce((sum, item) => sum + item.amounts, 0);
      setExpense(expenseTotal);

      const responsibilityDepositTotal = sponsorshipAll
        .filter((item) => item.transactiontype === '책임비입금')
        .reduce((sum, item) => sum + item.amounts, 0);
      setResponsibilityDeposit(responsibilityDepositTotal);

      const responsibilityReturnTotal = sponsorshipAll
        .filter((item) => item.transactiontype === '책임비반환')
        .reduce((sum, item) => sum + item.amounts, 0);
      setResponsibilityReturn(responsibilityReturnTotal);

      const interestTotal = sponsorshipAll
        .filter((item) => item.transactiontype === '이자')
        .reduce((sum, item) => sum + item.amounts, 0);
      setInterest(interestTotal);
    }
  }, [sponsorshipAll]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <>
      <h1>스폰서리스트 페이지</h1>
      <div>총 후원 금액: {useCommaFormat(sponsor)}원</div>
      <div>총 지출 금액: {useCommaFormat(expense)}원</div>
      <div>총 책임비 입금 금액: {useCommaFormat(responsibilityDeposit)}원</div>
      <div>총 책임비 반환 금액: {useCommaFormat(responsibilityReturn)}원</div>
      <div>총 이자 금액: {useCommaFormat(interest)}원</div>
    </>
  );
};

export default SponsorList;