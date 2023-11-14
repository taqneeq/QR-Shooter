import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Index from './Pages/Index';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Index />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Index" element={<Index />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
