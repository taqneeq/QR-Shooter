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
import Leaderboard from './Pages/Leaderboard';
import User from './Pages/User';
import OCIndex from './Pages/OC';
import OCLogin from './Pages/OC/login';
import OCHome from './Pages/OC/Home';
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/Home"
            element={
              <ProtectedRoutes>
                {' '}
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/Index" element={<Index />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route
            path="/my-qr"
            element={
              <ProtectedRoutes>
                <QR />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/schedule"
            element={
              <ProtectedRoutes>
                <Schedule />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/Sponsors"
            element={
              <ProtectedRoutes>
                <Sponsor />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/Contact"
            element={
              <ProtectedRoutes>
                <Contact />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/Location"
            element={
              <ProtectedRoutes>
                <Location />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/Leaderboard"
            element={
              <ProtectedRoutes>
                <Leaderboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/User"
            element={
              <ProtectedRoutes>
                <User />
              </ProtectedRoutes>
            }
          />
          <Route path="/oc" element={<OCIndex />}></Route>
          <Route path="oc/login" element={<OCLogin />}></Route>
          <Route
            path="oc/home"
            element={
              <ProtectedRoutes>
                <OCHome />
              </ProtectedRoutes>
            }
          ></Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
