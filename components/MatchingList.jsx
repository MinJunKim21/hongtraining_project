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

  console.log(peopleList);
  return (
    <div>
      <h1>MatchingList</h1>
    </div>
  );
}

export default MatchingList;
