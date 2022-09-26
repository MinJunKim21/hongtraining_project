import { useEffect, useState } from 'react';
import Axios from 'axios';
import * as FindPartner from '../hooks/findPartner';

function MatchingListInTime() {
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
  let inTimeMatchedList = FindPartner.findPartner(inTimePeopleList);

  return (
    <div>
      <p>설정 기간내 지원자들 중 매칭된 사람들</p>
      <p>
        {inTimeMatchedList.map((team) => {
          return <div>{team}</div>;
        })}
      </p>
    </div>
  );
}

export default MatchingListInTime;
