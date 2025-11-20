import React from "react";

const Spinner = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center 
                    bg-gradient-to-br from-emerald-500 to-gray-700"
    >
      {/* Outer ring */}
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent border-t-emerald-200 rounded-full animate-spin"></div>

        {/* Inner glowing ring */}
        <div className="absolute w-14 h-14 border-4 border-emerald-400/30 border-t-transparent rounded-full animate-spin-slow"></div>

        {/* Center pulse */}
        <div className="absolute w-4 h-4 bg-emerald-300 rounded-full animate-ping"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-sm text-white tracking-wider">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Spinner;
