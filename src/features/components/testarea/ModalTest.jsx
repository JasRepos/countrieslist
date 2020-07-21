import React, { Component } from "react";
import React, { useState } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const ModalTest = () => {
  const [open, setOpen] = useState(false);
  const [dimmer] = useState(dimmer)
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });
  return (
    <div>
      <Button onClick={this.show("blurring")}>Blurring</Button>
      <Modal dimmer={dimmer} open={open} onClose={this.close}>
        <Modal.Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={15}></Grid.Column>
              <Grid.Column width={1}>
                <Button color="red" icon="close" onClick={closeModal} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Header>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
        <Modal.Actions>
          <Button color="black" onClick={this.close}>
            Nope
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yep, that's me"
            onClick={this.close}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default ModalTest;
