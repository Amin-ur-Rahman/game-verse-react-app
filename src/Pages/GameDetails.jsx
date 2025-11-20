import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Contexts/CreateDataContext";
import { FaStar, FaDownload, FaHeart, FaShare } from "react-icons/fa";
import ErrorPage from "../Components/ErrorPage";
import Spinner from "../Components/Spinner";

const GameDetails = () => {
  useEffect(() => {
    document.title = "Game Details - GAMEHUB";
  }, []);

  const { gameId } = useParams();
  const { data, loading } = useContext(DataContext);
  const [currentGame, setCurrentGame] = useState(null);

  useEffect(() => {
    if (!loading && data?.length) {
      const gameToDisplay = data.find((game) => game.id == gameId);
      setCurrentGame(gameToDisplay);
    }
  }, [data, loading, gameId]);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!currentGame) {
    return <ErrorPage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style={{ backgroundImage: `url(${currentGame.coverPhoto})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      </div>

      <div className="relative -mt-64 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <img
                src={currentGame.coverPhoto}
                className="w-full rounded-2xl h-80 object-cover shadow-2xl border-4 border-gray-700 hover:border-emerald-500 transition-all duration-300 transform hover:scale-105"
                alt={currentGame.title}
              />

              <div className="mt-6 space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 text-lg">
                  <FaDownload /> Install Now
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700 hover:border-red-500">
                    <FaHeart className="text-red-500" /> Wishlist
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700 hover:border-blue-500">
                    <FaShare className="text-blue-500" /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                    {currentGame.title}
                  </h1>
                  <p className="text-gray-400 text-sm">
                    by {currentGame.developer}
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-6 py-3 rounded-xl border border-yellow-500/30">
                  <FaStar className="text-yellow-400 text-2xl" />
                  <span className="text-3xl font-bold text-yellow-400">
                    {currentGame.ratings}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">
                About This Game
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {currentGame.description}
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-emerald-400">
                Game Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Developer
                  </p>
                  <p className="text-white text-lg font-semibold bg-gray-700/50 px-4 py-3 rounded-lg inline-block hover:bg-emerald-600/20 transition-colors cursor-pointer">
                    {currentGame.developer}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Category
                  </p>
                  <p className="text-white text-lg font-semibold bg-gray-700/50 px-4 py-3 rounded-lg inline-block hover:bg-cyan-600/20 transition-colors cursor-pointer">
                    {currentGame.category}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Enjoyed the game?</h3>
                  <p className="text-gray-300">
                    Share your experience with other players
                  </p>
                </div>
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                  Rate This Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
