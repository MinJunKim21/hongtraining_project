import React from 'react';
import { myContext } from '../context/Context';
import { useContext } from 'react';
import axios from 'axios';

function signinpage() {
  const context = useContext(myContext);
  const userObject = useContext(myContext);
  console.log(userObject);

  const googleLogin = () => {
    window.open(
      'https://muddy-cowboy-boots-worm.cyclic.app/auth/google',
      '_self'
    );
  };

  const logout = () => {
    axios
      .get('https://muddy-cowboy-boots-worm.cyclic.app/auth/logout', {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data === 'done') {
          window.location.href = '/';
          console.log('out');
        }
      });
  };

  return (
    <div>
      {context ? (
        <div>
          <div>welcome {context.username}</div>
          <div onClick={logout}>logout</div>{' '}
        </div>
      ) : (
        <div onClick={googleLogin}>login with google</div>
      )}
    </div>
  );
}

export default signinpage;
