import React from 'react'
import React, { useState } from 'react';
import Login from './Login';
import AdminDeshBoard from '../AdminDeshBoard'
const LoginAprov = () => {
    const [userData, setUserData] = useState(null);

    const handleLogin = (data) => {
      setUserData(data);
    };
  
    // If the user is not authenticated, render the login component
    if (!userData) {
      return <Login onLogin={handleLogin} />;
    }
  return (
    <div>
      <h1>Welcome, {userData.user.name}!</h1>
      <img src={userData.user.profile_image} alt="Profile" />
      <AdminDeshBoard/>
    </div>
  )
}

export default LoginAprov