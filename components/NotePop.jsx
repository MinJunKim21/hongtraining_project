import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function NotePop() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div
      onClick={handleClose}
      className="from-[#E15162] to-[#EE7048] bg-gradient-to-t z-30 h-screen w-screen"
    >
      <div className="flex flex-col items-center bg-white mx-6 mt-24 my-auto rounded-xl shadow-xl px-4 relative">
        <div className="cursor-pointer absolute top-5 right-5">
          <i>
            <GrClose />
          </i>
        </div>
        <h4>[소개]</h4>
        <h5>홍트레이닝 시즌2</h5>

        <h4>[운영 계획]</h4>
        <p className="flex text-sm">
          ◼️ 기간 : 8월26일~10월 28일 (시즌 1 - 2022 6/26 ~ 7/22 종료)
          <br />
          ◼️ 매칭 인원 : 일대일 매칭
          <br />
          ◼️ 매칭 일시 : 매월 2,4째주 금요일 오후 9시~10시 사이
          <br />
          ◼️ 신청 기간 : 매월 2,4주 금요일까지(이후 신청은 다음회차로
          넘어갑니다)
          <br />
          ◼️ 이용 방법 : 매칭일에 카톡방 개설 및 초대 해 드림 → 톡방 안에서
          매칭자 간의 날짜 및 헬스장 조율
          <br />
          ◼️ 1회 작성은 매칭 1회로 소진. 다음 회차 매칭 원할 시 다음 회차에
          재신청
          <br />
        </p>
        <p className="flex text-sm">
          쌩초보자부터 만랩끝판왕까지 시간이 맞을 때 헬스 같이 할 친구를 만들어
          드립니다.
          <br />
          ▪️서로 몰랐던 운동정보 공유, 교류하실 분들
          <br />
          ▪️혼자서는 두려웠던 운동이나 무게를 파트너와 돌파하실 분들
          <br />
          ▪️교우들과 함께 어제보다 오늘 더 점진적으로 과부하하실 분들
          <br />
          ▪️PT는 불편하고 부담스러우셨던 분들
        </p>
      </div>
    </div>
  );
}

export default NotePop;
