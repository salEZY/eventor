import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  cardRoot: {
    width: "90%",
    boxShadow: "1px 1px 4px gray",
    margin: "1rem",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  infoDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
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

const ListCard = ({ imgSrc, name, domain, date, location }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardRoot}>
      <div>
        <img src={imgSrc} alt="Concert" />
      </div>
      <CardContent className={classes.infoDiv}>
        <div style={{ margin: "0 1rem" }}>
          <Typography variant="h6" component="h6" className={classes.title}>
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
        </div>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary" className={classes.button}>
          Find out more
        </Button>
      </CardActions>
    </Card>
  );
};

export default ListCard;
