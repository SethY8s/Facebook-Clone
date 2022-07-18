import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MessagePage from './message/MessagePage';
import Home from './homePage/Home';
import NavbarComp from './navbar/NavbarComp';

import AuthProvider from '../context/AuthContext';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <NavbarComp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/message" element={<MessagePage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
