import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AppContext } from "../util/app-context";

const ConcertCard = ({ imgSrc, name, domain, date, location }) => {
  const ctx = React.useContext(AppContext);
  const useStyles = makeStyles({
    cardRoot: {
      width: ctx.grid ? "400px" : "800px",
      boxShadow: "1px 1px 10px gray",
      margin: "1rem",
    },
    title: {
      fontSize: 14,
    },
    button: {
      margin: "5px auto",
      color: "#304ffe",
      fontSize: "1rem",
      fontWeight: "bold",
      border: "1px solid #304ffe",
      padding: "10px",
    },
  });
  const classes = useStyles();

  return (
    <Card className={classes.cardRoot}>
      <CardContent>
        <img src={imgSrc} alt="Concert" />
        <Typography variant="h6" component="h6">
          {name}
        </Typography>
        <Typography color="textSecondary" className={classes.title}>
          Date: {date.replaceAll("-", ".").replace("T", " ").replace("Z", "")}
        </Typography>
        <Typography color="textSecondary" className={classes.title}>
          Location: {location}
        </Typography>
        <Typography color="textSecondary" className={classes.title}>
          Country: {domain.charAt(0).toUpperCase() + domain.slice(1)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" className={classes.button}>
          Find out more
        </Button>
      </CardActions>
    </Card>
  );
};

export default ConcertCard;
