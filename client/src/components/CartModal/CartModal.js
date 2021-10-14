import classes from "./CartModal.module.css";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
function CartModal({ showModal, closeModal }) {
  const handleClose = () => {
    closeModal();
  };
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Item to your</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to keep shopping?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Keep Shoping
          </Button>
          <Button variant="secondary">
            <Link className={classes.link} to="/cart">
              Go to cart
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;
