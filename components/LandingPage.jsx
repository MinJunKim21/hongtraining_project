import { useState, useEffect } from 'react';

function LandingPage() {
  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      console.log('jjj');
    }, 2000);
  }, []);

  const [showFirst, setShowFirst] = useState(false);

  return (
    <div>
      <div
        className={`flex flex-col from-[#E15162] to-[#EE7048] bg-gradient-to-t w-screen h-screen mx-auto justify-center ${
          showFirst && 'hidden'
        }`}
      >
        <h5 className="flex font-bold w-full justify-center text-3xl text-white">
          홍트레이닝 시즌2
        </h5>
        <div className="flex justify-center text-center mt-8 font-semibold text-white">
          쌩초보자부터 만랩끝판왕까지
          <br /> 시간이 맞을 때 헬스 같이 할 친구를 만들어 드립니다.
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
