import React from "react";

import { Container, Form, Col } from "react-bootstrap";

const Searchcontent = ({ onChange }) => {

  return (
    <Container>
      <Col
        md={12}
        className="d-flex justify-content-center text-center cd-blog-group pt-5"
      >
        <Form onSubmit={() => {}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="Search by keyword"
              placeholder="Search by keyword"
              onChange={onChange}
            />
          </Form.Group>
        </Form>
      </Col>
    </Container>
  );
};

export default Searchcontent;
