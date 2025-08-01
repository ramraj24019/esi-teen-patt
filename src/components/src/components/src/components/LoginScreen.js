import React, { useState } from "react";
import AdminCheck from "./AdminCheck";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() !== "") {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      {!submitted ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">📱 Phone Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="tel"
              className="border border-gray-300 p-3 rounded w-full mb-4"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </>
      ) : (
        <AdminCheck phoneNumber={phoneNumber} />
      )}
    </div>
  );
};

export default LoginScreen;
