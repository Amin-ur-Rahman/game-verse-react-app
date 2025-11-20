import React, { useContext, useState } from "react";
// import { FaPortrait, FaSignOutAlt } from "react-icons/fa";

// import { LogOut } from "lucide-react";
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router";
import AuthContext from "../../Contexts/CreateAuthContext";
import { FaUserLarge } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  // const location = useLocation();

  return (
    <div className="w-full bg-gradient-to-r from-gray-800 via-emerald-700 to-gray-800">
      <div
        className="flex items-center justify-between text-white py-3 w-[90dvw] lg:w-[80dvw] mx-auto
        "
      >
        <div className="flex items-center justify-between ">
          <button className="mr-3 mb-[2px] md:hidden">
            {toggle ? (
              <ImCross size={18} onClick={() => setToggle(!toggle)}></ImCross>
            ) : (
              <TiThMenu
                color="orange"
                size={24}
                onClick={() => setToggle(!toggle)}
              />
            )}
          </button>
          <ul
            className={`bg-emerald-700 border-b-[.25px] z-99  text-white font-semibold px-8 text-center rounded-md py-3 pb-6 md:hidden absolute top-[7%] ${
              toggle ? "left-0" : "-left-[100%]"
            } duration-300 flex flex-col gap-4`}
          >
            {" "}
            <ImCross
              className="ml-[110%] -mt-[5%]"
              size={12}
              onClick={() => setToggle(!toggle)}
            ></ImCross>
            <NavLink to="/">Home</NavLink>
            {!user ? (
              <NavLink
                className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-sm hover:shadow-emerald-500/50 transform hover:scale-105"
                to="login"
              >
                Login
              </NavLink>
            ) : (
              ""
            )}
            {!user ? (
              <NavLink
                className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-sm hover:shadow-emerald-500/50 transform hover:scale-105"
                to="register"
              >
                Registration
              </NavLink>
            ) : (
              ""
            )}
            {user ? (
              <NavLink
                className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-sm hover:shadow-emerald-500/50 transform hover:scale-105"
                to="/upcoming-games"
              >
                Upcoming games
              </NavLink>
            ) : (
              ""
            )}
            {/* {user ? <NavLink to="/">gameHub pass</NavLink> : ""} */}
          </ul>
        </div>
        <div className="flex-1">
          <a
            href="/"
            className="font-logo text-[clamp(1.5rem,2dvw,2rem)] text-transparent bg-gradient-to-r from-orange-600 via-orange-800  transition-all duration-500 to-amber-500 bg-clip-text"
          >
            GameVerse
          </a>
        </div>

        <ul className={`hidden lg:mx-10 lg:gap-5  lg:flex`}>
          <NavLink
            className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-800 hover:text-white hover:shadow-sm hover:shadow-emerald-500/50 transform hover:scale-105"
            to="/"
          >
            Home
          </NavLink>
          {/* {!user ? (
            <NavLink
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-800 hover:text-white hover:shadow-sm hover:shadow-emerald-500/50 transform hover:scale-105"
              to="login"
            >
              Login
            </NavLink>
          ) : (
            ""
          )} */}
          {!user ? (
            <NavLink
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-800 hover:text-white hover:shadow-sm hover:shadow-emerald-500/50 transform hover:scale-105"
              to="register"
            >
              Registration
            </NavLink>
          ) : (
            ""
          )}
          <NavLink
            className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-800 hover:text-white hover:shadow-sm hover:shadow-emerald-500/50 transform hover:scale-105"
            to="/upcoming-games"
          >
            Upcoming games
          </NavLink>
        </ul>

        {/* user state login and logout */}
        <div className="flex items-center gap-2 lg:gap-5  cursor-pointer">
          {!user ? (
            <FaUserLarge></FaUserLarge>
          ) : (
            <NavLink to="/profile">
              {" "}
              <img
                src={user?.photoURL}
                className="lg:w-10 lg:h-10 w-8 h-8  border-2 border-pink-700 rounded-full"
              ></img>
            </NavLink>
          )}
          {user ? (
            <span
              className=" flex items-center gap-2 ml-2"
              onClick={signOutUser}
            >
              <FiLogOut size={24} />
              <button className="cursor-pointer hidden md:inline-block md:gap-2 ">
                Logout
              </button>
            </span>
          ) : (
            ""
          )}
          {!user ? (
            <NavLink
              to="/login"
              className="py-1 flex items-center gap-1 px-2 lg:px-4 rounded-xl"
            >
              <BiLogInCircle size={30}></BiLogInCircle>
              <button className="cursor-pointer hidden md:block ">Login</button>
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
