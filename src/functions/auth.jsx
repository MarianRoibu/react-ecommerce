import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: `${window.location.origin}/callback`,
  responseType: 'code',
  scope: 'openid profile email',
});

function login() {
  webAuth.authorize();
}

async function exchangeCodeForToken(code) {
  const response = await fetch(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
      code,
      redirect_uri: `${window.location.origin}/callback`,
    }),
  });
  const data = await response.json();
  return data.access_token;
}
export const getAuthToken = () => {
    return localStorage.getItem('authToken');
  };
export { login, exchangeCodeForToken };
