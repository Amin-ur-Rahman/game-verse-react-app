import React, { useContext, useEffect } from "react";
import AuthContext from "../Contexts/CreateAuthContext";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  useEffect(() => {
    document.title = "UPDATE PROFILE INFO";
  }, []);
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    try {
      await updateUserProfile(name, url);
      navigate("/profile");
    } catch (error) {
      console.log("profile update failed!", error);
    }
  };
  return (
    <div className="bg-gray-500 min-h-max py-20">
      <div className="bg-sky-800 max-w-sm lg:max-w-md p-10 rounded-2xl mx-auto">
        <form className="space-y-6" onSubmit={handleUpdate}>
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="url"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button className="w-full bg-emerald-700 cursor-pointer hover:bg-emerald-800 text-white font-semibold py-3 rounded-md transition">
            Update info
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
