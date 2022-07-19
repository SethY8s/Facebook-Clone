import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MessagePage from './message/MessagePage';
import Home from './homePage/Home';
import NavbarComp from './navbar/NavbarComp';
import Login from './userLogin/Login';
import Signup from './userLogin/Signup';

import AuthProvider from '../context/AuthContext';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <NavbarComp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/message" element={<MessagePage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
