import React from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

const PopularGamesCard = ({ game }) => {
  return (
    <NavLink to={`/details/${game.id}`}>
      <div className="relative  group overflow-hidden rounded-sm h-60 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 text-white p-3 flex justify-between items-center z-10">
          <h2 className="font-semibold text-sm truncate">{game.title}</h2>
          <span className="flex items-center gap-1 bg-orange-500 text-xs font-bold px-2 py-1 rounded">
            <FaStar className="text-xs" />
            {game.ratings}
          </span>
        </div>

        <div className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-orange-500 cursor-pointer text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            Details
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default PopularGamesCard;
