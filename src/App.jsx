import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Index from './Pages/Index';
import QR from './Pages/QR';
import ForgotPassword from './Pages/Forgotpassword';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoutes from './components/ProtectedRoutes';
import Schedule from './Pages/Schedule';
import Sponsor from './Pages/Sponsors';
import Contact from './Pages/Contact';
import Location from './Pages/Location';
import Leaderboard from './Pages/Leaderboard';
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/Home"
            element={
              //Remember to add protected routes
              <Home />
            }
          />
          <Route path="/Index" element={<Index />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route
            path="/my-qr"
            element={
              //Add protected routes
              <QR />
            }
          />
          <Route
            path="/schedule"
            element={
              //Add protected routes
              <Schedule />
            }
          />
          <Route
            path="/Sponsors"
            element={
              //Add protected routes
              <Sponsor />
            }
          />
          <Route
            path="/Contact"
            element={
              //Add protected routes
              <Contact />
            }
          />
          <Route
            path="/Location"
            element={
              //Add protected routes
              <Location />
            }
          />
          <Route
            path="/Leaderboard"
            element={
              //Add protected routes
              <Leaderboard />
            }
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
