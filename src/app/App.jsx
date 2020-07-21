import React, { Fragment } from "react";
//import AppMainPage from "../features/components/testarea/AppMainPage";
import NavBar from "../features/components/navbar/NavBar";
import { Container } from "semantic-ui-react";
import CountriesList from "../features/components/country/countrieslist/CountriesList";
import CountryDashboard from "../features/components/country/countryDashboard/CountryDashboard";
//import "./App.css";
//import TestComponent from '../features/components/TextComponent'
//import CardListComponent from '../features/components/cards/CardListComponent';
//import MainComponent from "../features/components/home/MainComponent";
//import FlagTest from "../features/components/testarea/FlagTest";
//import { Grid } from "semantic-ui-react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className='main'>
        <CountryDashboard/>
      </Container>
      
    </Fragment>
  );
}

export default App;
