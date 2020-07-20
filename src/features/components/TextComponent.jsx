import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchCountries from '../store/actions/data/fetchCountries'

const TextComponent = (props) => {
    useEffect(() => {
        props.fetchCountries();
      }, [props]);
    return (
        <div>
            {props.countries.map(country => <p key={country.name} >{country.name}</p>)}
        </div>
    ) 
}

const MapStateToProps = (state) => {
    return{
        countries: state.countries
    }
}

const MapDispatchToProps =(dispatch) => {
    return{
       fetchCountries: () => dispatch(fetchCountries)
    }

}

export default connect(MapStateToProps, MapDispatchToProps)(TextComponent)
