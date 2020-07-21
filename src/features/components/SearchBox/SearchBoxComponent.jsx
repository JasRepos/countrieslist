import  './SearchBoxStyles.css'
import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchBoxComponent = ({placeholder, handleChange}) => {
    return (
        <Input 
        icon='search'
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        />
    )
}
 
export default SearchBoxComponent
