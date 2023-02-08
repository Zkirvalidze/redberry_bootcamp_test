import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MultiStepForm from './pages/MultiStepForm/MultiStepForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<MultiStepForm />} />
    </Routes>
  );
};

export default App;
