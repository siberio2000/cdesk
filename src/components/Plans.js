import React from "react";
import {
  Card,
  CardGroup,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import Dotxxl from "../assets/dot-xxl.png";
import Dot4 from "../assets/dot-4.png";
import Dot8 from "../assets/dot-8.png";

const Plans = () => {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row className="flex-column">
          <Col className="cd-card-title cd-title-font">Plans</Col>
          <Col md={12} className="d-flex justify-content-around text-center">
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title className="p-3">
                    <Row className="d-inline-flex flex-wrap align-items-center">
                      <Col>
                        <img src={Dotxxl} className="mx-auto d-block" alt="" />
                      </Col>
                      <Col>Start</Col>
                    </Row>
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="cd-text-group-1">
                    From <strong>£50</strong> per month <br />
                    <strong>+ £4.80</strong> per employee on a share plan
                    <br />
                    <i>Paid annually</i>
                  </ListGroupItem>
                  <ListGroupItem className="cd-text-group-2">
                    From <strong>£60</strong> per month
                    <br /> <strong>+ £6</strong> per employee on a share plan
                    <br /> <i>Paid monthly</i>
                  </ListGroupItem>
                  <ListGroupItem className="cd-text-group-3 text-start">
                    <ul>
                      What's included?
                      <li>Up to 15 shareholders</li>
                      <li>Cap table management</li>
                      <li>Scenario modelling</li>
                      <li>Investor relations</li>
                      <li>Help centre</li>
                    </ul>
                  </ListGroupItem>
                </ListGroup>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="p-3">
                    <Row className="d-inline-flex flex-wrap align-items-center">
                      <Col>
                        <img src={Dot4} className="mx-auto d-block" alt="" />
                      </Col>
                      <Col>Grow</Col>
                    </Row>
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="cd-text-group-1">
                    From <strong>£95</strong> per month <br />
                    <strong>+ £4.80</strong> per employee on a share plan
                    <br />
                    <i>Paid annually</i>
                  </ListGroupItem>
                  <ListGroupItem className="cd-text-group-2">
                    From <strong>£120</strong> per month
                    <br /> <strong>+ £6</strong> per employee on a share plan
                    <br /> <i>Paid monthly</i>
                  </ListGroupItem>
                  <ListGroupItem className="cd-text-group-3 text-start">
                    <ul>
                      What's included?
                      <li>Everything in ‘Start’</li>
                      <li>Up to 50 shareholders</li>
                      <li>Capdesk live support</li>
                    </ul>
                  </ListGroupItem>
                </ListGroup>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="p-3">
                    <Row className="d-inline-flex flex-wrap align-items-center">
                      <Col>
                        <img src={Dot8} className="mx-auto d-block" alt="" />
                      </Col>
                      <Col>Scale</Col>
                    </Row>
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="cd-text-group-1">
                    <Row style={{padding: '5.8rem 0'}}>
                      <Col>
                      <strong>Tailored pricing</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="cd-text-group-3 text-start" style={{ padding: '2rem 2.5rem 1rem 2.5rem' }}>
                    <ul>
                      What's included?
                      <li>Everything in ‘Grow’</li>
                      <li>50+ shareholders</li>
                      <li>Dedicated account manager</li>
                      <li>Transactions and liquidity events</li>
                      <li>Public market transition</li>
                    </ul>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Plans;
