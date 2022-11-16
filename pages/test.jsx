import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import tw from 'tailwind-styled-components';

function NotePop() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };
  const [start, setStart] = useState(true);
  const toggleStart = () => {
    setStart((start) => !start);
  };
  const [isMoved, setIsMoved] = useState(false);
  const moveButtonRight = () => {
    if (isMoved === false) {
      setIsMoved(true);
    }
  };
  const moveButtonLeft = () => {
    if (isMoved === true) {
      setIsMoved(false);
    }
  };
  const moveToggle = () => {
    isMoved ? setIsMoved(false) : setIsMoved(true);
  };
  return (
    <BrandColorBg>
      <div className="relative flex w-full max-w-sm ">
        <LogoTop>
          cro<span className="text-white">X</span>ple
        </LogoTop>
        <div
          className={`cursor-pointer p-2 x w-[100%] rounded-md py-1 ${
            isMoved
              ? 'translate-x-[-120%]  ease-out duration-300'
              : 'translate-x-[0%] ease-out duration-300'
          } `}
          onClick={() => moveToggle()}
        >
          <div className=" w-[352px] flex flex-col mx-auto ">
            <WhiteMainWording>
              " 어디서든 이어주는
              <br />
              운동 친구 매칭 플랫폼 "
            </WhiteMainWording>

            <div className="flex space-x-2 mx-auto mt-10">
              <HashtagWord>#나와</HashtagWord>
              <HashtagWord>#운동하자</HashtagWord>
              <HashtagWord>#초보부터 고수까지</HashtagWord>
            </div>
          </div>
        </div>
        <button
          onClick={() => moveToggle()}
          className={`flex w-full rounded-md py-1 z-50 ${
            isMoved ? 'text-black ease-out duration-300' : 'hidden'
          }`}
        >
          <span className="mx-auto ">1개월 회원권</span>
        </button>
        {start && (
          <StartButton>
            <StartGray>시작할래요</StartGray>
          </StartButton>
        )}
        {!start && (
          <StartButton onClick={handleClose}>
            <StartRed>시작할래요</StartRed>
          </StartButton>
        )}
      </div>
    </BrandColorBg>
  );
}

export default NotePop;

const BrandColorBg = tw.div`
from-[#E15162] to-[#EE7048] bg-gradient-to-t z-30 h-screen w-screen  items-center flex justify-center  
`;

const StartButton = tw.div`
w-full items-center absolute bottom-[-90px]  cursor-pointer mx-auto flex justify-center h-16 `;

const StartGray = tw.div`
w-full  text-center mx-4 py-3 px-10 text-xl font-semibold bg-white border-2 border-[#E15162] text-gray-300 rounded-xl`;

const StartRed = tw.div`
w-full  text-center mx-4 py-3 px-10 text-xl font-semibold bg-white text-[#E15162] border-2 border-[#E15162] rounded-xl`;

const LogoTop = tw.div`
flex font-bold w-full justify-center text-[22px] text-black absolute top-[-90px] sm:text-[28px] 
`;

const WhiteMainWording = tw.div`
text-white text-2xl font-semibold text-center mb-4 mt-[140px]
`;

const HashtagWord = tw.div`
border border-white rounded-full px-2 py-1 text-white
`;

const WeakTitle = tw.div`
text-gray-400 text-sm mb-1
`;

const SwiperWhiteBg = tw.div`
w-[352px] mx-auto flex flex-col justify-center bg-white rounded-xl px-4 py-5 mb-10 space-y-3
`;
