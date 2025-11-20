import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaStar } from "react-icons/fa";
import { DataContext } from "../../Contexts/CreateDataContext";

const BannerSlide = () => {
  const { data, loading } = useContext(DataContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gameShortList, setGameShortList] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!loading && data?.length) {
      setGameShortList(data.slice(0, 5));
    }
  }, [loading, data]);

  useEffect(() => {
    if (gameShortList.length === 0 || isHovered) return;

    const loop = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === gameShortList.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(loop);
  }, [gameShortList, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === gameShortList.length - 1 ? 0 : prev + 1
    );
  };

  if (loading || gameShortList.length === 0) {
    return <h1>Loading...</h1>;
  }

  const currentGame = gameShortList[currentSlide];

  return (
    <div
      onClick={nextSlide}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full min-h-[240px] lg:h-[500px] cursor-pointer overflow-hidden relative"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full h-full absolute inset-0"
        >
          <img
            src={currentGame.coverPhoto}
            alt={currentGame.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md text-white p-4 flex flex-col justify-end z-20 pointer-events-none"
          >
            <h2 className="text-xl font-bold mb-2">{currentGame.title}</h2>
            <p className="text-sm mb-2 line-clamp-3">
              {currentGame.description || "No description available."}
            </p>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1 bg-orange-500 text-white font-bold px-2 py-1 rounded text-sm">
                <FaStar className="text-xs" />
                {currentGame.ratings}
              </span>
              <a
                href={currentGame.downloadLink}
                className="bg-emerald-500 hover:bg-emerald-600 px-3 py-1 rounded text-sm font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </motion.div>

          {!isHovered && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white w-full px-3 py-2 flex justify-between items-center z-10">
              <span className="font-semibold text-sm uppercase tracking-wide">
                {currentGame.title}
              </span>
              <span className="flex items-center gap-1 bg-orange-500 text-white font-bold px-2 py-1 rounded text-sm">
                <FaStar className="text-xs" />
                {currentGame.ratings}
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BannerSlide;
