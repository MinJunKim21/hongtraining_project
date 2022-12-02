import React from 'react';

function jwttest() {
  const googleLogin = () => {
    window.open(
      'https://muddy-cowboy-boots-worm.cyclic.app/auth/google',
      '_self'
    );
  };
  return (
    <div>
      <div onClick={googleLogin}>login with google</div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    const cookieExists = getCookie('token', { req, res });
    console.log(cookieExists);
    if (cookieExists) return { redirect: { destination: '/dashboard' } };
    return { props: {} };
  } catch (err) {
    return { props: {} };
  }
}
export default jwttest;
