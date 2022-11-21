import { useEffect } from 'react';

const CLIENT_ID =
  '1057285147639-g5gvqc9gpq0dbejado8fe7l7bsu5uf4c.apps.googleusercontent.com';

function signin() {
  function handleCallbackResponse(response) {
    console.log('encoded jwt id toke: ' + response.credential);
  }

  useEffect(() => {
    const google = window.google;
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);
  // console.log();
  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
}

export default signin;
