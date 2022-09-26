import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
// import { Context } from '../context/Context';
import axios from 'axios';

function managersignin() {
  const userRef = useRef();
  const passwordRef = useRef();
  // const { dispatch, isFetching } = useContext(Context);
  // const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch({ type: 'LOGIN_START' });
    // try {
    //   const res = await axios.post('http://localhost:5001/api/auth/login', {
    //     username: userRef.current.value,
    //     password: passwordRef.current.value,
    //   });
    //   dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    // } catch (err) {
    //   dispatch({ type: 'LOGIN_FAILURE' });
    // }
    // //try catch 를 API 콜 할떄 사용
  };

  // function pageRedirect() {
  //   window.location.href = '/';
  // }
  // console.log(window);
  // if (user) return pageRedirect();

  return (
    <div className="relative h-screen flex flex-col -mt-12">
      <div className="bg-white w-full h-12"></div>
      {/* <Image
        src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        layout="fill"
        objectFit="cover"
        alt=""
        className="-z-50 opacity-80"
      /> */}

      <div className="flex flex-col max-w-md mx-auto my-auto z-50">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  bg-white/70 rounded-md px-10 py-10 "
        >
          <h1 className="mt-5 mb-3 text-center text-5xl ">Manager Login</h1>
          <h4 className="text-sm text-center ">Welcome back</h4>
          <label className="ml-1 mt-8 font-light">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-[300px] text-sm mt-1 py-2 px-3 rounded-xl outline-none "
            ref={userRef}
          />
          <label className="ml-1 mt-5 font-light ">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-[300px] text-sm mt-1 py-2 px-3 rounded-xl outline-none "
            ref={passwordRef}
          />
          <button
            type="submit"
            className="w-[300px] text-white bg-emerald-500 py-2 px-3 rounded-xl mt-8 font-poppins text-xl font-semibold disabled:cursor-not-allowed disabled:bg-emerald-300 "
            // disabled={isFetching}
          >
            Login
          </button>
          <div className="justify-center flex items-center space-x-3 mt-5">
            <span className="font-poppins text-sm mt-5 text-gray-500">
              Don`t have an account?
            </span>
            <button className="font-poppins text-md mt-5 font-medium">
              <Link href="/register">Sign Up</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default managersignin;
