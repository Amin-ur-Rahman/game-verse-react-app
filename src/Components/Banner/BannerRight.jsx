import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { DataContext } from "../../Contexts/CreateDataContext";

const BannerRight = () => {
  const { data, loading } = useContext(DataContext);
  return loading ? (
    <h1>loading...</h1>
  ) : (
    <div className="flex  lg:flex-col h-full overflow-hidden">
      <div className="flex-1/2 lg:h-1/2 relative z-10 group justify-center items-center">
        <img
          src={data[5].coverPhoto}
          alt={data[5].title}
          className="object-cover group-hover:scale-110 transition-all duration-500 w-full h-full"
        />

        <div className="absolute opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500 inset-0 bg-gradient-to-t from-black/80 to-black/20 ">
          <p className="bg-[rgba(0,0,0,0.1)] text-white text-sm text-justify p-2">
            {data[5].description}
          </p>
        </div>

        <div className="z-50 absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white w-full px-3 py-2 flex justify-between items-center">
          <span className="font-semibold text-sm uppercase tracking-wide">
            {data[5].title}
          </span>
          <span className="flex items-center gap-1 bg-yellow-500 text-black font-bold px-2 py-1 rounded text-sm">
            <FaStar className="text-xs" />
            {data[5].ratings}
          </span>
        </div>
      </div>

      <div className="flex-1/2 lg:h-1/2 group relative z-10 justify-center items-center">
        <img
          src={data[6].coverPhoto}
          alt={data[6].title}
          className="object-cover group-hover:scale-110 duration-500 w-full h-full"
        />

        <div className="absolute opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500 inset-0 bg-gradient-to-t from-black/80 to-black/20 ">
          <p className="bg-[rgba(0,0,0,0.1)] text-white text-sm text-justify p-2">
            {data[6].description}
          </p>
        </div>

        <div className="z-60 absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white w-full px-3 py-2 flex justify-between items-center">
          <span className="font-semibold text-sm uppercase tracking-wide">
            {data[6].title}
          </span>
          <span className="flex items-center gap-1 bg-green-500 text-white font-bold px-2 py-1 rounded text-sm">
            <FaStar className="text-xs" />
            {data[6].ratings}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BannerRight;
