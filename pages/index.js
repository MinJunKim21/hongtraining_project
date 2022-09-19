import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Home() {
  const [peopleName, setPeopleName] = useState('');
  const [gender, setGender] = useState('man');
  const [newPeopleName, setNewPeopleName] = useState('');

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
            <label>이름 : </label>
            <input
              onChange={(e) => {
                setPeopleName(event.target.value);
              }}
              type="text"
              placeholder="이름"
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
            <div onClick={addToList}>제출</div>
          </div>
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
        </form>
      </div>
    </div>
  );
}
