export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';


const fetchCountries = () => {
    //fetch
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(res => console.log(res))
} 

export default fetchCountries