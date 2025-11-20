import React, { useContext, useState } from "react";
import { DataContext } from "../Contexts/CreateDataContext";
import Spinner from "../Components/Spinner";
import AllGamesCard from "./AllGamesCard";

const AllGames = () => {
  const { data, loading } = useContext(DataContext);
  const [showAll, setShowAll] = useState(false);

  if (!data || loading) return <Spinner></Spinner>;

  const itemsPerRow = 3;
  const defaultRows = 4;
  const defaultItemCount = itemsPerRow * defaultRows;

  const displayedGames = showAll ? data : data.slice(0, defaultItemCount);
  const hasMoreGames = data.length > defaultItemCount;

  return (
    <div className="bg-gradient-to-b from-emerald-900 via-gray-800 to-emerald-800 py-10">
      <h1 className="text-white text-2xl text-center mb-10">
        All Games by GameVerse
      </h1>
      <div className="w-[80dvw] mx-auto grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
        {displayedGames.map((game) => (
          <AllGamesCard game={game} key={game.id}></AllGamesCard>
        ))}
      </div>

      {hasMoreGames && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
          >
            {showAll ? "Show Less" : `Show All Games (${data.length})`}
          </button>
        </div>
      )}
    </div>
  );
};

export default AllGames;
