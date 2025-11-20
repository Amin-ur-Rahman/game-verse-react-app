import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Contexts/CreateDataContext";
import PopularGamesCard from "./PopularGamesCard";
// import { useNavigation } from "react-router";

const PopularGames = () => {
  const { data, loading } = useContext(DataContext);
  const [highRatedGames, setHighRatedGames] = useState([]);

  useEffect(() => {
    if (!loading && data?.length) {
      const ratedGames = data.filter((game) => Number(game.ratings) >= 4.8);
      setHighRatedGames(ratedGames);
    }
  }, [data, loading]);
  console.log(highRatedGames);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="py-5 lg:py-10 bg-gray-800 ">
      <h1 className="text-2xl font-semibold text-white w-[80dvw]  mx-auto py-5">
        Most Popular Games by <span>this year</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-[90dvw] lg:w-[80dvw] mx-auto ">
        {" "}
        {highRatedGames.map((game) => (
          <PopularGamesCard key={game.id} game={game}></PopularGamesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
