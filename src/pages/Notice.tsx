const Notice = () => {
  return (
    <>
    <h1 className="text-center font-bold text-4xl text-red-500">
      보안정책 강화 중
    </h1>

    <div className="flex flex-col text-2xl items-center justify-center mt-10">
      <p>2024. 07. 31. ~ 현재까지 모 동물보호단체에서 순창보호소 개인봉사자의 후원자님들에 대한</p>
      <p>정보를 제보 받는 등의 개인정보 침해 등 2차 피해가 우려되는 행위를 지속하고 있는 것으로 파악되어</p>
      <p><span className="text-red-500 font-bold">보안 정책을 강화</span>하고 있습니다.</p>
    </div>

    <div className="flex flex-col text-2xl items-center justify-center mt-10">
      <p>해당 인물들이 후원자님들의 정보를 편취하여 <span className="text-red-500 font-bold">2차 피해가 발생</span>하는 것을 예방하기 위해</p>
      <p>모든 페이지에 대한 인증/인가 절차를 추가하고 있습니다.</p>
    </div>

    <div className="flex flex-col text-2xl items-center justify-center mt-10">
      <p>본 개인 봉사자는 개인 감정에 앞서</p>
      <p>아무런 정황과 증거 없이 후원자들에 대한 정보를 물색하고 있는 해당 단체에 우려의 목소리를 보내며</p>
      <p>좋은 마음으로 후원해주신, 후원자님들께 2차 피해가 가지 않도록 <span className="text-red-500 font-bold">인증 절차를 강화</span>하고</p>
      <p><span className="text-red-500 font-bold">후원금 사용 내역은 인증된 후원자만 열람 가능</span>하도록 수일 내 사이트를 재공사하여 배포하겠습니다.</p>
    </div>

    <div className="flex flex-col text-2xl items-center justify-center mt-10">
      <p>인증/인가 절차를 추가함과 동시에 지출내역에 대한 영수, 사용 내역 등을</p>
      <p>확인하실 수 있도록 업데이트까지 겸하여 사이트를 오픈하겠습니다.</p>
    </div>

    <div className="flex flex-col text-2xl items-center justify-center mt-10">
      <p><span className="font-bold">개인봉사자 올림</span></p>
    </div>

    </>
  );
};

export default Notice;