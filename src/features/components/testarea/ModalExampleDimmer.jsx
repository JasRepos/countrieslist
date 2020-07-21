import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Segment,
  Flag,
  Grid,
} from "semantic-ui-react";
import SimpleMap from "../map/SimpleMap";

class ModalExampleDimmer extends Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <button
          onClick={this.show("blurring")}
          style={{ border: "0", padding: "0", cursor: "pointer" }}
        >
          {" "}
          <Image src={this.props.country.flag}></Image>{" "}
        </button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>
            <Grid>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Flag name={this.props.country.alpha2Code.toLowerCase()} />
                  {this.props.country.name}
                </Grid.Column>
                <Grid.Column width={12}></Grid.Column>
                <Grid.Column width={1}>
                  <Button color="red" icon="close" onClick={this.close} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Header>
          <Modal.Content image>
            <Grid celled>
              <Grid.Column width={8}>
                <SimpleMap latlng={this.props.country.latlng} />
              </Grid.Column>
              <Grid.Column width={8}>
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with
                    your e-mail address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Grid.Column>
              
            </Grid>
          </Modal.Content>
          
        </Modal>
      </div>
    );
  }
}

export default ModalExampleDimmer;
