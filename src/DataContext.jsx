import React, { useState, createContext } from "react";

let DataContext = createContext();

export default DataContext;

export let DataProvider = ({ children }) => {
  const [DataSet, setDataSet] = useState([]);
  return (
    <DataContext.Provider value={{DataSet, setDataSet }}>
      {children}
    </DataContext.Provider>
  );
};