import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import { getAllRequest } from "../../../../actions/requestAction";

const ManageRequestScreen = () => {
  const dispatch = useDispatch();
  const getRequestSeller = useSelector((state) => state.getRequestSeller);
  const { loading, error, request } = getRequestSeller;

  useEffect(() => {
    dispatch(getAllRequest());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>User ID</th>
                <th>User Name</th>
                <th>Approved</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {request.map((r) => (
                <tr key={r._id}>
                  <td>{r._id}</td>
                  <td>{r.user._id}</td>
                  <td>{r.user.name}</td>
                  <td>
                    {r.approved ? (
                      <i
                        className="fas fa-check"
                        style={{ color: "green" }}
                      ></i>
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/request/${r._id}`}>
                      <Button variant="light" className="btn-sm">
                        Show more
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ManageRequestScreen;

