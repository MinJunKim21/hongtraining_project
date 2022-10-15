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
