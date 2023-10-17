import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import WelcomePage from './pages/Homepage';
import SecuredPage from './pages/Securedpage';




import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'cognitera-apps',
  clientId: 'cognitera-app-1'
});

const authenticated_p = keycloak.init(
  {
    onLoad: 'login-required',
    /*
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
*/
  }
);
authenticated_p.then((result)=>{
  console.log(result);
  console.log(`User is ${result ? 'authenticated' : 'not authenticated'}`);
}).catch( (error)=>{
  console.error('Failed to initialize adapter:', error);
});

  function App() {
    return (
      <div>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/secured' element={<SecuredPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
