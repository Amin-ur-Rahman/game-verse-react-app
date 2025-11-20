import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../Contexts/CreateAuthContext";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
// import { updateProfile } from "firebase/auth";

export default function Register() {
  // const [passref, setPassref] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  // console.log(passref);

  // useEffect(() => {

  // }, [passref]);

  useEffect(() => {
    document.title = "CREATE ACCOUNT";
  }, []);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);

  const { createUser, updateUserProfile, googleSignUp } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userName = e.target.name.value;
    const url = e.target.url.value;

    const checkNumber = RegExp(/\d/);
    const checkUpperLowerCase = RegExp(/(?=.*[a-z])(?=.*[A-Z])/);
    const checkSpecialChar = RegExp(/[!@#$%^&*(),.?":{}|<>]/);
    const checkLength = RegExp(/^.{6,}$/);

    if (!checkNumber.test(password)) {
      return setErrorMessage(
        "Warning! password must contain at least one number"
      );
    } else if (!checkSpecialChar.test(password)) {
      return setErrorMessage(
        "Warning! password must contain at least one special character"
      );
    } else if (!checkUpperLowerCase.test(password)) {
      return setErrorMessage(
        "Warning! include at least one uppercase and a lowercase letter"
      );
    } else if (!checkLength.test(password)) {
      return setErrorMessage(
        "Warning! password should contain at least 6 characters"
      );
    }
    createUser(email, password)
      .then(() => {
        setPending(true);
        setTimeout(() => {
          navigate("/");
          setPending(false);
        }, 3000);
        // console.log("user created", res);
        return updateUserProfile(userName, url);
      })
      .catch((error) => {
        console.log(error.message.includes("auth/email-already-in-use"));
        if (error.message.includes("auth/email-already-in-use")) {
          setError(
            "This Email is already registered. Login with your account."
          );
        }
      });
  };

  // console.log(user);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-emerald-500/30 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-300">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          Create an Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="group">
            <label className="block text-sm font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:border-emerald-500/50 placeholder-gray-500"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
              Photo URL
            </label>
            <input
              type="text"
              name="url"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:border-emerald-500/50 placeholder-gray-500"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
              Email Address
            </label>
            <input
              required
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
                // onChange={(e) => setPassref(e.target.value)}
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
            <p className="text-red-600 mt-5 font-semibold text-sm">
              {errorMessage}
            </p>
          </div>

          <p className="text-red-600 font-semibold my-4">{error}</p>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 mt-6"
          >
            Register
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
            Already Have An Account?{" "}
            <Link
              to="/auth/login"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors hover:underline"
            >
              Login
            </Link>
          </span>
        </div>

        {pending && (
          <div className="mt-6 text-center">
            <p className="text-emerald-400 text-sm mb-2 animate-pulse">
              Redirecting to login page...
            </p>
            <div className="flex justify-center gap-2">
              <div
                className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
