import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestActions } from "../../redux/store";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RequestList() {
  const dispatch = useDispatch();
  const { requests } = useSelector((x) => x.requests);
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    dispatch(requestActions.getRequests()).then((requests) => {
      setData(requests);
    });
  }, []);

  console.log(data.payload);

  {
    return !data ? (
      <>
        <h4>You do not have any requests</h4>
      </>
    ) : (
      <>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th scope="col">Request ID</th>
              <th scope="col">Status</th>
              <th scope="col">Deposit</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.payload.map((req, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{req.propertyID}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <MDBBadge color="warning" pill>
                    Processing
                  </MDBBadge>
                </td>
                <td>USD {currencyFormat(req.amount)}</td>
                <td>
                  <MDBBtn color="link" rounded size="sm" onClick={handleShow}>
                    <i class="fa fa-pencil" aria-hidden="true">
                      {" "}
                    </i>
                  </MDBBtn>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Deposit Amount (USD)</Form.Label>
                <Form.Control type="number" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput6"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Proof Of Payment</Form.Label>
                <Form.Control type="file" autoFocus readOnly />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} variant="danger">
              Close
            </Button>
            <Button style={{ backgroundColor: "#47878a" }}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RequestList;
