// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Initialize useNavigate
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });
      console.log(response.data);
      // Clear form fields after successful login
      setEmail('');
      setPassword('');
      setError('');
      // Redirect to home page after successful login
     
       // Display alert if login is successful
       alert(response.data.message);

       // Redirect to register page regardless of success or failure
       navigate('/HomePage');
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

