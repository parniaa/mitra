import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LandingPageFa from './components/LandingPageFa';
import Toronto from './components/Toronto';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fa" element={<LandingPageFa />} />
        <Route path="/toronto" element={<Toronto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
