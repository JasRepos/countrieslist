import React from "react";
import "./CardListStyles.css";
import CardComponent from "./CardComponent";

const CardListComponent = (props) => {
  return (
    <div className="card-list">
      {props.countries.map((country) => (
        <CardComponent key={country.name} country={country} />
      ))}
    </div>
  );
};

export default CardListComponent;
 