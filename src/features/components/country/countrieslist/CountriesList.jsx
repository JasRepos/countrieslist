import React, { Fragment } from "react";
import CountriesListItem from "./CountriesListItem";
import { Grid } from "semantic-ui-react";

const CountriesList = (props) => {
  return (
    <Fragment>
      <Grid container centered>
        {props.countries.map((country) => (
          <CountriesListItem key={country.name} country={country} />
        ))}
      </Grid>
    </Fragment>
  );
};

export default CountriesList;
