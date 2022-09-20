import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Home() {
  const [peopleName, setPeopleName] = useState('');
  const [gender, setGender] = useState('man');
  const [newPeopleName, setNewPeopleName] = useState('');
  const [whyVolunteer, setWhyVolunteer] = useState('');
  const [partnerGender, setPartnerGender] = useState('');
  const [healthExperience, setHealthExperience] = useState('');
  const [partnerHealthExperience, partnerHealthExperience] = useState('');
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
      partnerhealthExperience: partnerHealthExperience,
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
      <h5>설문조사</h5>
      <div>
        <form>
          <div>
            <label>전화 연락처 or 카카오톡 ID : </label>
            <input
              onChange={(e) => {
                setPeopleName(event.target.value);
              }}
              type="text"
              placeholder="사유"
            ></input>
          </div>
          <div>
            <label>본인 성별 :</label>
            <select
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="man">남자</option>
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
              <option value="man">남자</option>
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
              <option value="basic">입문</option>
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
              <option value="all">상관없음</option>
              <option value="basic">입문</option>
              <option value="normal">보통</option>
              <option value="expert">고수</option>
            </select>
          </div>
          <div>
            <div onClick={addToList}>제출</div>
          </div>
        </form>

        <h1 className="my-10">결과 People List</h1>
        {peopleList.map((val, key) => {
          return (
            <div key={key} className="p-4">
              <div className="flex space-x-2">
                <span>Name:</span>
                <h1>{val.peopleName}</h1>
              </div>
              <div className="flex space-x-2">
                <span>Gender:</span>
                <h1>{val.gender}</h1>
              </div>
              <div className="flex space-x-2">
                <span>Partner Gender:</span>
                <h1>{val.partnerGender}</h1>
              </div>
              <div className="flex space-x-2">
                <span>사유:</span>
                <h1>{val.whyVolunteer}</h1>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="new name..."
                  onChange={(e) => {
                    setNewPeopleName(event.target.value);
                  }}
                />
                <div onClick={() => updatePeople(val._id)}>update</div>
                <div onClick={() => deletePeople(val._id)}>delete</div>
              </div>
            </div>
          );
        })}
        <div>
          <label>매칭을 신청해주신 이유 : </label>
          <input
            onChange={(e) => {
              setWhyVolunteer(event.target.value);
            }}
            type="text"
            placeholder="지원 이유"
          ></input>
        </div>
      </div>
    </div>
  );
}
