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
      <h5 className="flex font-bold w-full justify-center text-[22px] text-black absolute top-16">
        cro<span className="text-white">X</span>ple
      </h5>
      <div className="relative flex w-full max-w-sm ">
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
            <div className=" w-[352px] flex flex-col mx-auto ">
              <h1 className="text-white text-2xl font-semibold text-center mb-4 mt-[140px]">
                " 어디서든 이어주는
                <br />
                운동 친구 매칭 플랫폼 "
              </h1>
              <h3 className="text-white text-sm text-center mb-14">
                홍트레이닝이 크로플로 새롭게 단장했어요 💪🏻
              </h3>
              <div className="flex space-x-2 mx-auto">
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
            <div className=" w-[352px] mx-auto flex flex-col justify-center bg-white rounded-xl px-4 py-5 mb-10 space-y-3">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm mb-1">운영 기간</span>
                <span>N월 NN일부터 N월 NN일</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">매칭 인원</span>
                <span>일대일 매칭</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">신청 기간</span>
                <span>매월 둘째 주, 넷째 주 금요일까지</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">이용 방법</span>
                <span>매칭이 완료되면 카톡방을 개설해드려요.</span>
                <span>이후 자유롭게 날짜 및 장소를 조율합니다.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">주의 사항</span>
                <span>1회 신청은 매칭 1회로 소진됩니다.</span>
                <span>다음 회차에 매칭을 원한다면 재신청 해주세요.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">참여 대상</span>
                <span>👍🏻 서로 몰랐던 운동정보를 공유하고 싶어요</span>
                <span>👍🏻 혼자서는 힘든 중량을 파트너와 돌파할래요</span>
                <span>👍🏻 PT는 불편하고 부담스러워요</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {start && (
          <div
            className="w-full absolute bottom-[-90px] cursor-pointer mx-auto flex justify-center"
            // onClick={handleClose}
          >
            <span className="w-full text-center mx-4 py-3 px-10 text-xl font-semibold   bg-white border-2 border-[#E15162] text-gray-300 rounded-xl">
              시작할래요
            </span>
          </div>
        )}
        {!start && (
          <div
            className="w-full absolute bottom-[-90px] cursor-pointer mx-auto flex justify-center"
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
