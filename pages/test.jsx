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
import { FaCircle, FaRegCircle } from 'react-icons/fa';

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
      <div className="flex flex-col w-full max-w-sm">
        <LogoTop>
          cro<span className="text-white">X</span>ple
        </LogoTop>
        <div className="overflow-hidden w-full flex justify-center">
          <div
            className={`cursor-pointer rounded-md ${
              isMoved
                ? 'translate-x-[-50%] ease-out duration-300'
                : 'translate-x-[50%] ease-out duration-300'
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
          <div
            className={`cursor-pointer w-full mx-auto rounded-md ${
              isMoved
                ? 'translate-x-[-50%]  ease-out duration-300'
                : 'translate-x-[100%] ease-out duration-300'
            } `}
            onClick={() => moveToggle()}
          >
            <SwiperWhiteBg>
              <div className="flex flex-col">
                <WeakTitle>참여 범위</WeakTitle>
                <span>서강대, 연세대, 이화여대, 홍익대</span>
              </div>
              <div className="flex flex-col">
                <WeakTitle>매칭 인원</WeakTitle>
                <span>일대일 매칭</span>
              </div>
              <div className="flex flex-col">
                <WeakTitle>신청 기간</WeakTitle>
                <span>매주 금요일까지</span>
              </div>
              <div className="flex flex-col">
                <WeakTitle>이용 방법</WeakTitle>
                <span>매칭이 완료되면 카톡방을 개설해드려요.</span>
                <span>이후 자유롭게 날짜 및 장소를 조율합니다.</span>
              </div>
              <div className="flex flex-col">
                <WeakTitle>주의 사항</WeakTitle>
                <span>1회 신청은 매칭 1회로 소진됩니다.</span>
                {/* <span>다음 회차에 매칭을 원한다면 재신청 해주세요.</span> */}
              </div>
              <div className="flex flex-col">
                <WeakTitle>참여 대상</WeakTitle>
                <span>👍🏻 서로 몰랐던 운동정보를 공유하고 싶어요</span>
                <span>👍🏻 혼자서는 힘든 중량을 파트너와 돌파할래요</span>
                <span>👍🏻 PT는 불편하고 부담스러워요</span>
              </div>
            </SwiperWhiteBg>
          </div>
        </div>

        {isMoved ? (
          <span
            onClick={() => moveToggle()}
            className="cursor-pointer justify-center items-center text-white text-[10px] space-x-3 flex mb-6"
          >
            <FaRegCircle />
            <FaCircle />
          </span>
        ) : (
          <span
            onClick={() => moveToggle()}
            className="cursor-pointer justify-center items-center text-white text-[10px] space-x-3 flex mb-6"
          >
            <FaCircle />
            <FaRegCircle />
          </span>
        )}
        {!isMoved && (
          <StartButton>
            <StartGray>시작할래요</StartGray>
          </StartButton>
        )}
        {isMoved && (
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
from-[#E15162] to-[#EE7048] bg-gradient-to-t z-30 h-screen w-screen flex justify-center items-center 
`;

const StartButton = tw.div`
w-full items-center cursor-pointer flex justify-center h-16 `;

const StartGray = tw.div`
w-full w-[352px]  text-center py-3 px-10 text-xl font-semibold bg-white border-2 border-[#E15162] text-gray-300 rounded-xl`;

const StartRed = tw.div`
w-full  text-center mx-4 py-3 px-10 text-xl font-semibold bg-white text-[#E15162] border-2 border-[#E15162] rounded-xl`;

const LogoTop = tw.div`
flex font-bold w-full justify-center mb-8 text-[22px] text-black `;

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
w-[352px] mx-auto flex flex-col justify-center bg-white rounded-xl px-4 py-5 mb-6 space-y-3
`;
