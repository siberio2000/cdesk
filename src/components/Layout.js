import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Plans from "./Plans";
import Compareplans from "./ComparePlans";
import Footer from "./Footer";
import Blog from "./Blog";

const Layout = () => {
  return (
    <Router>
      <>
        <Container fluid>
          <Row>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <>
                    <Col
                      md={12}
                      style={{
                        backgroundColor: "var(--bs-light-grey)",
                        paddingTop: "10rem",
                      }}
                    >
                      <Plans />
                    </Col>
                    <Col md={12}>
                      <Compareplans />
                    </Col>
                    <Col
                      md={12}
                      className="text-center"
                      style={{
                        backgroundColor: "var(--bs-light-grey)",
                        paddingTop: "10rem",
                        paddingBottom: "10rem",
                      }}
                    >
                      <Footer />
                    </Col>
                  </>
                }
              />
              <Route
                path="/blog"
                exact
                element={
                  <>
                    <Col md={12}
                      style={{
                        backgroundColor: "var(--bs-light-grey)",
                        paddingTop: "10rem", paddingBottom: "10rem"
                      }}>
                      <Blog />
                    </Col>
                    <Col
                      md={12}
                      className="text-center"
                      style={{
                        backgroundColor: "var(--bs-light-grey)",
                        paddingTop: "5rem",
                        paddingBottom: "10rem",
                      }}
                    >
                      <Footer />
                    </Col>
                  </>
                }
              />
            </Routes>
          </Row>
        </Container>
      </>
    </Router>
  );
};

export default Layout;
