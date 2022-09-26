import { useEffect, useState } from 'react';
import Axios from 'axios';
import * as FindPartner from '../hooks/findPartner';
function MatchingList() {
  // 서버의 /read 에서 get 해서 function에 값 들어가고 return 값을 구함
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    Axios.get('https://hongtrainingbe.herokuapp.com/read').then((response) => {
      setPeopleList(response.data);
    });
  }, []);

  let matchedList = FindPartner.findPartner(peopleList);

  return (
    <div>
      <h1>MatchingList</h1>
      <h2>
        {matchedList.map((team) => {
          return <div>{team}</div>;
        })}
      </h2>
    </div>
  );
}

export default MatchingList;
