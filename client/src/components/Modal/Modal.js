import { Button } from "react-bootstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
function DropNotif({ heading, text, resetData }) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    resetData();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DropNotif;
