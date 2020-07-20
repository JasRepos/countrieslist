const { FETCH_COUNTRIES } = require("../actions/data/fetchCountries");

const countriesReducer = (state = {}, {type, payload}) => {
    switch(type){
        case FETCH_COUNTRIES:
            return payload
        default:
            return state
    }
}; 

export default countriesReducer