import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import WelcomePage from './pages/Homepage';
import SecuredPage from './pages/Securedpage';

import {Protected} from './components/Protected';



  function App() {
    return (
      <div>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/login' element={<div>welcome to the login page</div>} />
            <Route path='/secured' element={(
              <Protected>
                <SecuredPage />
              </Protected>
            )} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
