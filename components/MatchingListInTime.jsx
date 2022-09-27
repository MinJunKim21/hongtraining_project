import { useEffect, useState } from 'react';
import Axios from 'axios';
import * as FindPartner from '../hooks/findPartner';

function MatchingListInTime({ startDate, endDate, nextDate }) {
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
        new Date(peopleList[i].createdAt) <= new Date(nextDate) &&
        new Date(peopleList[i].createdAt) >= new Date(startDate)
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
      <span>설정 기간내 지원자들 중 매칭된 사람들</span>
      <div>
        {inTimeMatchedList.map((team, key) => {
          return <div key={key}>{team}</div>;
        })}
      </div>
    </div>
  );
}

export default MatchingListInTime;
