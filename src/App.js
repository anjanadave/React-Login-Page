import React, { useState } from 'react';
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  return (
   <>
    {isLoggedIn ? <Home /> : <Login onLoginSuccess={handleLoginSuccess} />}
   </>
  );
}

export default App;
