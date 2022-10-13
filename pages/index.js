import { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import Link from 'next/link';
import LandingPage from '../components/LandingPage';
import NotePop from '../components/NotePop';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { showFirstState } from '../atoms/modalAtom';
import { MdArrowBackIosNew } from 'react-icons/md';

export default function Home() {
  const [peopleName, setPeopleName] = useState('');
  const [gender, setGender] = useState('man');
  const [newPeopleName, setNewPeopleName] = useState('');
  const [whyVolunteer, setWhyVolunteer] = useState('');
  const [partnerGender, setPartnerGender] = useState('man');
  const [healthExperience, setHealthExperience] = useState('basic');
  const [partnerExperience, setPartnerExperience] = useState('both');
  const [peopleList, setPeopleList] = useState([]);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [showFirst, setShowFirst] = useRecoilState(showFirstState);
  const [question, setQuestion] = useState('qone');

  const handleClose = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    Axios.get('https://hongtrainingbe.herokuapp.com/read').then((response) => {
      setPeopleList(response.data);
    });
  }, [peopleList]);

  const addToList = () => {
    Axios.post('https://hongtrainingbe.herokuapp.com/insert', {
      peopleName: peopleName,
      gender: gender,
      partnerGender: partnerGender,
      healthExperience: healthExperience,
      partnerExperience: partnerExperience,
      whyVolunteer: whyVolunteer,
    });
    setTimeout(() => {
      pageRedirect();
    }, 500);
  };
  function pageRedirect() {
    window.location.href = '/ending';
  }

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
    <div className="flex flex-col p-4">
      <LandingPage />
      {showFirst && showModal && <NotePop />}
      {!showModal && (
        <div className="mx-auto w-full max-w-sm mt-10">
          <form>
            {question === 'qone' && (
              <div>
                <MdArrowBackIosNew
                  onClick={handleClose}
                  className="text-xl ml-2"
                />
                <div className="bg-gray-200 w-full h-1 block relative mt-12">
                  <div className="bg-[#DE7653] w-[17%] h-1 block absolute" />
                </div>
                <div className="mx-2">
                  <span className="flex flex-col mt-8 font-bold text-xl ">
                    매칭 결과를 받을 연락처나
                    <br />
                    카카오톡 ID를 알려주세요.
                  </span>
                  <div className="flex flex-col space-y-2 mt-3 mb-10">
                    <span className="text-gray-500 text-xs">
                      몇가지 정보를 알려주시면,
                      <br />딱 맞는 운동친구를 만날 확률이 높아져요 👀
                    </span>
                  </div>
                  <input
                    onChange={(e) => {
                      setPeopleName(e.target.value);
                    }}
                    type="text"
                    placeholder="Kakaotalk ID or Phone Number"
                    className="option_button w-full text-xs pl-4"
                  />
                </div>
                <div className="mx-2">
                  <label
                    onClick={() => {
                      setQuestion('qtwo');
                    }}
                    className="option_button mt-6 ring-1 ring-[#D15C64] text-[#D15C64] font-semibold"
                  >
                    입력완료
                  </label>
                </div>
              </div>
            )}

            {question === 'qtwo' && (
              <div className="flex flex-col">
                <MdArrowBackIosNew
                  className="text-xl ml-2"
                  onClick={() => {
                    setQuestion('qone');
                  }}
                />
                <div className="bg-gray-200 w-full h-1 block relative mt-12">
                  <div className="bg-[#DE7653] w-[34%] h-1 block absolute" />
                </div>
                <span className="flex flex-col mt-8 font-bold text-xl mx-2">
                  본인의 성별을 선택해주세요.
                </span>
                <div className="flex flex-col">
                  <ul className="w-full px-2">
                    <input
                      type="radio"
                      id="man"
                      name="gender"
                      value="man"
                      onChange={(e) => {
                        setGender(e.target.value);
                        setQuestion('qthree');
                      }}
                      className="peer sr-only"
                    />
                    <label for="man" className="option_button mt-10">
                      남자
                    </label>
                  </ul>
                  <ul className="w-full px-2">
                    <input
                      type="radio"
                      id="woman"
                      name="gender"
                      value="woman"
                      onChange={(e) => {
                        setGender(e.target.value);
                        setQuestion('qthree');
                      }}
                      className="peer sr-only"
                    />
                    <label for="woman" className="option_button mt-6">
                      여자
                    </label>
                  </ul>
                </div>
              </div>
            )}

            {question === 'qthree' && (
              <div className="flex flex-col">
                <MdArrowBackIosNew
                  onClick={() => {
                    setQuestion('qtwo');
                  }}
                />
                <label className="mt-8 mb-2">희망하는 파트너 성별</label>
                <div className="flex space-x-2">
                  <ul className="flex-1">
                    <input
                      type="radio"
                      id="both"
                      name="partnerGender"
                      value="both"
                      onChange={(e) => {
                        setPartnerGender(e.target.value);
                        setQuestion('qfour');
                      }}
                      className="peer sr-only"
                    />
                    <label for="both" className="option_button">
                      상관없음
                    </label>
                  </ul>
                  <ul className="flex-1">
                    <input
                      type="radio"
                      id="partnerman"
                      name="partnerGender"
                      value="man"
                      onChange={(e) => {
                        setPartnerGender(e.target.value);
                        setQuestion('qfour');
                      }}
                      className="peer sr-only"
                    />
                    <label for="partnerman" className="option_button">
                      남자
                    </label>
                  </ul>
                  <ul className="flex-1">
                    <input
                      type="radio"
                      id="partnerwoman"
                      name="partnerGender"
                      value="woman"
                      onChange={(e) => {
                        setPartnerGender(e.target.value);
                        setQuestion('qfour');
                      }}
                      className="peer sr-only"
                    />
                    <label for="partnerwoman" className="option_button">
                      여자
                    </label>
                  </ul>
                </div>
              </div>
            )}

            {question === 'qfour' && (
              <div className="flex flex-col">
                <MdArrowBackIosNew
                  onClick={() => {
                    setQuestion('qthree');
                  }}
                />
                <label className="mt-8 mb-2">본인 운동경력</label>
                <div className="flex space-x-2">
                  <ul className="flex-1">
                    <input
                      type="radio"
                      id="basic"
                      name="healthExperience"
                      value="basic"
                      onChange={(e) => {
                        setHealthExperience(e.target.value);
                        setQuestion('qfive');
                      }}
                      className="peer sr-only"
                    />
                    <label for="basic" className="option_button">
                      입문
                    </label>
                  </ul>
                  <ul className="flex-1">
                    <input
                      type="radio"
                      id="normal"
                      name="healthExperience"
                      value="normal"
                      onChange={(e) => {
                        setHealthExperience(e.target.value);
                        setQuestion('qfive');
                      }}
                      className="peer sr-only"
                    />
                    <label for="normal" className="option_button">
                      보통
                    </label>
                  </ul>
                  <ul className="flex-1">
                    <input
                      type="radio"
                      id="expert"
                      name="healthExperience"
                      value="expert"
                      onChange={(e) => {
                        setHealthExperience(e.target.value);
                        setQuestion('qfive');
                      }}
                      className="peer sr-only"
                    />
                    <label for="expert" className="option_button">
                      고수
                    </label>
                  </ul>
                </div>
              </div>
            )}

            {question === 'qfive' && (
              <div className="flex flex-col">
                <MdArrowBackIosNew
                  onClick={() => {
                    setQuestion('qfour');
                  }}
                />
                <label className="mt-8 mb-2">희망하는 파트너 운동경력</label>
                <div className="flex space-x-2">
                  <ul className="flex-1">
                    <input
                      type="radio"
                      id="partnerboth"
                      name="partnerHealthExperience"
                      value="both"
                      onChange={(e) => {
                        setPartnerExperience(e.target.value);
                        setQuestion('qsix');
                      }}
                      className="peer sr-only"
                    />
                    <label for="partnerboth" className="option_button">
                      상관없음
                    </label>
                  </ul>
                  <ul className="flex-1">
                    <input
                      type="radio"
                      id="partnerbasic"
                      name="partnerHealthExperience"
                      value="basic"
                      onChange={(e) => {
                        setPartnerExperience(e.target.value);
                        setQuestion('qsix');
                      }}
                      className="peer sr-only"
                    />
                    <label for="partnerbasic" className="option_button">
                      입문
                    </label>
                  </ul>
                  <ul className="flex-1">
                    <input
                      type="radio"
                      id="partnernormal"
                      name="partnerHealthExperience"
                      value="normal"
                      onChange={(e) => {
                        setPartnerExperience(e.target.value);
                        setQuestion('qsix');
                      }}
                      className="peer sr-only"
                    />
                    <label for="partnernormal" className="option_button">
                      보통
                    </label>
                  </ul>
                  <ul className="flex-1">
                    <input
                      type="radio"
                      id="partnerexpert"
                      name="partnerHealthExperience"
                      value="expert"
                      onChange={(e) => {
                        setPartnerExperience(e.target.value);
                        setQuestion('qsix');
                      }}
                      className="peer sr-only"
                    />
                    <label for="partnerexpert" className="option_button">
                      고수
                    </label>
                  </ul>
                </div>
              </div>
            )}

            {question === 'qsix' && (
              <div className="flex flex-col">
                <MdArrowBackIosNew
                  onClick={() => {
                    setQuestion('qfive');
                  }}
                />
                <label className="mt-8">매칭을 신청해주신 이유 : </label>
                <input
                  onChange={(e) => {
                    setWhyVolunteer(e.target.value);
                  }}
                  type="text"
                  placeholder="짧게라도 부탁드려요!"
                  className="border-b w-full mt-2 text-sm"
                />
              </div>
            )}
          </form>
          {question === 'qsix' && (
            <button
              type="submit"
              onClick={addToList}
              className="cursor-pointer mt-24 from-[#E15162] to-[#EE7048] bg-gradient-to-tl w-full mx-auto justify-center text-white p-4 text-xl rounded-xl"
            >
              입력완료
            </button>
          )}
        </div>
      )}

      {/* <Link href="/manager">
        <span className="cursor-pointer">매니저 페이지 이동</span>
      </Link> */}
    </div>
  );
}
