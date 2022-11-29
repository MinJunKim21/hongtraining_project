// import Image from 'next/image';
// import Link from 'next/link';
// import { useContext, useEffect, useRef } from 'react';
// // import { Context } from '../context/Context';
// import axios from 'axios';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import { userState } from '../atoms/modalAtom';

// function Login() {
//   const userRef = useRef();
//   const passwordRef = useRef();
//   const emailRef = useRef();
//   const [user, setUser] = useRecoilState(userState);

//   console.log(user);

//   // const { dispatch, isFetching } = useContext(Context);
//   // const { user } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // dispatch({ type: 'LOGIN_START' });
//     try {
//       const res = await axios.post(
//         'https://hongtrainingbe.herokuapp.com/login',
//         {
//           email: emailRef.current.value,
//           password: passwordRef.current.value,
//         }
//       );
//       setUser(true);

//       // dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//     } catch (err) {
//       // dispatch({ type: 'LOGIN_FAILURE' });
//     }
//     // //try catch 를 API 콜 할떄 사용
//   };

//   function pageRedirect() {
//     window.location.href = '/manager';
//   }
//   // console.log(window);
//   if (user) {
//     pageRedirect();
//   }

//   return (
//     <div className="relative h-screen flex flex-col -mt-12">
//       <div className="bg-white w-full h-12"></div>

//       <div className="flex flex-col max-w-md mx-auto my-auto z-50">
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col  bg-white/70 rounded-md px-10 py-10 "
//         >
//           <h1 className="mt-5 mb-3 text-center text-5xl font-poppins">Login</h1>
//           <h4 className="text-sm text-center font-poppins">Welcome back</h4>
//           <label className="ml-1 mt-8 font-light font-poppins">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your email"
//             className="w-[300px] text-sm mt-1 py-2 px-3 rounded-xl outline-none font-poppins"
//             ref={emailRef}
//           />
//           <label className="ml-1 mt-5 font-light font-poppins">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="w-[300px] text-sm mt-1 py-2 px-3 rounded-xl outline-none font-poppins"
//             ref={passwordRef}
//           />
//           <button
//             type="submit"
//             className="w-[300px] text-white bg-emerald-500 py-2 px-3 rounded-xl mt-8 font-poppins text-xl font-semibold disabled:cursor-not-allowed disabled:bg-emerald-300 "
//             // disabled={isFetching}
//           >
//             Login
//           </button>
//           <div className="justify-center flex items-center space-x-3 mt-5">
//             <span className="font-poppins text-sm mt-5 text-gray-500">
//               Don`t have an account?
//             </span>
//             <button className="font-poppins text-md mt-5 font-medium">
//               <Link href="/register">Sign Up</Link>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
