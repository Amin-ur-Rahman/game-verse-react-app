import React, { useEffect, useState } from "react";
import { DataContext } from "./CreateDataContext";

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/games.json");
        if (!response.ok) {
          throw new Error(
            `there was an issue while fetching data, error: ${response.status}`
          );
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log("from end point", data);

  const gameData = {
    data,
    loading,
  };

  return (
    <DataContext.Provider value={gameData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
