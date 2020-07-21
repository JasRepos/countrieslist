import React, { Fragment } from "react";
import {
  Segment,
  Item,
  Icon,
  List,
  Button,
  Image,
  Grid,
  Table,
  Card,
} from "semantic-ui-react";
import ModalComponent from "../../modals/ModalComponent";

const CountriesListItem = (props) => {
  return (
    <Fragment>
      <Segment.Group>
        <Segment>
          <Grid>
            <Card>
              <ModalComponent country={props.country} />
              <Card.Content>
                <Card.Description>
                  <h2>{props.country.name}</h2>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid>
        </Segment>
      </Segment.Group>
    </Fragment>
  );
};

export default CountriesListItem;
