import React from "react";
import { DataContext } from "../Contexts/CreateDataContext";
import Spinner from "../Components/Spinner";
import UpcomingGameCard from "../Components/UpcomingGameCard";
import { NavLink, useLoaderData } from "react-router";
import { BsArrowBarLeft } from "react-icons/bs";

const UpcomingPage = () => {
  const data = useLoaderData();
  //   console.log(data, "from upcoming page");

  return (
    <div className="bg-gray-800 py-20">
      <h1 className="text-white text-2xl text-center mb-10">
        Upcoming Games this year
      </h1>
      <div className="w-[80dvw] md:w-[60dvw] mx-auto flex flex-col gap-5">
        {data.map((game) => (
          <UpcomingGameCard game={game} key={game.id}></UpcomingGameCard>
        ))}
      </div>
      <NavLink to="/">
        <button className="flex mx-auto px-5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 mt-6">
          <BsArrowBarLeft size={24}></BsArrowBarLeft> back to home
        </button>
      </NavLink>
    </div>
  );
};

export default UpcomingPage;
