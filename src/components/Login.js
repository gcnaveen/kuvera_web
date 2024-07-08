import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setToken(response.data.token);
      setError('');
      navigate('/dashboard'); // Navigate to the dashboard on success
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img data-v-16b56381="" src="https://assets2.kuvera.in/production/atlantis/web/assets/img/kuvera-logo-dark.svg" alt="" className="logo"  />
      </header>
      <div className="login-content">
        <div className="login-form">
          <h2>Login. Start Investing.</h2>
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {token && <p>Login successful! Your token is: {token}</p>}
          <div className="divider">
            <span className="line"></span>
            <span className="or">OR</span>
            <span className="line"></span>
          </div>
          <button className="google-login-button">Sign in with Google</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
