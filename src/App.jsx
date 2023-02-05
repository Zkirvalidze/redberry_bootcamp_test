import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PersonalInfo from './pages/personal-info/PersonalInfo';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<PersonalInfo />} />
    </Routes>
  );
};

export default App;
