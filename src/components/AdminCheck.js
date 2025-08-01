import React from "react";

const AdminCheck = ({ phoneNumber }) => {
  const adminNumber = "+918758337482"; // भारत का country code जरूर डालो
  const isAdmin = phoneNumber === adminNumber;

  return (
    <div className="text-center mt-6">
      {isAdmin ? (
        <div className="text-green-600 font-bold text-xl">
          ✅ Admin Access Granted
        </div>
      ) : (
        <div className="text-red-600 font-bold text-xl">
          ❌ You are not Admin
        </div>
      )}
    </div>
  );
};

export default AdminCheck;
