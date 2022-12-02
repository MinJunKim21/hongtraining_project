import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import Context from '../context/Context';
import { myContext } from '../context/Context';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
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
