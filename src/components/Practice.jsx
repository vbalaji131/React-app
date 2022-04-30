
import React from "react";
import { useState } from "react";
import { Container, Col, Row, Input, Stack, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import getAppi from "./data/apiAccess";


const Practice = () => {
  const [tab, setTab] = useState(true);

  let styles = {
    btn: "btn-primary",
  };

  styles.btn = tab ? "btn-primary" : "btn-outline-primary";

  return (
    <div className="App">
      <button onClick={() => setTab(!tab)}>
        {tab ? "Close Chat" : "Open Chat"}
      </button>
      {/* {tab ? (
          <div className="chat-container">
            <ChatList />
          </div>
        ) : (
          <h1>Loading...</h1>
        )} */}
      <Container>
        <Row style={{ backgroundColor: tab ? "green" : "red" }}>
          <Col>logo</Col>
          <Col xs={2} style={{ backgroundColor: tab ? "red" : "green" }}>
            contact
          </Col>
          <Col md={2}>home</Col>
        </Row>
        <Stack gap={2} className="col-md-5 me-auto">
          <Button onClick={getAppi} variant="secondary">
            Click to get Api
          </Button>
          <Button variant="outline-secondary">Cancel</Button>
        </Stack>
        <div className="row">
          {/* <Form.Control className="col-md" placeholder="Add your item here..." /> */}
          <input className="col mr-8" placeholder="Enter your name" />
          <button className="col m-2 btn btn-xs btn-danger">Submit</button>
          <button className={`col m-2 btn ${styles.btn}`}>Reset</button>
        </div>
      </Container>
    </div>
  );
};

export default Practice;
