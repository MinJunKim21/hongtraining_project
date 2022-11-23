import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';

const CLIENT_ID =
  '1057285147639-g5gvqc9gpq0dbejado8fe7l7bsu5uf4c.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/drive';

function signin() {
  const [user, setUser] = useState({});
  const [tokenClient, setTokenClient] = useState({});

  function handleCallbackResponse(response) {
    console.log('encoded jwt id toke: ' + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  function createDriveFile() {
    tokenClient.requestAccessToken();
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

    //Access Tokens
    //tokenClient
    setTokenClient(
      google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: (tokenResponse) => {
          console.log(tokenResponse);
          // 아무 google API에 사용될 live token에 대한 접근 가능해짐
        },
      })
    );
    // tokenClient.requestAccessToken()
    google.accounts.id.prompt();
  }, []);
  // console.log();
  return (
    <div>
      <div id="signInDiv"></div>
      {Object.keys(user).length != 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )}
      {user && (
        <div>
          <img src={user.picture} />
          <h3>{user.name}</h3>
          <input type="submit" onClick={createDriveFile} value="create File" />
        </div>
      )}
    </div>
  );
}

export default signin;
