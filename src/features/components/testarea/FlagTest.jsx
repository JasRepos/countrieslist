import React, { useState } from "react";
import { Image, Button } from "semantic-ui-react";
import Modal from "react-modal";

const FlagTest = () => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        
      </Modal>
    </div>
  );
};

export default FlagTest;
