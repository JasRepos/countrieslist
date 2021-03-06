import React, { useState, useEffect } from "react";
import CountriesList from "../countrieslist/CountriesList";
import { Image, Grid } from "semantic-ui-react";
import SearchBoxComponent from "../../SearchBox/SearchBoxComponent";
import { connect } from "react-redux";
import fetchCountries from "../../../store/actions/data/fetchCountries";


const MapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: () => dispatch(fetchCountries),
  };
};

const CountryDashboard = (props) => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    props.fetchCountries();
  },[fetchCountries] );

  useEffect(() => {
    setFilteredCountries(
      props.countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, props.countries]);

  return (
    <div> 
      <Grid>
        <Grid.Row centered>
          <Image size="huge" alt="World" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" />
        </Grid.Row>
        <Grid.Row centered>
          <SearchBoxComponent
            placeholder="Search Countries"
            handleChange={(e) => setSearch(e.target.value)}
          />
        </Grid.Row>
        <Grid.Row>
          <CountriesList countries={filteredCountries} />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default connect(MapStateToProps, MapDispatchToProps)(CountryDashboard);
