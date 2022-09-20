import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Home() {
  const [peopleName, setPeopleName] = useState('');
  const [gender, setGender] = useState('man');
  const [newPeopleName, setNewPeopleName] = useState('');
  const [whyVolunteer, setWhyVolunteer] = useState('기입 X');
  const [partnerGender, setPartnerGender] = useState('man');
  const [healthExperience, setHealthExperience] = useState('basic');
  const [partnerHealthExperience, setPartnerHealthExperience] = useState('all');
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    Axios.get('https://hongtrainingbe.herokuapp.com/read').then((response) => {
      setPeopleList(response.data);
    });
  }, []);
  console.log(peopleName);

  const addToList = () => {
    Axios.post('https://hongtrainingbe.herokuapp.com/insert', {
      peopleName: peopleName,
      gender: gender,
      partnerGender: partnerGender,
      healthExperience: healthExperience,
      partnerHealthExperience: setPartnerHealthExperience,
      whyVolunteer: whyVolunteer,
    });
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
                setPeopleName(event.target.value);
              }}
              type="text"
              placeholder=""
            ></input>
          </div>
          <div>
            <label>본인 성별 :</label>
            <select
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="man" selected="selected">
                남자
              </option>
              <option value="woman">여자</option>
            </select>
          </div>
          <div>
            <label>파트너 성별 :</label>
            <select
              onChange={(e) => {
                setPartnerGender(e.target.value);
              }}
            >
              <option value="man" selected="selected">
                남자
              </option>
              <option value="woman">여자</option>
              <option value="both">상관없음</option>
            </select>
          </div>
          <div>
            <label>운동경력 :</label>
            <select
              onChange={(e) => {
                setHealthExperience(e.target.value);
              }}
            >
              <option value="basic" selected="selected">
                입문
              </option>
              <option value="normal">보통</option>
              <option value="expert">고수</option>
            </select>
          </div>
          <div>
            <label>파트너 운동경력 :</label>
            <select
              onChange={(e) => {
                setPartnerHealthExperience(e.target.value);
              }}
            >
              <option value="all" selected="selected">
                상관없음
              </option>
              <option value="basic">입문</option>
              <option value="normal">보통</option>
              <option value="expert">고수</option>
            </select>
          </div>
          <div>
            <div onClick={addToList}>제출</div>
          </div>
          <div>
            <label>매칭을 신청해주신 이유 : </label>
            <input
              onChange={(e) => {
                setWhyVolunteer(event.target.value);
              }}
              type="text"
              placeholder="짧게라도 부탁드려요!"
            ></input>
          </div>
        </form>

        <h1 className="my-10">결과 People List</h1>
        {peopleList.map((val, key) => {
          return (
            <div key={key} className="p-4">
              <div className="flex space-x-2">
                <span>연락처:</span>
                <h1>{val.peopleName}</h1>
              </div>
              <div className="flex space-x-2">
                <span>본인 성별:</span>
                <h1>{val.gender}</h1>
              </div>
              <div className="flex space-x-2">
                <span>파트너 성별:</span>
                <h1>{val.partnerGender}</h1>
              </div>
              <div className="flex space-x-2">
                <span>본인 운동 경력:</span>
                <h1>{val.healthExperience}</h1>
              </div>
              <div className="flex space-x-2">
                <span>희망 상대 운동 경력:</span>
                <h1>{val.partnerHealthExperience}</h1>
              </div>
              <div className="flex space-x-2">
                <span>지원 이유:</span>
                <h1>{val.whyVolunteer}</h1>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="변경할 새로운 연락처"
                  onChange={(e) => {
                    setNewPeopleName(event.target.value);
                  }}
                />
                <div onClick={() => updatePeople(val._id)}>update</div>
                <div onClick={() => deletePeople(val._id)}>delete</div>
              </div>
              <div className="flex space-x-2">
                <span>지원서 제출 시간:</span>
                <h1>{val.createdAt}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
