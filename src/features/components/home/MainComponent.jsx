import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardListComponent from "../cards/CardListComponent";
import fetchCountries from "../../store/actions/data/fetchCountries";

const MainComponent = (props) => {
  useEffect(() => {
    props.fetchCountries();
  }, [props]);

  return (
    <div>
      <CardListComponent countries={props.countries} >
        
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
