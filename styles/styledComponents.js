import tw from 'tailwind-styled-components';

export const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;

export const WeakTitle = tw.div`
text-gray-400 text-sm mb-1
`;

export const BrandColorBg = tw.div`
from-[#E15162] to-[#EE7048] bg-gradient-to-t z-30 h-screen w-screen my-auto items-center flex flex-col mx-auto justify-center relative 
`;
export const LogoTop = tw.div`
flex font-bold w-full justify-center text-[22px] text-black absolute top-16
`;
export const WhiteMainWording = tw.div`
text-white text-2xl font-semibold text-center mb-4 mt-[140px]
`;
export const HashtagWord = tw.div`
border border-white rounded-full px-2 py-1 text-white
`;
export const SwiperWhiteBg = tw.div`
w-[352px] mx-auto flex flex-col justify-center bg-white rounded-xl px-4 py-5 mb-10 space-y-3
`;
export const StartButton = tw.div`
w-full absolute bottom-[-90px] cursor-pointer mx-auto flex justify-center
`;
export const StartGray = tw.div`
w-full text-center mx-4 py-3 px-10 text-xl font-semibold   bg-white border-2 border-[#E15162] text-gray-300 rounded-xl`;
export const StartRed = tw.div`
w-full text-center mx-4 py-3 px-10 text-xl font-semibold bg-white text-[#E15162] border-2 border-[#E15162] rounded-xl`;
export const CenterMainLogo = tw.div`
flex font-bold w-full justify-center text-[36px] text-white`;
export const ProgressBarGray = tw.div`
bg-gray-200 w-full h-1 block relative mt-12`;
export const ProgressBarRed = tw.div`
bg-[#DE7653] h-1 block absolute `;
export const SurveyQ = tw.div`
flex flex-col mt-8 font-bold text-xl mx-2`;
export const TextInput = tw.div`
flex p-2 bg-white border border-gray-300 rounded-xl h-14 cursor-pointer focus:outline-none  peer-checked:ring-[#E15162] peer-checked:ring-2 items-center peer-checked:border-transparent justify-center; w-full text-xs pl-4`;
export const OptionBtn = tw.div`
flex p-2 bg-white border border-gray-300 rounded-xl h-14 cursor-pointer focus:outline-none  peer-checked:ring-[#E15162] peer-checked:ring-2 text-center items-center peer-checked:border-transparent mx-auto justify-center`;
