import React from "react";
import "./appHeader.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Badge,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(10),
    marginTop: theme.spacing(8),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    overlay: {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundOverlay: "rgba(0,0,0,.9)",
    },
  },
}));

const AppHeader = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Container>
          <Toolbar>
            <IconButton
              edge={"start"}
              className={classes.menuButton}
              color={"inherit"}
              aria-label={"menu"}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant={"h6"} className={classes.title}>
              Guit-Art
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge color="secondary">
                  <FacebookIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge color="secondary">
                  <InstagramIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge color="secondary">
                  <TelegramIcon />
                </Badge>
              </IconButton>
              {/*<Box mr={3}>*/}
              {/*  <Button color={"inherit"} variant={"outlined"}>*/}
              {/*    Контакты*/}
              {/*  </Button>*/}
              {/*</Box>*/}
              <Button color={"secondary"} variant={"contained"}>
                Перезвонить мне
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {/*Промо==============================================================================================*/}
      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <div className={classes.overlay} />
          <Container fixed>
            <Grid container>
              <Grid item md={9}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component={"h1"} variant={"h3"} color={"inherit"} gutterBottom>
                    МЫ УЧИМ ИГРАТЬ
                  </Typography>
                  <Typography variant={"h5"} color={"inherit"} paragraph>
                    Приветствую тебя в музыкальной школе Guit-Art! Меня зовут Сергей и я создал
                    Guit-Art чтобы максимально интересно, максимально комфортно и максимально быстро
                    научить тебя или твоих детей игре на гитаре. Видов гитары, как и стилей игры на
                    ней, великое множество, неважно, какую музыкальную дорогу выберешь ты - Guit-Art
                    поможет прийти к цели.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Как мы работаем
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
              Как мы работаем
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};
export default AppHeader;
