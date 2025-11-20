import React, { useEffect } from "react";

import Banner from "../Components/Banner/Banner";
import Newsletter from "../Components/NewsLetter";
import PopularGames from "../Components/PopularGames/PopularGames";
import AllGames from "../AllGames/AllGames";
import Services from "../Components/Services";

const Home = () => {
  useEffect(() => {
    document.title = "gameVerse-HOME";
  }, []);
  return (
    <div className="w-full ">
      <Banner></Banner>
      <PopularGames></PopularGames>
      <Newsletter></Newsletter>
      <AllGames></AllGames>
      <Services></Services>
    </div>
  );
};

export default Home;
