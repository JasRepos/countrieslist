import React, { useState } from "react";
import "./CardStyles.css";
import Modal from "react-modal";
import SimpleMap from "../map/SimpleMap";
import { Grid, Table } from "semantic-ui-react";

const CardComponent = (props) => {
  const [modalState, setModalState] = useState(false);

  const manageState = () => {
    setModalState(!modalState);
  };

  return (
    <div onClick={() => manageState()} className="card-container">
      <img
        alt={props.country.name}
        height="150px"
        width="220px"
        src={props.country.flag}
      />
      <h3>{props.country.name}</h3>
      <p>{props.country.region}</p>
      <Modal isOpen={modalState} ariaHideApp={false}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Table color="teal" inverted>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <img
                        alt={props.country.name}
                        height="300px"
                        width="600px"
                        src={props.country.flag}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <SimpleMap latlng={props.country.latlng} />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <br />
              <br />
            </Grid.Column>
            <Grid.Column width={6} />
            <Grid.Column width={6}>
              <h1>Test: {props.country.latlng[1]}</h1>

              <h2>Country Name:</h2>
              <h3>{props.country.name}</h3>
              <h2>Capital City:</h2>
              <h3>{props.country.capital}</h3>
              <h2>Population Count:</h2>
              <h3>{props.country.population}</h3>
              <h2>ISO code ex:GBR for Great Britain</h2>
              <h3>{props.country.cioc}</h3>

              <h2>list of official language</h2>
              <p>{props.country.languages[0].iso639_1}</p>
              <p>{props.country.languages[0].iso639_2}</p>
              <p>{props.country.languages[0].name}</p>
              <p>{props.country.languages[0].nativeName}</p>

              <h2>List of Official Currencies</h2>
              <p>{props.country.currencies[0].name}</p>
              <p>{props.country.currencies[0].code}</p>
              <p>{props.country.currencies[0].symbol}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div>
          <button onClick={() => manageState()}> Close </button>
        </div>
      </Modal>
    </div>
  );
};

export default CardComponent;
