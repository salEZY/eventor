import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Main from "./components/Main";
import Aside from "./components/Aside";
import { AppContext } from "./util/app-context";

const useStyles = makeStyles({
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
  sidebar: {
    width: "25%",
    height: "100%",
    backgroundColor: "#304ffe",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    position: "fixed",
    left: "0",
  },
  main: {
    width: "75%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginLeft: "25%",
  },
});

function App() {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = React.useState([]);
  const [isGrid, setIsGrid] = useState(false);
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  const handleData = (data) => {
    setData(data);
  };

  const removeData = () => {
    setData([]);
  };

  const handleCategories = (data) => {
    setData((prevState) => prevState.concat(data));
  };

  const removeCategories = (data, id) => {
    console.log(data);
    const categoryToRemove = data.filter(
      (item) => item.categories[0].id !== id
    );
    setData(categoryToRemove);
  };

  const enableGrid = () => {
    setIsGrid(true);
  };

  const enableList = () => {
    setIsGrid(false);
  };

  const handleSortedData = (data) => {
    setSortedData(data);
  };

  const removeSortedData = () => {
    setSortedData([]);
  };

  const handleCurrentCountry = (country) => {
    setCountry(country);
  };

  const removeCountry = () => {
    setData([]);
    setCountry("");
  };

  const handleLoading = (bool) => {
    setIsLoading(bool);
  };

  return (
    <AppContext.Provider
      value={{
        data: data,
        sortedData: sortedData,
        grid: isGrid,
        country: country,
        loading: isLoading,
        handleLoading: handleLoading,
        handleCurrentCountry: handleCurrentCountry,
        removeCountry: removeCountry,
        enableGrid: enableGrid,
        enableList: enableList,
        handleData: handleData,
        removeData: removeData,
        handleSortedData: handleSortedData,
        removeSortedData: removeSortedData,
        handleCategories: handleCategories,
        removeCategories: removeCategories,
      }}
    >
      <div className={classes.content}>
        <Aside cssClass={classes.sidebar} />
        <Main />
      </div>
    </AppContext.Provider>
  );
}

export default App;
