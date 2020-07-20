import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CardListComponent from "../cards/CardListComponent";
import fetchCountries from "../../store/actions/data/fetchCountries";
import SearchBoxComponent from "../SearchBox/SearchBoxComponent";

const MainComponent = (props) => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    props.fetchCountries();
  }, [props]);

  useEffect(() => {
    setFilteredCountries(
      props.countries.filter(country =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, props.countries]);

  return (
    <div>
      <SearchBoxComponent placeholder='Search Countries' handleChange={e=> setSearch(e.target.value)} />
      <CardListComponent countries={filteredCountries} >
        
      </CardListComponent>
    </div>
  );
};

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

export default connect(MapStateToProps, MapDispatchToProps)(MainComponent);
