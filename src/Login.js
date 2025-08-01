// src/Login.js

import React, { useState } from 'react';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();

  const setupCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved
      }
    });
  };

  const handleSendOtp = () => {
    if (phone.length !== 10) {
      alert('Enter valid phone number');
      return;
    }
    setupCaptcha();
    const appVerifier = window.recaptchaVerifier;
    const fullPhone = '+91' + phone;
    signInWithPhoneNumber(auth, fullPhone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOtp(true);
      }).catch((error) => {
        alert("SMS error: " + error.message);
      });
  };

  const handleVerifyOtp = () => {
    window.confirmationResult.confirm(otp).then((result) => {
      const user = result.user;
      if (user.phoneNumber === '+918758337482') {
        navigate('/admin'); // admin page
      } else {
        navigate('/home'); // normal lobby
      }
    }).catch((error) => {
      alert("Invalid OTP");
    });
  };

  return (
    <div className="login">
      <h2>📱 Phone Login</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {showOtp ? (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>✅ Verify OTP</button>
        </>
      ) : (
        <button onClick={handleSendOtp}>📤 Send OTP</button>
      )}
      <div id="recaptcha"></div>
    </div>
  );
};

export default Login;
