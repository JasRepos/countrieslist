export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';


const fetchCountries = (dispatch) => {
    //fetch
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(res => dispatch({type:FETCH_COUNTRIES, payload: res}))
    .catch(error => console.log(error))
} 

export default fetchCountries