function ending() {
  return (
    <div>
      <div className="flex flex-col from-[#E15162] to-[#EE7048] bg-gradient-to-t w-screen h-screen mx-auto justify-center">
        <div className=" w-[352px] flex flex-col mx-auto ">
          <h1 className="text-white text-2xl font-semibold text-center mb-4 mt-[60px]">
            성공적으로 신청됐어요
          </h1>
          <h3 className="text-white text-lg text-center mb-14">
            N째주 금요일 저녁
            <br />
            매칭결과를 알려드려요 ✉️
            <br />
            문의사항은 카카오톡으로 연락주세요 👋🏻
          </h3>
          <div className="flex space-x-2 mx-auto">
            <span className="border border-white rounded-full px-2 py-1 text-white">
              #나와
            </span>
            <span className="border border-white rounded-full px-2 py-1 text-white">
              #운동하자
            </span>
            <span className="border border-white rounded-full px-2 py-1 text-white">
              #초보부터 고수까지
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ending;
