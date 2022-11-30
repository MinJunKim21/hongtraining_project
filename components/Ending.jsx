import tw from 'tailwind-styled-components';

function ending() {
  return (
    <div>
      <BrandColorBg>
        <div className=" w-[352px] flex flex-col mx-auto ">
          <WhiteMainWording>성공적으로 신청됐어요</WhiteMainWording>
          <h3 className="text-white text-lg text-center mb-14">
            매주 금요일 저녁
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

const BrandColorBg = tw.div`
from-[#E15162] to-[#EE7048] bg-gradient-to-t z-30 h-screen w-screen my-auto items-center flex flex-col mx-auto justify-center relative 
`;
const WhiteMainWording = tw.div`
text-white text-2xl font-semibold text-center mb-4 
`;

const HashtagWord = tw.div`
border border-white rounded-full px-2 py-1 text-white
`;
