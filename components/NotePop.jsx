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
  const [start, setStart] = useState(true);
  const toggleStart = () => {
    setStart((start) => !start);
  };
  return (
    <div className="from-[#E15162] to-[#EE7048] bg-gradient-to-t z-30 h-screen w-screen my-auto items-center flex flex-col mx-auto justify-center relative ">
      <div className="relative flex w-full ">
        <Swiper
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
        >
          <SwiperSlide>
            <div className=" w-[300px] flex flex-col mx-auto ">
              <h1 className="text-white text-2xl font-semibold text-center mb-4 mt-14">
                " 어디서든 이어주는
                <br />
                운동 친구 매칭 플랫폼 "
              </h1>
              <h3 className="text-white text-sm text-center mb-14">
                홍트레이닝이 크로플로 새롭게 단장했어요 💪🏻
              </h3>
              <div className="flex space-x-2">
                <span className="border border-white rounded-full px-2 py-1 text-white">
                  #나와
                </span>
                <span className="border border-white rounded-full px-2 py-1 text-white">
                  #운동하자
                </span>
                <span className="border border-white rounded-full px-2 py-1 text-white">
                  #초보부터 고수까지
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-[300px] mx-auto flex flex-col justify-center bg-white rounded-xl p-4 mb-12 space-y-3">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">운영 기간</span>
                <span>N월 NN일부터 N월 NN일</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">운영 기간</span>
                <span>N월 NN일부터 N월 NN일</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">운영 기간</span>
                <span>N월 NN일부터 N월 NN일</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">운영 기간</span>
                <span>N월 NN일부터 N월 NN일</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">운영 기간</span>
                <span>N월 NN일부터 N월 NN일</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">운영 기간</span>
                <span>N월 NN일부터 N월 NN일</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {start && (
          <div
            className="w-full absolute bottom-[-120px] cursor-pointer mx-auto flex justify-center"
            // onClick={handleClose}
          >
            <span className="w-full text-center mx-4 py-3 px-10 text-xl font-semibold   bg-white border-2 border-[#E15162] text-gray-300 rounded-xl">
              시작할래요
            </span>
          </div>
        )}
        {!start && (
          <div
            className="w-full absolute bottom-[-120px] cursor-pointer mx-auto flex justify-center"
            onClick={handleClose}
          >
            <span className="w-full text-center mx-4 py-3 px-10 text-xl font-semibold bg-white text-[#E15162] border-2 border-[#E15162] rounded-xl">
              시작할래요
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotePop;
