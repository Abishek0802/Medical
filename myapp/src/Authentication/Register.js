import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.css"

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', {
        username,
        password,
      });
      alert('User registered successfully');
      // Redirect to Dummy.js or any other route after successful registration
      if (username && password) {
        navigate('HomePage'); // Use navigate function for navigation
      }
    } catch (err) {
      alert('Error registering user');
    }
  };

  return (
    <div className='reg'> 
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className='inp'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
