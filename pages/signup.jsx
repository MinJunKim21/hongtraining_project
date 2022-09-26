import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

function signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError(false);
    // try {
    //   const res = await axios.post('http://localhost:5001/api/auth/register', {
    //     username,
    //     email,
    //     password,
    //   });
    //   console.log(res);
    //   res.data && window.location.replace('/login');
    // } catch (err) {
    //   setError(true);
    // }
  };
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
          <h1 className="mt-5 mb-3 text-center text-5xl font-poppins">
            Sign up
          </h1>
          <h4 className="text-sm text-center text-gray-500 font-poppins">
            Please fill in the form below
          </h4>
          <input
            type="text"
            placeholder="Username"
            className="w-[300px] mt-8 py-2 px-3 rounded-xl outline-none font-poppins"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-[300px] mt-3 py-2 px-3 rounded-xl outline-none font-poppins"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[300px] mt-3 py-2 px-3 rounded-xl outline-none font-poppins"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-[300px] text-white bg-emerald-500 py-2 px-3 rounded-xl mt-6 font-poppins text-xl font-semibold"
          >
            Sign Up
          </button>
          {error && (
            <h4 className="text-center text-sm mt-2 text-red-500 ">
              Something is wrong
            </h4>
          )}
          <div className="justify-center flex items-center space-x-3 mt-5">
            <span className="font-poppins text-sm mt-5 text-gray-500">
              Already have an account?
            </span>
            <button className="font-poppins text-md mt-5 font-medium">
              <Link href="/login">Log In</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signup;
