import { useState, useEffect } from 'react';
import Axios from 'axios';
import MatchingList from '../components/MatchingList';
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
  const [showMatching, setShowMatching] = useState(false);

  useEffect(() => {
    Axios.get('https://hongtrainingbe.herokuapp.com/read').then((response) => {
      setPeopleList(response.data);
    });
  }, []);

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
      <Link href="/">
        <span>홈으로 가기</span>
      </Link>
      <div className="m-10">
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
                <h1>{val.partnerExperience}</h1>
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
                    setNewPeopleName(e.target.value);
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
      <div
        onClick={() => setShowMatching(!showMatching)}
        className="cursor-pointer"
      >
        {!showMatching ? '매칭 결과 보기' : '매칭 결과 닫기'}
      </div>
      {showMatching && <MatchingList />}
    </div>
  );
}
