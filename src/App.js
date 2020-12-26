// import './App.css';
import AppHeader from "./Components/Header/appHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import PromoSection from "./Components/Sections/About";
import CardSection from "./Components/Sections/Cards";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <>
      <AppHeader />
      <Grid container spacing={3} justify="center">
        <CardSection />
      </Grid>

      <PromoSection />
    </>
  );
}

export default App;
