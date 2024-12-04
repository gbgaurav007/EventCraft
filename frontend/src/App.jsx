import React, { useState, useEffect } from 'react';
import EventListPage from './pages/EventListPage';
import HomePage from './pages/HomePage';
import Account from './pages/Account';
import EventDetailPage from './pages/EventDetailPage';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {

  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUserData(userData);
    navigate('/home');
  }

  return (

    <div>
      <Routes>
      <Route path="/" element={<Account onLogin={handleLogin} />} />
        <Route path="/home" element={<HomePage userData={userData}/>} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/details" element={<EventDetailPage userData={userData}/>} />
      </Routes>
    </div>

  );
}

export default App;