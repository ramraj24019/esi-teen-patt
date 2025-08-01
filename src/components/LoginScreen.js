import React from "react";

const LoginScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-3xl font-bold mb-6">Desi Teen Patti</h1>
      <input
        type="tel"
        placeholder="Enter phone number"
        className="p-2 rounded border border-gray-400 mb-4 w-64"
      />
      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        Send OTP
      </button>
    </div>
  );
};

export default LoginScreen;
