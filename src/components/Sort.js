import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { AppContext } from "../util/app-context";

const useStyle = makeStyles({
  sortDiv: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "2rem auto",
  },
  msg: {
    marginRight: "5rem",
  },
  clearBtn: {
    marginLeft: "5rem",
    padding: "5px !important",
  },
});

const Sort = () => {
  const [sortBy, setSortBy] = React.useState("");
  const ctx = React.useContext(AppContext);

  const classes = useStyle();

  const handleChange = (e) => {
    console.log(e.target.value);
    if (sortBy === "name") {
      ctx.data.sort((a, b) => {
        if (a > b) {
          return -1;
        }
        if (b > a) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy === "popularity") {
    } else if (sortBy === "date") {
    } else {
      ctx.removeSortedData();
    }
  };
  return (
    <div className={classes.sortDiv}>
      <h4 className={classes.msg}>Sort events by:</h4>
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          onChange={handleChange}
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="popularity">Popularity</MenuItem>
          <MenuItem value="date">Date</MenuItem>
        </Select>
      </FormControl>
      <Button
        value="Clear"
        color="secondary"
        className={classes.clearBtn}
        onclick={ctx.removeSortedData}
      >
        Clear
      </Button>
    </div>
  );
};

export default Sort;
