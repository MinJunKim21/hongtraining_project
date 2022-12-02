import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <title>크로플 | 만나기 편한 운동친구를 찾아줄게!</title> */}
          <meta
            name="description"
            content="크로플은 신촌연합 대학의 헬스인 쌩초보부터 헬스초고수까지, 서로 시간 맞을 때 같이 운동 할 친구를 연결시켜 드립니다."
          />
          {/* <Script
            src="https://accounts.google.com/gsi/client"
            async
            defer
            strategy="beforeInteractive"
          ></Script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
