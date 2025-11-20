import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import GameDetails from "../Pages/GameDetails";
import ErrorPage from "../Pages/ErrorPage";
import HomeLayout from "../Layouts/HomeLayout";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import PassReset from "../Pages/PassReset";
import Spinner from "../Components/Spinner";
import UpcomingPage from "../Pages/UpcomingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        path: "/",
        // loader: () => fetch("/games.json"),
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:gameId",
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
        errorElement: <h1>error...................</h1>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/pass-reset",
        element: <PassReset></PassReset>,
        HydrateFallback: <Spinner></Spinner>,
      },
      {
        loader: () => fetch("/upcomingGames.json"),
        path: "/upcoming-games",
        element: <UpcomingPage></UpcomingPage>,
      },
    ],
  },

  {
    path: "*",
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
export default router;
