import React, { useEffect } from "react";
import { useLocation } from "react-router";

const PassReset = () => {
  useEffect(() => {
    document.title = "RESET PASSWORD";
  }, []);
  const location = useLocation();
  console.log(location);
  const userEmail = location.state?.email || "";

  return (
    <div className="bg-gray-500 min-h-max py-20">
      <div className="bg-sky-800 max-w-sm lg:max-w-md p-10 rounded-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Input Your user Email
            </label>
            <input
              defaultValue={userEmail}
              type="text"
              name="url"
              placeholder="Enter your  email"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            target="_blank"
            className="w-full btn shadow-none border-none bg-emerald-700 cursor-pointer hover:bg-emerald-800 text-white font-semibold py-3 rounded-md transition"
          >
            Reset Password
          </a>
        </form>
      </div>
    </div>
  );
};

export default PassReset;
