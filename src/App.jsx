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

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/Home"
            element={<ProtectedRoutes><Home /></ProtectedRoutes> }
          />
          <Route path="/Index" element={<Index />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path='/my-qr' element={<ProtectedRoutes><QR/></ProtectedRoutes> }/>
             <Route path='/schedule' element={<ProtectedRoutes><Schedule/></ProtectedRoutes> }/>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
