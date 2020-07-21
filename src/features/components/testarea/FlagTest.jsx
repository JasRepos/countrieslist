import React, { useState } from "react";
import { Image, Button, Grid } from "semantic-ui-react";
import Modal from "react-modal";

const FlagTest = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        onClick={openModal}
        style={{ border: "0", padding: "0", cursor: "pointer" }}
      >
        {" "}
        <Image src="https://restcountries.eu/data/col.svg"></Image>{" "}
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={15}></Grid.Column>
            <Grid.Column width={1}>
              <Button color="red" icon="close" onClick={closeModal} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column width={13}>
              <Image src="/images/wireframe/centered-paragraph.png" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src="/images/wireframe/paragraph.png" />
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="/images/wireframe/image.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal>
    </div>
  );
};

export default FlagTest;
