import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import WelcomePage from './pages/Homepage';
import SecuredPage from './pages/Securedpage';

import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from './Keycloak';

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/secured' element={<SecuredPage />} />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
