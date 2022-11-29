import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import Context from '../context/Context';
import { myContext } from '../context/Context';
import React, { useContext } from 'react';

function MyApp({ Component, pageProps }) {
  const userObject = useContext(myContext);
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
