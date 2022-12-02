import React from 'react';
import { Jwt } from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { getCookie, removeCookies } from 'cookies-next';

function dashboard({ name, email }) {
  const router = useRouter();

  const logout = () => {
    const logout = () => {
      removeCookies('token');
      router.replace('/');
    };
  };
  return (
    <div>
      <div>welcome {name}</div>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    // connect db
    await connect();
    // check cookie
    const token = getCookie('token', { req, res });
    if (!token)
      return {
        redirect: {
          destination: '/',
        },
      };

    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    const obj = await JwtUser.findOne({ _id: verified.id });
    if (!obj)
      return {
        redirect: {
          destination: '/',
        },
      };
    return {
      props: {
        email: obj.email,
        name: obj.name,
      },
    };
  } catch (err) {
    removeCookies('token', { req, res });
    return {
      redirect: {
        destination: '/',
      },
    };
  }
}
export default dashboard;
