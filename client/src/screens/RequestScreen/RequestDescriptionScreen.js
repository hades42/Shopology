import { Container, Button } from "react-bootstrap";
import MarkdownEditor from "../../components/TextEditor/MarkdownEditor";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { getRequestById, approveRequest } from "../../actions/requestAction";
import { APPROVE_SELLER_RESET } from "../../constants/requestConstant";
import DropNotif from "../../components/Modal/Modal";
import { Link } from "react-router-dom";

const RequestDescriptionScreen = ({ match, history }) => {
  const requestDetail = useSelector((state) => state.getRequestById);
  const { loading, error, request } = requestDetail;

  const approveDetail = useSelector((state) => state.approveRequest);
  const {
    loading: loadingApproval,
    error: errorApproval,
    success,
  } = approveDetail;

  const dispatch = useDispatch();

  const requestId = match.params.id;
  useEffect(() => {
    dispatch(getRequestById(requestId));
  }, [requestId, dispatch]);

  const buttonHandler = (e) => {
    e.preventDefault();
    dispatch(approveRequest(requestId));
  };

  // Empty function because this component is only in READING MODE
  const onChange = (value) => {};

  return (
    <Container className="mt-5 mb-5">
      <Link to="/userProfile" className="btn btn-primary my-3">
        Go Back
      </Link>
      {success && (
        <DropNotif
          heading="Request Approval"
          text="Approve request successfully"
          resetData={() => {
            dispatch({ type: APPROVE_SELLER_RESET });
          }}
        ></DropNotif>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <MarkdownEditor
            text={request.description}
            onChange={onChange}
          ></MarkdownEditor>
          {!request.approved && (
            <>
              {loadingApproval && <Loader />}
              {errorApproval && (
                <Message variant="danger">{errorApproval}</Message>
              )}
              <Button className="mt-3 mb-3" onClick={buttonHandler}>
                {" "}
                Approve Request
              </Button>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default RequestDescriptionScreen;
