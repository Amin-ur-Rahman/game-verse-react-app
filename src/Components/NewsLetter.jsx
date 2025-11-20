// import { useState } from "react";

import { toast } from "react-toastify";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email?.includes("@")) {
      toast("Congrats! You have sunscribed to gameVerse");
    }
  };

  return (
    <div className="py-16 px-8 bg-gradient-to-br from-gray-800 via-gray-700 to-emerald-900">
      <div className="max-w-2xl p-10 rounded-2xl mx-auto text-center bg-gradient-to-br from-emerald-600 via-emerald-700 to-gray-800 shadow-2xl border border-emerald-500/30">
        <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Join Our Gaming Community! 🎮
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Get the latest game updates, reviews, and exclusive deals delivered to
          your inbox!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            // value={email}

            className="flex-1 px-4 py-3 bg-white/95  rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-lg"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-emerald-600 hover:to-emerald-700 cursor-pointer transition-all duration-300 ease-linear text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-emerald-500/50 hover:scale-105 border border-emerald-500/30"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
