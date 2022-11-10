import { useEffect, useState } from 'react';
import Axios from 'axios';
import { findPartner } from '../hooks/findPartner';
import { matchcount } from '../hooks/matchcount';

function MatchingListInTime({ startDate, endDate, nextDate }) {
  const [peopleList, setPeopleList] = useState([]);
  const [crossLine, setCrossLine] = useState(false);

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
  console.log(inTimeMatchedList);

  let tempManyMatchEachList = [];
  let tempManyTeamList = [];
  // inTimeMatchedList[i][0],inTimeMatchedList[i][1]이 tempManyMatchEachList 배열에 includes 안되어있다면 tempManyTeamList 에 두쌍을 추가, tempManyMatchEachList에 각각 추가
  for (let i = 0; i < inTimeMatchedList.length; i++) {
    if (
      tempManyMatchEachList.includes(inTimeMatchedList[i][0]) === false &&
      tempManyMatchEachList.includes(inTimeMatchedList[i][1]) === false
    ) {
      tempManyTeamList.push(inTimeMatchedList[i]);
      tempManyMatchEachList.push(
        inTimeMatchedList[i][0],
        inTimeMatchedList[i][1]
      );
      console.log('hi');
      console.log(tempManyMatchEachList);
      console.log(tempManyTeamList);
    }
  }

  let sameList = [];
  const [updateList, setUpdateList] = useState([sameList]);

  return (
    <div className="flex">
      <span>설정 기간내 지원자들 중 매칭된 사람들</span>
      <div>
        {inTimeMatchedList.map((team, key) => {
          return (
            <div
              key={key}
              className={`${
                updateList.includes(`'${team[0]}'`) ||
                updateList.includes(`'${team[1]}'`)
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
                setUpdateList(`'${sameList}'` + `'${updateList}'`);
              }}
            >
              {name} : {count}
            </div>
          );
        })}
      </div>
      <span>매칭된 팀들 정리 리스트</span>
      <div>
        {tempManyTeamList.map((team, key) => {
          return <div key={key}>{`${team[0]} and ${team[1]}`}</div>;
        })}
      </div>
    </div>
  );
}

export default MatchingListInTime;
