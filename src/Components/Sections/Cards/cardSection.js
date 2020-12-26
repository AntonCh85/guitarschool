import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
}));
const cards = [1, 2, 3, 4, 5, 6];
export default function CardSection() {
  const classes = useStyles();

  return (
    <>
      {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography>Guitar player</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Подробнее
            </Button>
            <Button size="small" color="primary">
              Подробнее
            </Button>
            <LayerIcon />
            <PlayCircleFilledIcon />
          </CardActions>
        </Grid>
      ))}
    </>
  );
}
