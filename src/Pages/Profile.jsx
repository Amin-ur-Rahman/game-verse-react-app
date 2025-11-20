import React, { useContext, useEffect } from "react";
import coverImage from "../assets/Abstract background design in emerald green _ Free Vector.jpeg";
import AuthContext from "../Contexts/CreateAuthContext";
import { FaEdit } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router";
import Spinner from "../Components/Spinner";

const Profile = () => {
  useEffect(() => {
    document.title = "USER PROFILE";
  }, []);
  const { user, authLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!user && !authLoading) {
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  if (authLoading) return <Spinner></Spinner>;
  if (!user) return null;

  const { photoURL, displayName, email, emailVerified } = user;
  return (
    <div className="bg-gray-700 py-20">
      <div className="w-[80dvw] mx-auto h-[400px] max-h-[800px] relative flex flex-col">
        <img
          src={coverImage}
          className="flex-1 h-1/2 w-full rounded-t-lg"
        ></img>
        <img
          src={photoURL}
          alt="user image"
          className="w-40 object-cover border-2 border-green-400 h-40 rounded-[50%] z-99 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:translate-x-1/10 lg:left-5 lg:-translate-y-1/4"
        />
        <div className="flex-1 h-1/2 w-full bg-zinc-200 z-0 border relative rounded-b-lg md:text-left text-center">
          <div className="absolute flex flex-col lg:flex-row lg:justify-between w-1/2 top-1/3 left-1/2 -translate-x-1/2 md:top-2 md:left-[20%] lg:-translate-x-1 ">
            <div>
              <h1 className="text-[clamp(1.3rem,2dvw,2rem)] text-nowrap mt-2 font-bold py-2">
                {displayName}
              </h1>
              <p className="font-semibold">
                User Email:{" "}
                <span className="text-indigo-600 font-light">{email}</span>
              </p>
              <p className="text-sm text-nowrap">
                Email verification status:{" "}
                <span
                  className={`${
                    emailVerified ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {emailVerified ? "true" : "false"}
                </span>
              </p>
            </div>
          </div>
        </div>
        <NavLink className="absolute top-0 right-0 mx-2" to="/updateProfile">
          <button
            className="flex  cursor-pointer hover:bg-cyan-800 text-white gap-1 items-center bg-cyan-600 px-4 py-2 rounded-lg mt-2"
            type="button"
          >
            <FaEdit></FaEdit> Update Profile
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
