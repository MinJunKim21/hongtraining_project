import { useState, useEffect } from 'react';
import Axios from 'axios';
import MatchingList from '../components/MatchingList';
import Link from 'next/link';
import InTimeList from '../components/InTimeList';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nextDate, setNextDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    let selectedEndDate = ranges.selection.endDate;
    let nextDate = new Date(selectedEndDate);
    nextDate.setDate(selectedEndDate.getDate() + 1);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    setNextDate(nextDate);
  };

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
    <div className="flex flex-col justify-center m-4">
      <Link href="/">
        <span>홈으로 가기</span>
      </Link>
      <div className="flex flex-col overflow-x-scroll">
        <h1 className="flex">결과 People List 전체</h1>
        <div className="flex text-xs">
          <span className="min-w-[100px]">연락처</span>
          <span className="min-w-[50px]">성별</span>
          <span className="min-w-[50px]">파트너 성별</span>
          <span className="min-w-[50px]">경력</span>
          <span className="min-w-[50px]">상대 경력</span>
          <span className="min-w-[100px]">제출 시간</span>
          <span className="min-w-[100px]">지원 이유</span>
        </div>
        {peopleList.map((val, key) => {
          return (
            <div key={key} className="flex flex-col ">
              <div className="flex text-xs ">
                <h1 className="min-w-[100px]">{val.peopleName}</h1>
                <h1 className="min-w-[50px]">{val.gender}</h1>
                <h1 className="min-w-[50px]">{val.partnerGender}</h1>
                <h1 className="min-w-[50px]">{val.healthExperience}</h1>
                <h1 className="min-w-[50px]">{val.partnerExperience}</h1>
                <h1 className="min-w-[100px]">
                  {new Date(val.createdAt).toLocaleDateString()}
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
      </div>
      <div>
        <span>매칭 기간 설정</span>
        <span>매칭 기간 시작점</span>
        <div>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date('2022-01-01T00:00:00')}
            rangeColors={['#E15162']}
            onChange={handleSelect}
          />
        </div>
        {/* <form>
          <input
            type="date"
            // value={today}
            min="2022-01-01"
            max="2022-12-25"
            onChange={(e) => {
              setStartTime(e.target.value);
              // e.preventDefault();
            }}
          />
          console.log(e.target.value);
          <input type="submit" value="Submit" />
        </form>
        <span>매칭 기간 종료점</span>
        <form>
          <input
            type="date"
            //  value={today}
            min="2022-01-01"
            max="2022-12-25"
            onChange={(e) => {
              setEndTime(e.target.value);
              // e.preventDefault();
            }}
          />
          <input type="submit" value="Submit" />
        </form> */}
      </div>
      <button
        onClick={() => {
          console.log(`${'hi'}` + nextDate);
        }}
      >
        click
      </button>

      <InTimeList startDate={startDate} endDate={endDate} nextDate={nextDate} />

      <div
        onClick={() => setShowMatching(!showMatching)}
        className="cursor-pointer mt-24"
      >
        {!showMatching ? '매칭 결과 보기' : '매칭 결과 닫기'}
      </div>
      {showMatching && <MatchingList />}
    </div>
  );
}
