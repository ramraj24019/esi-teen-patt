import React, { useState } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const LoginScreen = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);

  const auth = getAuth();

  const sendOTP = async () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
        callback: () => {},
      });
    }

    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, "+91" + phone, appVerifier);
      window.confirmationResult = confirmationResult;
      alert("OTP sent!");
    } catch (err) {
      alert(err.message);
    }
  };

  const verifyOTP = async () => {
    try {
      const result = await window.confirmationResult.confirm(otp);
      setUser(result.user);
      alert("Login Successful!");
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">📲 Phone Login</h2>

      {!user ? (
        <>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <button onClick={sendOTP} className="bg-green-500 text-white py-2 w-full rounded">
            Send OTP
          </button>

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <button onClick={verifyOTP} className="bg-blue-500 text-white py-2 w-full rounded">
            Verify OTP
          </button>
        </>
      ) : (
        <p className="text-green-600 text-center">✅ Logged in as {user.phoneNumber}</p>
      )}

      <div id="recaptcha"></div>
    </div>
  );
};

export default LoginScreen;
