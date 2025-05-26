// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './admin/AdminLogin';
import Home from './Home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
  );
}

export default App;
