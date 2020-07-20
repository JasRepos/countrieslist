import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchCountries from '../store/actions/data/fetchCountries'

const TextComponent = (props) => {
    useEffect(() => {
        props.fetchCountries();
      }, []);
    return (
        <div>
            
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
