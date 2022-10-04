import React, { useEffect, useState } from "react";

const DataContext = React.createContext();
const url = "http://localhost:8002";
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`${url}/bots`);
    const result = await response.json();
    setData(result);
  };

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider, url };