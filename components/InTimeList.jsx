import { useEffect, useState } from 'react';
import Axios from 'axios';
import MatchingListInTime from './MatchingListInTime';

function InTimeList() {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    Axios.get('https://hongtrainingbe.herokuapp.com/read').then((response) => {
      setPeopleList(response.data);
    });
  }, []);

  let inTimePeopleList = [];
  // console.log(peopleList);
  const makeInTimeList = (e) => {
    for (let i = 0; i < peopleList.length; i++) {
      if (
        new Date(peopleList[i].createdAt) <
        new Date('2022-09-23T11:45:41.803+00:00')
      ) {
        inTimePeopleList.push(peopleList[i]);
      }
    }

    return inTimePeopleList;
  };
  makeInTimeList();
  console.log(inTimePeopleList);
  console.log('hi');

  return (
    <div>
      <p>설정된 기간내 지원자 리스트</p>
      {inTimePeopleList.map((val, key) => {
        return (
          <div key={key} className="flex flex-col ">
            <div className="flex text-xs ">
              <h1 className="min-w-[100px]">{val.peopleName}</h1>
              <h1 className="min-w-[50px]">{val.gender}</h1>
              <h1 className="min-w-[50px]">{val.partnerGender}</h1>
              <h1 className="min-w-[50px]">{val.healthExperience}</h1>
              <h1 className="min-w-[50px]">{val.partnerExperience}</h1>
              <h1 className="min-w-[100px]">
                {new Date(val.createdAt) <
                new Date('2022-09-23T11:45:41.803+00:00')
                  ? new Date(val.createdAt).toLocaleDateString()
                  : '지원 기간 넘음'}
              </h1>
              <h1 className="min-w-[100px]">{val.whyVolunteer}</h1>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="변경할 연락처"
                  onChange={(e) => {
                    setNewPeopleName(e.target.value);
                  }}
                />
                <div onClick={() => updatePeople(val._id)}>update</div>
                <div onClick={() => deletePeople(val._id)}>delete</div>
              </div>
            </div>
          </div>
        );
      })}
      <MatchingListInTime />
    </div>
  );
}

export default InTimeList;
