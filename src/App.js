// import './App.css';
import AppHeader from "./Components/Header/appHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import PromoSection from "./Components/Sections/About";
import CardSection from "./Components/Sections/Cards";
import {Container, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AppFooter from "./Components/Footer";


const useStyles = makeStyles((theme) => ({
    cardGrid: {
marginTop: theme.spacing(4)
    }
}))



function App() {
    const classes = useStyles();
  return (
    <>
      <AppHeader />
      <Container className={classes.cardGrid} maxWidth={"md"} >
      <Grid container spacing={3} justify="center">
        <CardSection />
      </Grid>
      </Container>

      <PromoSection />
      <AppFooter/>
    </>
  );
}

export default App;
