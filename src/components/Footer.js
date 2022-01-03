import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Col
        md={12}
        className="text-center"
        style={{
          backgroundColor: "var(--bs-light-grey)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
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
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </footer>
  );
};

export default Footer;
