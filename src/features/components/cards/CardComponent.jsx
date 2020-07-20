import React from 'react'
import './CardStyles.css'

const CardComponent = (props) => {
    return (
        <div className='card-container'>
            <img alt={props.country.name} height='150px' width='220px' src={props.country.flag}/>
            <h3>{props.country.name}</h3>
            <p>{props.country.region}</p>
        </div>
    )
}

export default CardComponent
