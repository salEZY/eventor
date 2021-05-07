import React from "react";
import ConcertCard from "./ConcertCard";
import ListCard from "./ListCard";
import Sort from "./Sort";
import { AppContext } from "../util/app-context";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import img from "../assets/noimg.png";

const useStyles = makeStyles({
  main: {
    width: "75%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginLeft: "25%",
  },
});

const Main = (cssClass) => {
  const ctx = React.useContext(AppContext);
  const classes = useStyles();

  return (
    <main className={classes.main}>
      {ctx.data.length > 0 ? (
        <>
          {ctx.loading ? (
            <CircularProgress
              style={{ color: "#304ffe", margin: "2rem auto" }}
            />
          ) : (
            <>
              <Sort />
              {ctx.data.map((dat) => {
                if (ctx.grid) {
                  return (
                    <ConcertCard
                      key={dat.id}
                      imgSrc={dat.images ? dat.images.standard.url : img}
                      name={dat.name}
                      domain={dat.domain}
                      location={`${dat.venue.location.address.address}, ${dat.venue.location.address.city}`}
                      date={dat.event_date ? dat.event_date.value : "TTBA"}
                    />
                  );
                } else {
                  return (
                    <ListCard
                      key={dat.id}
                      imgSrc={dat.images ? dat.images.standard.url : img}
                      name={dat.name}
                      domain={dat.domain}
                      location={`${dat.venue.location.address.address}, ${dat.venue.location.address.city}`}
                      date={dat.event_date ? dat.event_date.value : "TTBA"}
                    />
                  );
                }
              })}
            </>
          )}
        </>
      ) : (
        <>
          <h3 className="nothingSelected">
            Choose events from the menu on the left{" "}
          </h3>
        </>
      )}
    </main>
  );
};

export default Main;
