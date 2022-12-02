import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import Context from '../context/Context';
import { myContext } from '../context/Context';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  const userObject = useContext(myContext);

  useEffect(() => {
    axios
      .get('https://muddy-cowboy-boots-worm.cyclic.app/getuser', {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          setUserObject(res.data);
        }
      });
  }, []);
  console.log(userObject);
  return (
    <RecoilRoot>
      <Context>
        <Component {...pageProps} />
      </Context>
    </RecoilRoot>
  );
}

export default MyApp;
