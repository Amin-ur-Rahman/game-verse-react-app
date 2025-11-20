import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";
import { NavLink } from "react-router";

const GameCard = ({ game }) => {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-emerald-500/30 transition-all duration-300">
      <div className="relative group">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full cursor-pointer h-48 object-cover group-hover:scale-110 duration-500"
        />
        <span className="absolute top-3 left-3 bg-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
          {game.category}
        </span>
      </div>

      <div className="p-4 flex flex-col justify-between h-[230px]">
        <div>
          <h2 className="text-lg font-semibold mb-1">{game.title}</h2>
          <p className="text-sm text-gray-400 mb-2">by {game.developer}</p>
          <p className="text-sm text-gray-300 line-clamp-3 mb-4">
            {game.description}
          </p>
        </div>

        <div className="flex items-center text-yellow-400">
          <FaStar className="mr-1" />
          <span className="text-sm font-medium">{game.ratings}</span>
        </div>
        <div className="flex items-center my-3 justify-between">
          <NavLink to={`/details/${game.id}`}>
            <span className="flex items-center gap-1 font-semibold text-md text-transparent bg-gradient-to-l bg-clip-text from-orange-400 via-orange-500 to-amber-400 border-2 border-orange-500 rounded-lg py-1 px-3 hover:scale-110 hover:shadow-sm transition-all duration-300 hover:shadow-amber-500">
              details
            </span>
          </NavLink>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors"
          >
            <FiDownload />
            download
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
