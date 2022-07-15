import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MessagePage from './message/MessagePage';
import Home from './homePage/Home';

import AuthProvider from '../context/AuthContext';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<MessagePage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
