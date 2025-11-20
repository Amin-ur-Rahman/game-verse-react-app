import React from "react";
import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaGamepad,
  FaDesktop,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";

const platformIcons = {
  "PC": <FaDesktop className="text-emerald-300" />,
  "PlayStation 5": <FaPlaystation className="text-emerald-300" />,
  "Xbox Series X": <FaXbox className="text-emerald-300" />,
  "Switch": <BsNintendoSwitch className="text-emerald-300" />,
};

const UpcomingGameCard = ({ game }) => {
  return (
    <div className="bg-gray-800/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-400/30 hover:scale-[1.03] transition-transform duration-300">
      <figure className="relative">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        <h2 className="absolute bottom-2 left-4 text-lg font-semibold text-emerald-300 drop-shadow-md">
          {game.title}
        </h2>
      </figure>

      <div className="p-4 text-gray-300">
        <p className="text-sm text-gray-400 line-clamp-2">{game.description}</p>

        <div className="flex items-center justify-between text-sm mt-3">
          <span className="flex items-center gap-2 text-emerald-300">
            <FaCalendarAlt className="text-emerald-400" />
            {game.releaseDate}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <FaGamepad className="text-emerald-400" />
            {game.genre}
          </span>
        </div>

        <div className="flex gap-2 mt-3">
          {game.platforms.map((p, i) => (
            <span key={i} title={p} className="text-lg">
              {platformIcons[p] || null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingGameCard;
