import { Container, Button} from "react-bootstrap";
import MarkdownEditor from "../../components/TextEditor/MarkdownEditor";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { getRequestById, approveRequest } from "../../actions/requestAction";
import { APPROVE_SELLER_RESET } from "../../constants/requestConstant";
import DropNotif from "../../components/Modal/Modal";

const RequestDescriptionScreen = ({match, history}) => {

    const requestDetail = useSelector((state) => state.getRequestById)
    const { loading, error, request } = requestDetail

    const approveDetail = useSelector((state) => state.approveRequest)
    const { loading: loadingApproval, error: errorApproval, success } = approveDetail

    const dispatch = useDispatch();

    const requestId = match.params.id
    useEffect(() => {
        dispatch(getRequestById(requestId))
    }, [requestId, dispatch])

    const buttonHandler = (e) => {
        e.preventDefault()
        dispatch(approveRequest(requestId))
    }

    const onChange = (value) => {

    }

    return (
        <Container>
            {success && (
              <DropNotif
                heading="Reqeust Approval"
                text="Approved request successfully"
                resetData={() => {
                  dispatch({ type: APPROVE_SELLER_RESET });
            }}
                ></DropNotif>
            )}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                <>
                    <MarkdownEditor text= {request.description} onChange={onChange}></MarkdownEditor>
                    <Button onClick={buttonHandler}> Approve reuqest</Button>
                </>
            )}
        </Container>
        
    )

}

export default RequestDescriptionScreen;


