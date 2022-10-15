import {
  BrandColorBg,
  WhiteMainWording,
  HashtagWord,
} from '../styles/styledComponents';

function ending() {
  return (
    <div>
      <BrandColorBg>
        <div className=" w-[352px] flex flex-col mx-auto ">
          <WhiteMainWording>성공적으로 신청됐어요</WhiteMainWording>
          <h3 className="text-white text-lg text-center mb-14">
            N째주 금요일 저녁
            <br />
            매칭결과를 알려드려요 ✉️
            <br />
            문의사항은 카카오톡으로 연락주세요 👋🏻
          </h3>
          <div className="flex space-x-2 mx-auto">
            <HashtagWord>#나와</HashtagWord>
            <HashtagWord>#운동하자</HashtagWord>
            <HashtagWord>#초보부터 고수까지</HashtagWord>
          </div>
        </div>
      </BrandColorBg>
    </div>
  );
}

export default ending;
