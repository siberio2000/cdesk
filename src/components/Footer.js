import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="footer">
        <Row>
          <Col xs={12} lg={12}>
            <Row className="d-flex flex-column lh-lg">
              <Col>
                <Link to="/">MAIN PAGE</Link>
              </Col>
              <Col>
                <Link to="/blog">BLOG</Link>
              </Col>
              {/* <Col style={{ fontSize: '0.8rem' }}>Copyright 2022</Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
