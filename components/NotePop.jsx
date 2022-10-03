import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';
import { GoCheck } from 'react-icons/go';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function NotePop() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="from-[#E15162] to-[#EE7048] bg-gradient-to-t z-30 h-screen w-screen my-auto items-center flex mx-auto justify-center">
      <div className="flex flex-col items-center bg-white mx-4 justify-center rounded-xl shadow-xl px-4 relative">
        <h5 className="my-6 text-lg font-semibold">홍트레이닝 시즌2</h5>

        <p className="flex flex-col text-sm space-y-2.5 mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#E15162]">
              <GoCheck />
              <br />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">
                기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;간 : 8월26일~10월
                28일
              </span>
              <span className="text-xs">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(시즌
                1 - 2022 6/26 ~ 7/22 종료)
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#E15162]">
              <GoCheck />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">매칭 인원 : 일대일 매칭</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#E15162]">
              <GoCheck />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">
                매칭 일시 : 매월 2,4째주 금요일 오후 9~10시 사이
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#E15162]">
              <GoCheck />
              <br />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">
                신청 기간 : 매월 2,4주 금요일까지
              </span>
              <span className="text-xs">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(이후
                신청은 다음회차로 넘어갑니다)
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#E15162]">
              <GoCheck />
              <br className="sm:hidden" />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">
                이용 방법 : 매칭일에 카톡방 개설 및 초대 해 드림 → 톡방 안에서
                매칭자 간의 날짜 및 헬스장 조율
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#E15162]">
              <GoCheck />
              <br />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">
                1회 작성은 매칭 1회로 소진.
                <br />
                다음 회차 매칭 원할 시 다음 회차에 재신청
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#E15162]">
              <GoCheck />
              <br />
              <br />
              <br />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">참여 대상 :</span>
              <div className="flex items-center space-x-1">
                <span>
                  <BsCheckAll />
                </span>
                <span>서로 몰랐던 운동정보 공유, 교류하실 분들</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>
                  <BsCheckAll />
                </span>
                <span>혼자서는 힘든 중량을 파트너와 돌파하실 분들</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>
                  <BsCheckAll />
                </span>
                <span>PT는 불편하고 부담스러우셨던 분들</span>
              </div>
            </div>
          </div>
        </p>

        <div>
          <div
            className="cursor-pointer mx-auto flex justify-center"
            onClick={handleClose}
          >
            <span className="py-2 px-10 text-lg font-semibold  mt-8 mb-6 bg-white border-2 border-[#E15162] rounded-full">
              신청하기
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotePop;
