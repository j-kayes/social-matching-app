import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegisterPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    sexualOrientation: '',
    preferences: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const endpoint = isRegister
      ? 'http://localhost:5000/api/auth/register'
      : 'http://localhost:5000/api/auth/login';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      alert(isRegister ? 'Registration successful!' : 'Login successful!');
      // Redirect or perform additional actions here
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({
      name: '',
      sex: '',
      sexualOrientation: '',
      preferences: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="form-container">
      <h1>{isRegister ? 'Register' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sex">Sex</label>
              <select
                id="sex"
                value={formData.sex}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="sexualOrientation">Sexual Orientation</label>
              <select
                id="sexualOrientation"
                value={formData.sexualOrientation}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your orientation</option>
                <option value="heterosexual">Heterosexual</option>
                <option value="homosexual">Homosexual</option>
                <option value="bisexual">Bisexual</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="preferences">Preferences</label>
              <select
                id="preferences"
                value={formData.preferences}
                onChange={handleInputChange}
                required
              >
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
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {isRegister && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
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
