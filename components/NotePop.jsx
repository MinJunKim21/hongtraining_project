import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
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

function NotePop() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="from-[#E15162] to-[#EE7048] bg-gradient-to-t z-30 h-screen w-screen my-auto items-center flex flex-col mx-auto justify-center relative">
      <div className="relative flex w-full ">
        <Swiper
          pagination={{ clickable: true }}
          mousewheel
          // scrollbar={{ draggable: true }}
          keyboard
          modules={[Pagination]}
          allowTouchMove
          threshold={20}
          speed={500}
        >
          <SwiperSlide>
            <div className=" w-[300px] flex flex-col mx-auto ">
              <h1>"어디서든 이어주는 운동 친구 매칭 플랫폼"</h1>
              <h3>홍트레이닝이 크로플로 새롭게 단장했어요💪🏻</h3>
              <div className="flex">
                <span>#나와</span>
                <span>#운동하자</span>
                <span>#초보부터 고수까지</span>
              </div>
            </div>
            <div
              className="absolute bottom-[10%] cursor-pointer mx-auto flex justify-center"
              // onClick={handleClose}
            >
              <span className="py-2 px-10 text-lg font-semibold  mt-8 mb-6 bg-white border-2 border-[#E15162] rounded-full">
                시작할래요
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-[300px] mx-auto flex flex-col justify-center bg-white rounded-xl">
              <span>운영 기간</span>
              <span>N월 NN일부터 N월 NN일</span>
              <span>운영 기간</span>
              <span>N월 NN일부터 N월 NN일</span>
              <span>운영 기간</span>
              <span>N월 NN일부터 N월 NN일</span>
              <span>운영 기간</span>
              <span>N월 NN일부터 N월 NN일</span>
            </div>
            <div
              className="absolute bottom-[10%] cursor-pointer mx-auto flex justify-center"
              onClick={handleClose}
            >
              <span className="py-2 px-10 text-lg font-semibold  mt-8 mb-6 bg-white border-2 border-[#E15162] rounded-full">
                시작할래요
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default NotePop;
