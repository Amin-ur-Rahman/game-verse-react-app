import { useContext, useEffect, useState } from "react";
import AuthContext from "../Contexts/CreateAuthContext";
import { NavLink, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  useEffect(() => {
    document.title = "LOGIN to GAMEHUB";
  }, []);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signInUser, user, googleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      return console.log("please enter both credentials");
    }

    signInUser(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
        console.log(location?.state);
      })
      .catch((error) => {
        console.log(error.message, "login error");
        console.log(error.message.includes("auth/invalid-credential"));
        if (error.message.includes("auth/invalid-credential")) {
          setErrorMessage("Invalid Email or Password!");
        }
      });
  };

  console.log(user);

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 p-4">
      <div className="absolute top-10 rounded-2xl shadow-2xl p-8 w-full bg-gradient-to-br from-gray-800 to-gray-900 border border-emerald-500/30 max-w-md transform hover:scale-[1.02] transition-transform duration-300">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text mb-8">
          Login Your Account
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="group">
            <label className="block text-sm font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
              Email Address
            </label>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:border-emerald-500/50 placeholder-gray-500"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
              Password
            </label>
            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:border-emerald-500/50 placeholder-gray-500 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-400 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <span
              onClick={() => navigate("/pass-reset", { state: { email } })}
              className="text-emerald-400 hover:text-emerald-300 mt-2 cursor-pointer text-sm inline-block transition-colors hover:underline"
            >
              Forgot password?
            </span>
          </div>
          <p className="text-red-500 font-semibold">{errorMessage}</p>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 mt-6"
          >
            Login
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              googleSignUp()
                .then(() => {
                  navigate("/");
                })
                .catch((error) => {
                  console.error("Google sign-in failed:", error);
                });
            }}
            type="button"
            className="w-full bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500 flex justify-center items-center gap-2 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FcGoogle size={24} /> Sign in with Google
          </button>
        </form>

        <div className="text-center mt-6">
          <span className="text-gray-400 text-sm">
            Don't Have An Account?{" "}
            <NavLink
              to="/register"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors hover:underline"
            >
              Register
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}
