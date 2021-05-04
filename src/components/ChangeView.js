import React from "react";
import { Button } from "@material-ui/core";
import { AppContext } from "../util/app-context";
import { makeStyles } from "@material-ui/core/styles";
import ListIcon from "@material-ui/icons/List";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
    width: "90%",
    color: "#304ffe",
    backgroundColor: "white",
    textAlign: "center",
    padding: "1rem",
    margin: "0 auto",
    borderRadius: "5px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});

const ChangeView = () => {
  const ctx = React.useContext(AppContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Change View</h3>
      <div className={classes.buttons}>
        <Button onClick={ctx.enableList}>
          <ListIcon fontSize="large" titleAccess="List" />
        </Button>
        <Button onClick={ctx.enableGrid}>
          <ViewComfyIcon fontSize="large" titleAccess="Grid" />
        </Button>
      </div>
    </div>
  );
};

export default ChangeView;
