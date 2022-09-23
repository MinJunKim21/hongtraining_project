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
    <div open={true}>
      <div onClick={handleClose} className="cursor-pointer">
        <i>
          <GrClose />
        </i>
      </div>
      <h4>[소개]</h4>
      <p>
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
  );
}

export default NotePop;
