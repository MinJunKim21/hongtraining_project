import { useEffect, useState } from 'react';
import Axios from 'axios';
import { findPartner } from '../hooks/findPartner';
import { matchcount } from '../hooks/matchcount';

function MatchingListInTime({ startDate, endDate, nextDate }) {
  const [peopleList, setPeopleList] = useState([]);
  const [crossLine, setCrossLine] = useState(false);

  const filterList = (e) => {
    // crossLine ? setCrossLine(false) : setCrossLine(true);
    console.log(e.target);
  };

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
  let inTimeMatchedList = findPartner(inTimePeopleList);
  let nameCount = matchcount(inTimeMatchedList);
  // console.log(nameCount);
  const sameList = [];
  // console.log(sameList);
  const [updateList, setUpdateList] = useState(sameList);

  return (
    <div>
      <span>설정 기간내 지원자들 중 매칭된 사람들</span>
      <div>
        {inTimeMatchedList.map((team, key) => {
          return (
            <div
              onClick={filterList}
              key={key}
              className={`${
                updateList.includes(team[0]) || updateList.includes(team[1])
                  ? 'text-red-500'
                  : 'text-blue-500'
              }`}
            >{`${team[0]} and ${team[1]}`}</div>
          );
        })}
      </div>
      <span>매칭된 사람들 각 매칭 횟수</span>
      <div>
        {nameCount.map(({ name, count }) => {
          return (
            <div
              key={name}
              onClick={() => {
                sameList.push(name);
                setUpdateList(sameList);
              }}
            >
              {name} : {count}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MatchingListInTime;
