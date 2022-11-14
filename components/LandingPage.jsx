import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { showFirstState } from '../atoms/modalAtom';
import tw from 'tailwind-styled-components';

function LandingPage() {
  const [showFirst, setShowFirst] = useRecoilState(showFirstState);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
    }, 1000);
  }, []);

  // const [showFirst, setShowFirst] = useState(false);

  return (
    <div>
      <div
        className={`flex flex-col from-[#E15162] to-[#EE7048] bg-gradient-to-t w-screen h-screen mx-auto justify-center ${
          showFirst && 'hidden'
        }`}
      >
        <CenterMainLogo>
          cro<span className="text-black">X</span>ple
        </CenterMainLogo>
        <div className="flex justify-center text-center mt-8 font-semibold text-white">
          ver 1.01
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

const CenterMainLogo = tw.div`
flex font-bold w-full justify-center text-[36px] text-white`;
