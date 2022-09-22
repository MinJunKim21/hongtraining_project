import { useState, useEffect } from 'react';
import Axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [peopleName, setPeopleName] = useState('');
  const [gender, setGender] = useState('man');
  const [newPeopleName, setNewPeopleName] = useState('');
  const [whyVolunteer, setWhyVolunteer] = useState('');
  const [partnerGender, setPartnerGender] = useState('man');
  const [healthExperience, setHealthExperience] = useState('basic');
  const [partnerExperience, setPartnerExperience] = useState('both');
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    Axios.get('https://hongtrainingbe.herokuapp.com/read').then((response) => {
      setPeopleList(response.data);
    });
  }, [peopleList]);

  const addToList = () => {
    Axios.post('https://hongtrainingbe.herokuapp.com/insert', {
      peopleName: peopleName,
      gender: gender,
      partnerGender: partnerGender,
      healthExperience: healthExperience,
      partnerExperience: partnerExperience,
      whyVolunteer: whyVolunteer,
    });
  };

  const pageRedirect = () => {
    window.location.href = '/manager';
  };

  const updatePeople = (id) => {
    Axios.put('https://hongtrainingbe.herokuapp.com/update', {
      id: id,
      newPeopleName: newPeopleName,
    });
  };

  const deletePeople = (id) => {
    Axios.delete(`https://hongtrainingbe.herokuapp.com/delete/${id}`, {
      id: id,
      newPeopleName: newPeopleName,
    });
  };

  return (
    <div className="flex flex-col mx-auto justify-center mt-10">
      <div className="m-10">
        <h5>홍트레이닝 시즌2</h5>
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
        <h4>[운영 계획]</h4>
        <p>
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
        <h4>[참고]</h4>
        <p>
          해당 링크는 '홍익대학교 에브리타임' 에만 게시하였습니다. (🚫외부
          유출을 엄격히 금지합니다.🚫)
          <br /> 주최자는 이름/나이/사진 등의 불필요한 개인정보를 요구하지
          않습니다.
          <br /> 단체 톡방 주소 https://open.kakao.com/o/gl7dFMpe
          <br />
          입장코드 : ht1234
        </p>
        <h4>[Update Note (22.08.26)]</h4>
        <p>
          1. 방학 기간 중엔 매주 매칭을 진행하였으나, 학기 시작으로 2, 4째 주
          매칭으로 변경하였습니다. <br />
          2. 연락을 받지 못하신 분은 연락처 오기재입니다.(ㅠㅠ) <br />
          3. 방학 동안은 매칭 안되신 분들 주최자가 함께 운동 했었는데, 이번 학기
          중은 어려울 것 같습니다.(ㅠㅠㅠ) <br />
          4. 개강을 했기 때문에 지역 설정은 삭제했습니다. <br />
        </p>
      </div>
      <div className="m-10">
        <form>
          <div>
            <label>전화 연락처 or 카카오톡 ID : </label>
            <input
              onChange={(e) => {
                setPeopleName(e.target.value);
              }}
              type="text"
              placeholder=""
            ></input>
          </div>

          <div>
            <span>본인 성별 :</span>
            <input
              type="radio"
              id="man"
              name="gender"
              value="man"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label for="man">남자</label>

            <input
              type="radio"
              id="woman"
              name="gender"
              value="woman"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label for="woman">여자</label>
          </div>

          <div>
            <label>파트너 성별 :</label>
            <input
              type="radio"
              id="both"
              name="partnerGender"
              value="both"
              onChange={(e) => {
                setPartnerGender(e.target.value);
              }}
            />
            <label for="both">상관없음</label>
            <input
              type="radio"
              id="partnerman"
              name="partnerGender"
              value="man"
              onChange={(e) => {
                setPartnerGender(e.target.value);
              }}
            />
            <label for="partnerman">남자</label>
            <input
              type="radio"
              id="partnerwoman"
              name="partnerGender"
              value="woman"
              onChange={(e) => {
                setPartnerGender(e.target.value);
              }}
            />
            <label for="partnerwoman">여자</label>
          </div>

          <div>
            <label>운동경력 :</label>
            <input
              type="radio"
              id="basic"
              name="healthExperience"
              value="basic"
              onChange={(e) => {
                setHealthExperience(e.target.value);
              }}
            />
            <label for="basic">입문</label>
            <input
              type="radio"
              id="normal"
              name="healthExperience"
              value="normal"
              onChange={(e) => {
                setHealthExperience(e.target.value);
              }}
            />
            <label for="normal">보통</label>
            <input
              type="radio"
              id="expert"
              name="healthExperience"
              value="expert"
              onChange={(e) => {
                setHealthExperience(e.target.value);
              }}
            />
            <label for="expert">고수</label>
          </div>

          <div>
            <label>파트너 운동경력 :</label>
            <input
              type="radio"
              id="partnerboth"
              name="partnerHealthExperience"
              value="both"
              onChange={(e) => {
                setPartnerExperience(e.target.value);
              }}
            />
            <label for="partnerboth">상관없음</label>
            <input
              type="radio"
              id="partnerbasic"
              name="partnerHealthExperience"
              value="basic"
              onChange={(e) => {
                setPartnerExperience(e.target.value);
              }}
            />
            <label for="partnerbasic">입문</label>
            <input
              type="radio"
              id="partnernormal"
              name="partnerHealthExperience"
              value="normal"
              onChange={(e) => {
                setPartnerExperience(e.target.value);
              }}
            />
            <label for="partnernormal">보통</label>
            <input
              type="radio"
              id="partnerexpert"
              name="partnerHealthExperience"
              value="expert"
              onChange={(e) => {
                setPartnerExperience(e.target.value);
              }}
            />
            <label for="partnerexpert">고수</label>
          </div>

          <div>
            <label>매칭을 신청해주신 이유 : </label>
            <input
              onChange={(e) => {
                setWhyVolunteer(e.target.value);
              }}
              type="text"
              placeholder="짧게라도 부탁드려요!"
            ></input>
          </div>
          <span type="submit" onClick={addToList} className="cursor-pointer">
            제출
          </span>
        </form>
      </div>

      <Link href="/manager">
        <span className="cursor-pointer">매니저 페이지 이동</span>
      </Link>
    </div>
  );
}
