import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { AppContext } from "../util/app-context";

const useStyles = makeStyles({
  inputDiv: {
    marginTop: "1rem",
    width: "90%",
    color: "#304ffe",
    backgroundColor: "white",
    textAlign: "center",
    padding: "1rem",
    margin: "0 auto",
    borderRadius: "5px",
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

const Categories = () => {
  const ctx = React.useContext(AppContext);
  const [country, setCountry] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const classes = useStyles();

  const handleCountry = (e) => {
    setCountry(e.currentTarget.value);
    axios
      .get(
        `https://app.ticketmaster.eu/amplify/v2/categories?apikey=3emDiWvgsjWAX84KicT04Sibk9XAsX88&domain=${e.currentTarget.value}&lang=en-us`
      )
      .then((data) => {
        setCategories(data.data.categories);
        ctx.handleData([]);
      });
  };

  const handleCategories = (event, id) => {
    if (event.target.checked) {
      axios
        .get(
          `https://app.ticketmaster.eu/amplify/v2/events?apikey=3emDiWvgsjWAX84KicT04Sibk9XAsX88&domain=${country}&lang=en-us&category_ids=${id}&sort_by=eventdate&start=0&rows=20
    `
        )
        .then((data) => ctx.handleCategories(data.data.events));
    } else if (!event.target.checked) {
      ctx.removeCategories(ctx.data, id);
    }
  };

  return (
    <div className={classes.root}>
      <FormGroup className={classes.inputDiv}>
        <h3>Select Category</h3>
        <div className={classes.btnDiv}>
          <Button
            className={classes.btn}
            value="spain"
            onClick={handleCountry}
            variant="outlined"
            color="primary"
          >
            Spain
          </Button>
          <Button
            className={classes.btn}
            value="germany"
            onClick={handleCountry}
            variant="outlined"
            color="primary"
          >
            Germany
          </Button>
          <Button
            className={classes.btn}
            value="poland"
            onClick={handleCountry}
            variant="outlined"
            color="primary"
          >
            Poland
          </Button>
        </div>
        {!categories ? (
          <p>Please select a country</p>
        ) : (
          <>
            <h3>{country.charAt(0).toUpperCase() + country.slice(1)}</h3>
            <div className={classes.lbl}>
              {categories.map((category) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={category.name}
                        value={category.name}
                        color="primary"
                        className={classes.inputs}
                        onClick={(e) => handleCategories(e, category.id)}
                      />
                    }
                    label={category.name}
                    key={category.id}
                  />
                );
              })}
            </div>
          </>
        )}
      </FormGroup>
    </div>
  );
};

export default Categories;
