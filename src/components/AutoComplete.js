import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../util/app-context";

const useStyles = makeStyles({
  autoDiv: {
    marginTop: "1rem",
    width: "90%",
    color: "#304ffe",
    backgroundColor: "white",
    textAlign: "center",
    padding: "5px",
    margin: "0 auto",
    borderRadius: "5px",
  },
  auto: {
    margin: "0 auto",
    marginBottom: "10px",
  },
  btnDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  btn: {
    fontWeight: "bolder",
    marginRight: "10px",
  },
  lbl: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  inputs: {
    width: "10%",
    padding: "10px",
  },
});

const AutoComplete = () => {
  const ctx = React.useContext(AppContext);
  const [cities, setCities] = React.useState([]);
  const classes = useStyles();

  const cIdObj = {
    spain: 724,
    germany: 276,
    poland: 616,
  };
  console.log(cIdObj[ctx.country]);
  return (
    <div className={classes.autoDiv}>
      <h3>Search</h3>
      <Autocomplete
        id="combo-box-demo"
        options={cities}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Choose a city" variant="outlined" />
        )}
        className={classes.auto}
        size="small"
      />
    </div>
  );
};

export default AutoComplete;
