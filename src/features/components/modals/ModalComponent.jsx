import React, { Component } from "react";
import {
  Button,
  Image,
  Modal,
  Grid,
  Segment,
  Container,
  Card,
} from "semantic-ui-react";
import SimpleMap from "../map/SimpleMap";

class ModalComponent extends Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
    const { country } = this.props;

    return (
      <div>
        <button
          onClick={this.show("blurring")}
          style={{ border: "0", padding: "0", cursor: "pointer" }}
        >
          <Image src={country.flag}></Image>
        </button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>
            <Container>
              <Grid>
                <Grid.Column floated="right" width={1}>
                  <Button color="red" icon="close" onClick={this.close} />
                </Grid.Column>
              </Grid>
            </Container>
          </Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={country.flag} />
            <Modal.Description>
              <Segment.Group>
                <Segment>
                  <Container>
                    <Grid>
                      <Container>
                        <Card>Name</Card>
                      </Container>
                      <Card>Name</Card>
                      <Card>Name</Card>
                      <Card>Name</Card>
                    </Grid>
                  </Container>
                </Segment>
              </Segment.Group>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <SimpleMap latlng={country.latlng} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
