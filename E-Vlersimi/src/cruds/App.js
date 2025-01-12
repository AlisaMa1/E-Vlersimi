import React from 'react';
import Home from './pages';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Signin/signinn';
import Footer from './footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/SignIn/*" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
