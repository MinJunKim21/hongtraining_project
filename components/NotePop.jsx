import React from 'react';
import { useState } from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { GoCheck } from 'react-icons/go';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  WeakTitle,
  BrandColorBg,
  LogoTop,
  WhiteMainWording,
  HashtagWord,
  SwiperWhiteBg,
  StartButton,
  StartGray,
  StartRed,
} from '../styles/styledComponents';

function NotePop() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };
  const [start, setStart] = useState(true);
  const toggleStart = () => {
    setStart((start) => !start);
  };
  return (
    <BrandColorBg>
      <LogoTop>
        cro<span className="text-white">X</span>ple
      </LogoTop>
      <div className="relative flex w-full max-w-sm ">
        <Swiper
          className="cursor-pointer"
          pagination={{ clickable: true }}
          mousewheel
          // scrollbar={{ draggable: true }}
          keyboard
          modules={[Pagination]}
          allowTouchMove
          threshold={10}
          speed={500}
          onSlideChange={(start) => {
            toggleStart(start);
          }}
          onClick={(swiper) => {
            swiper.slideNext() || swiper.slidePrev();
          }}
        >
          <SwiperSlide>
            <div className=" w-[352px] flex flex-col mx-auto ">
              <WhiteMainWording>
                " 어디서든 이어주는
                <br />
                운동 친구 매칭 플랫폼 "
              </WhiteMainWording>
              <h3 className="text-white text-sm text-center mb-14">
                홍트레이닝이 크로플로 새롭게 단장했어요 💪🏻
              </h3>
              <div className="flex space-x-2 mx-auto">
                <HashtagWord>#나와</HashtagWord>
                <HashtagWord>#운동하자</HashtagWord>
                <HashtagWord>#초보부터 고수까지</HashtagWord>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperWhiteBg>
              <div className="flex flex-col">
                <WeakTitle>운영 기간</WeakTitle>
                <span>N월 NN일부터 N월 NN일</span>
              </div>
              <div className="flex flex-col">
                <WeakTitle>매칭 인원</WeakTitle>
                <span>일대일 매칭</span>
              </div>
              <div className="flex flex-col">
                <WeakTitle>신청 기간</WeakTitle>
                <span>매월 둘째 주, 넷째 주 금요일까지</span>
              </div>
              <div className="flex flex-col">
                <WeakTitle>이용 방법</WeakTitle>
                <span>매칭이 완료되면 카톡방을 개설해드려요.</span>
                <span>이후 자유롭게 날짜 및 장소를 조율합니다.</span>
              </div>
              <div className="flex flex-col">
                <WeakTitle>주의 사항</WeakTitle>
                <span>1회 신청은 매칭 1회로 소진됩니다.</span>
                <span>다음 회차에 매칭을 원한다면 재신청 해주세요.</span>
              </div>
              <div className="flex flex-col">
                <WeakTitle>참여 대상</WeakTitle>
                <span>👍🏻 서로 몰랐던 운동정보를 공유하고 싶어요</span>
                <span>👍🏻 혼자서는 힘든 중량을 파트너와 돌파할래요</span>
                <span>👍🏻 PT는 불편하고 부담스러워요</span>
              </div>
            </SwiperWhiteBg>
          </SwiperSlide>
        </Swiper>
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
