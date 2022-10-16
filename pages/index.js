import { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import Link from 'next/link';
import LandingPage from '../components/LandingPage';
import NotePop from '../components/NotePop';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { showFirstState } from '../atoms/modalAtom';
import { MdArrowBackIosNew } from 'react-icons/md';
import {
  ProgressBarGray,
  ProgressBarRed,
  SurveyQ,
} from '../styles/styledComponents';

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
  const [wrong, setWrong] = useState(false);

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
    }, 1500);
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
    <div className="flex flex-col">
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
                <ProgressBarGray>
                  <ProgressBarRed className="w-[17%]" />
                </ProgressBarGray>
                <SurveyQ>
                  매칭 결과를 받을 연락처나
                  <br />
                  카카오톡 ID를 알려주세요.
                </SurveyQ>
                <div className="flex flex-col space-y-2 mt-3 mb-10 mx-2">
                  <span className="text-gray-500 text-xs">
                    몇가지 정보를 알려주시면,
                    <br />딱 맞는 운동친구를 만날 확률이 높아져요 👀
                  </span>
                </div>
                <div className="mx-2">
                  <input
                    onChange={(e) => {
                      setPeopleName(e.target.value);
                    }}
                    type="text"
                    placeholder="Kakaotalk ID or Phone Number"
                    className="flex p-2 bg-white border border-gray-300 rounded-xl h-14 cursor-pointer focus:outline-none  peer-checked:ring-[#E15162] peer-checked:ring-2 items-center peer-checked:border-transparent
                    justify-center; w-full text-xs pl-4 "
                  />
                </div>

                {wrong && (
                  <div className="text-xs text-red-500 mx-2 mt-2">
                    연락처나 카카오톡 ID를 입력해주세요.
                  </div>
                )}

                <div className="mx-2">
                  <label
                    onClick={() => {
                      peopleName !== '' ? setQuestion('qtwo') : setWrong(true);
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
                <ProgressBarGray>
                  <ProgressBarRed className="w-[34%]" />
                </ProgressBarGray>
                <SurveyQ>본인의 성별을 선택해주세요.</SurveyQ>
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
                  className="text-xl ml-2"
                  onClick={() => {
                    setQuestion('qtwo');
                  }}
                />
                <ProgressBarGray>
                  <ProgressBarRed className="w-[52%]" />
                </ProgressBarGray>
                <SurveyQ>
                  희망하는 파트너의
                  <br />
                  성별을 선택해 주세요.
                </SurveyQ>
                <div className="flex flex-col space-y-6">
                  <ul className="w-full px-2">
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
                    <label for="both" className="option_button mt-10">
                      상관없음
                    </label>
                  </ul>
                  <ul className="w-full px-2">
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
                  <ul className="w-full px-2">
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
                  className="text-xl ml-2"
                  onClick={() => {
                    setQuestion('qthree');
                  }}
                />
                <ProgressBarGray>
                  <ProgressBarRed className="w-[69%]" />
                </ProgressBarGray>
                <SurveyQ>본인의 운동경력을 선택해주세요.</SurveyQ>
                <div className="flex flex-col space-y-6">
                  <ul className="w-full px-2">
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
                    <label for="basic" className="option_button mt-8">
                      입문
                    </label>
                  </ul>
                  <ul className="w-full px-2">
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
                  <ul className="w-full px-2">
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
                  className="text-xl ml-2"
                  onClick={() => {
                    setQuestion('qfour');
                  }}
                />
                <ProgressBarGray>
                  <ProgressBarRed className="w-[85%]" />
                </ProgressBarGray>
                <SurveyQ>
                  희망하는 파트너의
                  <br />
                  운동경력을 선택해 주세요.
                </SurveyQ>
                <div className="flex flex-col space-y-6">
                  <ul className="w-full px-2">
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
                    <label for="partnerboth" className="option_button mt-8">
                      상관없음
                    </label>
                  </ul>
                  <ul className="fw-full px-2">
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
                  <ul className="w-full px-2">
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
                  <ul className="w-full px-2">
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
                  className="text-xl ml-2"
                  onClick={() => {
                    setQuestion('qfive');
                  }}
                />
                <ProgressBarGray>
                  <ProgressBarRed className="w-[100%]" />
                </ProgressBarGray>
                <SurveyQ>
                  매칭을 신청하신 이유를
                  <br />
                  간략하게 알려주세요.
                </SurveyQ>
                <div className="mx-2">
                  <input
                    onChange={(e) => {
                      setWhyVolunteer(e.target.value);
                    }}
                    type="text"
                    placeholder="짧게라도 부탁드려요!"
                    className="border rounded-xl h-32 mt-8 text-sm w-full px-2"
                  />
                </div>
              </div>
            )}
          </form>
          {question === 'qsix' && (
            <div className="mx-2">
              <button
                type="submit"
                onClick={addToList}
                className="option_button mt-6 ring-1 ring-[#D15C64] text-[#D15C64] font-semibold w-full"
              >
                입력완료
              </button>
            </div>
          )}
        </div>
      )}

      {/* <Link href="/manager">
        <span className="cursor-pointer">매니저 페이지 이동</span>
      </Link> */}
    </div>
  );
}
