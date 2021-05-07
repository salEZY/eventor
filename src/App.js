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
  const [isGrid, setIsGrid] = useState(false);
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = React.useState([]);
  const classes = useStyles();

  const handleData = (data) => {
    setData(data);
  };

  const removeData = () => {
    setData([]);
  };

  const enableGrid = () => {
    setIsGrid(true);
  };

  const enableList = () => {
    setIsGrid(false);
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

  const handleCategories = (data) => {
    setCategories(data);
  };

  return (
    <AppContext.Provider
      value={{
        data: data,
        grid: isGrid,
        country: country,
        loading: isLoading,
        categories: categories,
        handleCategories: handleCategories,
        handleLoading: handleLoading,
        handleCurrentCountry: handleCurrentCountry,
        removeCountry: removeCountry,
        enableGrid: enableGrid,
        enableList: enableList,
        handleData: handleData,
        removeData: removeData,
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
