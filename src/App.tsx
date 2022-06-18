import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessagePage from './comp/message/MessagePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MessagePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
