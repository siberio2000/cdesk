import React from "react";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
                    <Plans />
                    <Compareplans />
                  </>
                }
              />
              <Route
                path="/blog"
                exact
                element={
                  <>
                    <Blog />
                  </>
                }
              />
            </Routes>
            <Footer />
          </Row>
        </Container>
      </>
    </Router>
  );
};

export default Layout;
