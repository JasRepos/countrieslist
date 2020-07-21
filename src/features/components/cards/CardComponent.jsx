import React, { useState } from "react";
import "./CardStyles.css";
import ModalComponent from "../modals/ModalComponent";

const CardComponent = (props) => {
  return (
    <div className="card-container">
      <ModalComponent country={props.country} />
      <h3>{props.country.name}</h3>
      <p>{props.country.region}</p>
    </div>
  );
};

export default CardComponent;
