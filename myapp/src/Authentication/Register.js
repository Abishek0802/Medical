import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Initialize useNavigate
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password
      });
      console.log(response.data);
      // Clear form fields after successful registration
      setUsername('');
      setEmail('');
      setPassword('');
      setError('');
      // Use navigate function to go to the login page
      navigate('/login');
    } catch (error) {
      console.error(error);
      if (error.response.status === 400 && error.response.data.message === 'User with this email already exists') {
        setError('This email is already taken');
      } else {
        setError('Failed to register user');
      }
      alert(error.response.data.message); // Display the error message in an alert
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
