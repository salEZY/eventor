import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { AppContext } from "../util/app-context";
import axios from "axios";

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
    ctx.handleLoading(true);
    setSortBy(e.target.value);
    axios
      .get(
        `https://app.ticketmaster.eu/amplify/v2/events?apikey=3emDiWvgsjWAX84KicT04Sibk9XAsX88&domain=${ctx.country}&lang=en-us&sort_by=${e.target.value}&start=0&rows=12`
      )
      .then((userData) => {
        ctx.handleData(userData.data.events);
        ctx.handleLoading(false);
      });
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
          <MenuItem value="eventname">Name</MenuItem>
          <MenuItem value="popularity">Popularity</MenuItem>
          <MenuItem value="eventdate">Date</MenuItem>
        </Select>
      </FormControl>
      <Button
        value="Clear"
        color="secondary"
        className={classes.clearBtn}
        onClick={ctx.removeData}
      >
        Clear
      </Button>
    </div>
  );
};

export default Sort;
