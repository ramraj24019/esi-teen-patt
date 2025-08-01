import React, { useState } from 'react';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

function Login({ onLogin }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("Recaptcha verified");
      }
    });
  };

  const sendOTP = () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, "+91" + phone, appVerifier)
      .then((confirmation) => {
        setConfirmationResult(confirmation);
        alert("OTP Sent!");
      })
      .catch((error) => {
        console.log("Error sending OTP", error);
        alert("Error sending OTP");
      });
  };

  const verifyOTP = () => {
    confirmationResult.confirm(otp).then((result) => {
      onLogin(result.user);
    }).catch((error) => {
      alert("Invalid OTP");
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>📲 Phone Login</h2>
      <input
        type="tel"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ padding: 10, margin: 5 }}
      /><br />
      <button onClick={sendOTP} style={{ padding: 10 }}>Send OTP</button><br /><br />
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={{ padding: 10, margin: 5 }}
      /><br />
      <button onClick={verifyOTP} style={{ padding: 10 }}>Verify OTP</button>
      <div id="recaptcha-container"></div>
    </div>
  );
}

export default Login;
