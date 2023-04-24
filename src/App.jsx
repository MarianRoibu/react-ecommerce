import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './pages/Login';
import WishesList from './pages/WishesList';
import MyComponent from './pages/testPage';
import PrivateRoutes from './routes/RouteTypes';

const App = () => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/"  element={<PrivateRoutes>< WishesList /></PrivateRoutes>} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;

