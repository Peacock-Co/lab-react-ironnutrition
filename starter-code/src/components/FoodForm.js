import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

const AddFoodForm = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Food</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-container">
          <Form.Group>
            <Form.Row>
              <Form.Label column="lg" lg={2}>
                Large Text
              </Form.Label>
              <Col>
                <Form.Control size="lg" type="text" placeholder="Large text" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column="lg" lg={2}>
                Large Text
              </Form.Label>
              <Col>
                <Form.Control size="lg" type="text" placeholder="Large text" />
              </Col>
            </Form.Row>
            <br />
            <div className="mb-3">
              <Form.File id="formcheck-api-regular">
                <Form.File.Label>Regular file input</Form.File.Label>
                <Form.File.Input />
              </Form.File>
            </div>
          </Form.Group>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFoodForm;
