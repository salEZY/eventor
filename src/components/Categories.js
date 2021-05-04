import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
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
  const [categories, setCategories] = React.useState("");
  const [check, setCheck] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.eu/amplify/v2/categories?apikey=3emDiWvgsjWAX84KicT04Sibk9XAsX88&domain=${ctx.country}&lang=en-us`
      )
      .then((data) => {
        setCategories(data.data.categories);
        ctx.handleData([]);
      });
  }, [ctx.country]);

  const handleCategories = (event) => {
    const { value, checked } = event.target;

    let checkArray = [];
    let id;
    if (checked) {
      checkArray = [...check, value];
      setCheck(checkArray);
      if (check.length === 0) {
        axios
          .get(
            `https://app.ticketmaster.eu/amplify/v2/events?apikey=3emDiWvgsjWAX84KicT04Sibk9XAsX88&domain=${ctx.country}&lang=en-us&category_ids=${value}&start=0&rows=20
        `
          )
          .then((data) => ctx.handleData(data.data.events));
      }
      if (check.length > 0) {
        id = checkArray.join("%2C");
        axios
          .get(
            `https://app.ticketmaster.eu/amplify/v2/events?apikey=3emDiWvgsjWAX84KicT04Sibk9XAsX88&domain=${ctx.country}&lang=en-us&category_ids=${id}&start=0&rows=20
        `
          )
          .then((data) => ctx.handleData(data.data.events));
      }
    } else {
      setCheck(check.filter((id) => id !== value));
      if (check.length === 1) {
        ctx.removeData();
        return;
      }
      checkArray = check.filter((chk) => chk !== value);
      axios
        .get(
          `https://app.ticketmaster.eu/amplify/v2/events?apikey=3emDiWvgsjWAX84KicT04Sibk9XAsX88&domain=${ctx.country}&lang=en-us&category_ids=${checkArray}&start=0&rows=20
        `
        )
        .then((data) => ctx.handleData(data.data.events));
    }
  };

  return (
    <div className={classes.root}>
      <FormGroup className={classes.inputDiv}>
        <h3>Select Category</h3>
        {!ctx.country ? (
          <p>Please select a country</p>
        ) : (
          <>
            <h3>
              {ctx.country.charAt(0).toUpperCase() + ctx.country.slice(1)}
            </h3>
            <div className={classes.lbl}>
              {categories.map((category) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={category.name}
                        value={category.id}
                        color="primary"
                        className={classes.inputs}
                        onClick={(e) => handleCategories(e)}
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
