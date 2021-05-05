import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { AppContext } from "../util/app-context";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  radios: {
    width: "90%",
    color: "#304ffe",
    backgroundColor: "white",
    textAlign: "center",
    padding: "1rem",
    margin: "0 auto",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  clearBtn: {
    width: "50%",
    margin: "5px auto",
  },
});

const Countries = () => {
  const ctx = React.useContext(AppContext);
  const classes = useStyles();

  const handleChange = (e) => {
    ctx.handleLoading(true);
    ctx.handleCurrentCountry(e.target.value);
    axios
      .get(
        `https://app.ticketmaster.eu/amplify/v2/events?apikey=3emDiWvgsjWAX84KicT04Sibk9XAsX88&domain=${e.target.value}&lang=en-us&sort_by=eventdate&start=0&rows=40`
      )
      .then((userData) => {
        ctx.handleData(userData.data.events);
        ctx.handleLoading(false);
      });
  };

  return (
    <FormControl component="fieldset" className={classes.radios}>
      <h3>Select Country</h3>
      <RadioGroup
        aria-label="category"
        name="category"
        value={ctx.country}
        onChange={handleChange}
        className={classes.buttons}
      >
        <FormControlLabel
          value="spain"
          control={<Radio color="primary" />}
          label="Spain"
        />
        <FormControlLabel
          value="germany"
          control={<Radio color="primary" />}
          label="Germany"
        />
        <FormControlLabel
          value="poland"
          control={<Radio color="primary" />}
          label="Poland"
        />
      </RadioGroup>
      <Button
        className={classes.clearBtn}
        value="Clear"
        onClick={ctx.removeCountry}
        variant="outlined"
        color="secondary"
      >
        Clear
      </Button>
    </FormControl>
  );
};

export default Countries;
