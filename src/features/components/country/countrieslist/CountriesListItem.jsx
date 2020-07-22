import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import ModalComponent from "../../modals/ModalComponent";

const CountriesListItem = (props) => {
  return (
    <Fragment>
      <Container
        style={{
          width: "200px",
          background: "none",
          padding: "25px",
          color: "white",
        }}
      >
        <ModalComponent country={props.country} />

        <h2>{props.country.name}</h2>
      </Container>
    </Fragment>
  );
};

export default CountriesListItem;
