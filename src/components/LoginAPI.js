import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authActions';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LoginAPI = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get('https://fakestoreapi.com/users');
      const users = response.data;
      const user = users.find((u) => u.email === email && u.password === password);
      
      if (user) {
        dispatch(login(user));
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login with API</h2>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Login with API</button>
        </form>
        <p>
          <Link to="/login">Use simple login</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginAPI;