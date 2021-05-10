import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../util/app-context";
import axios from "axios";

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
    width: "90%",
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

  React.useEffect(() => {
    if (ctx.country !== "") {
      axios
        .get(
          ` https://app.ticketmaster.eu/amplify/v2/cities?apikey=3emDiWvgsjWAX84KicT04Sibk9XAsX88&domain=${
            ctx.country
          }&lang=en-us&country_id=${cIdObj[ctx.country]}`
        )
        .then((userData) => {
          setCities(userData.data.cities);
        });
    }
  }, [ctx.country]);

  const handleAutocomplete = (e, value) => {
    if (value.length === 0) {
      ctx.handleData([]);
    }

    let cityIds;
    value.length === 1
      ? (cityIds = value[0].id)
      : (cityIds = value.map((v) => v.id).join("%2C"));
    console.log(cityIds);
    axios
      .get(
        `https://app.ticketmaster.eu/amplify/v2/events?apikey=3emDiWvgsjWAX84KicT04Sibk9XAsX88&domain=${ctx.country}&lang=ca-es&city_ids=${cityIds}&sort_by=eventdate&start=0&rows=30`
      )
      .then((userData) => {
        console.log(userData.data.events);
        ctx.handleData(userData.data.events);
      });
  };

  return (
    <div className={classes.autoDiv}>
      <h3>Search</h3>
      <Autocomplete
        multiple
        id="combo-box-demo"
        options={cities}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a city"
            variant="outlined"
            value={(option) => option.id}
          />
        )}
        className={classes.auto}
        size="small"
        onChange={handleAutocomplete}
      />
    </div>
  );
};

export default AutoComplete;
