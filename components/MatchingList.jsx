import { useEffect, useState } from 'react';
import Axios from 'axios';

function MatchingList() {
  // 서버의 /read 에서 get 해서 function에 값 들어가고 return 값을 구함
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    Axios.get('https://hongtrainingbe.herokuapp.com/read').then((response) => {
      setPeopleList(response.data);
    });
  }, []);

  let matched = [];
  const findPartner = (peopleList) => {
    for (let i = 0; i < peopleList.length; i++) {
      for (let j = 0; j < peopleList.length; j++) {
        if (
          (peopleList[i].gender === peopleList[j].partnerGender ||
            peopleList[j].partnerGender === 'both') &&
          (peopleList[i].partnerGender === peopleList[j].gender ||
            peopleList[i].partnerGender === 'both') && // 성별과 원하는 성별이 맞는 상황
          peopleList[i].peopleName !== peopleList[j].peopleName &&
          (peopleList[i].healthExperience === peopleList[j].partnerExperience ||
            peopleList[j].partnerExperience === 'both' ||
            peopleList[i].healthExperience === 'normal') &&
          (peopleList[j].healthExperience === peopleList[i].partnerExperience ||
            peopleList[i].partnerExperience === 'both' ||
            peopleList[j].healthExperience === 'normal') &&
          i < j
        ) {
          matched.push(
            `${peopleList[i].peopleName} and ${peopleList[j].peopleName} matched`
          );
        }
      }
    }
    return matched;
  };
  // console.log(peopleList[0].partnerExperience.both);
  findPartner(peopleList);
  return (
    <div>
      <h1>MatchingList</h1>
      <h2>
        {matched.map((team) => {
          return <div>{team}</div>;
        })}
      </h2>
    </div>
  );
}

export default MatchingList;
