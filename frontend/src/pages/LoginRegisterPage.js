import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegisterPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="form-container">
      <h1>{isRegister ? 'Register' : 'Login'}</h1>
      <form>
        {isRegister && (
          <>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="sex">Sex</label>
              <select id="sex">
                <option value="">Select your sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="sexualOrientation">Sexual Orientation</label>
              <select id="sexualOrientation">
                <option value="">Select your orientation</option>
                <option value="heterosexual">Heterosexual</option>
                <option value="homosexual">Homosexual</option>
                <option value="bisexual">Bisexual</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="preferences">Preferences</label>
              <select id="preferences">
                <option value="">Looking for...</option>
                <option value="friends">Friends</option>
                <option value="romantic">Romantic Partners</option>
                <option value="both">Both</option>
              </select>
            </div>
          </>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        {isRegister && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
        )}
        <button type="submit" className="btn">
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <p>
        {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={toggleForm} className="toggle-btn">
          {isRegister ? 'Login' : 'Register'}
        </button>
      </p>
    </div>
  );
};

export default LoginRegisterPage;
