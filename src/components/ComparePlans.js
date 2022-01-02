import React, { useState } from "react";
import { Container, Accordion, Table, Col } from "react-bootstrap";

import TableBlock from "./TableBlock";

import Dotm from "../assets/dot-m.png";
import Dot4 from "../assets/dot-4.png";
import Dot8 from "../assets/dot-8.png";

const tableContent = [
  {
    id: 1,
    blockTitle: "Cap table management",
    table: [
      ["Cap table table", true, false, true],
      ["Share certificates", false, true, true],
      ["Transaction history", true, false, true],
      ["Share class setup", false, "Some text", true],
      ["Valuation history", true, true, false],
      ["Filings", true, true, false],
    ],
  },
  {
    id: 2,
    blockTitle: "Share plan management",
    table: [
      ["Insert name", true, false, true],
      ["Share certificates", false, true, true],
      ["Transaction history", true, false, true],
    ],
  },
  {
    id: 3,
    blockTitle: "Scenario modelling",
    table: [
      ["Cap table table", true, false, true],
      ["Share certificates", false, true, true],
      ["Transaction history", true, false, true],
      ["Share class setup", false, "Some text", true],
      ["Valuation history", true, true, false],
      ["Filings", true, true, false],
    ],
  },
  {
    id: 4,
    blockTitle: "Investor relations",
    table: [
      ["Cap table table", true, false, true],
      ["Share certificates", false, true, true],
      ["Transaction history", true, false, true],
      ["Share class setup", false, "Some text", true],
      ["Valuation history", true, true, false],
      ["Filings", true, true, false],
    ],
  },
  {
    id: 5,
    blockTitle: "Document management",
    table: [
      ["Cap table table", true, false, true],
      ["Share certificates", false, true, true],
      ["Transaction history", true, false, true],
      ["Share class setup", false, "Some text", true],
      ["Valuation history", true, true, false],
      ["Filings", true, true, false],
    ],
  },
  {
    id: 6,
    blockTitle: "Transactions and liquidity",
    table: [
      ["Cap table table", true, false, true],
      ["Share certificates", false, true, true],
      ["Transaction history", true, false, true],
      ["Share class setup", false, "Some text", true],
      ["Valuation history", true, true, false],
      ["Filings", true, true, false],
    ],
  },
  {
    id: 7,
    blockTitle: "Support",
    table: [
      ["Cap table table", true, false, true],
      ["Share certificates", false, true, true],
      ["Transaction history", true, false, true],
      ["Share class setup", false, "Some text", true],
      ["Valuation history", true, true, false],
      ["Filings", true, true, false],
    ],
  },
  {
    id: 8,
    blockTitle: "One-off costs and services",
    table: [
      ["Cap table table", true, false, true],
      ["Share certificates", false, true, true],
      ["Transaction history", true, false, true],
      ["Share class setup", false, "Some text", true],
      ["Valuation history", true, true, false],
      ["Filings", true, true, false],
    ],
  },
];

const Compareplans = () => {
  const [tables] = useState(tableContent);

  return (
    <>
      <Container
        className="d-flex justify-content-around flex-column"
        style={{ padding: "7rem 0" }}
      >
        <Table responsive="sm cd-table-top">
          <tbody>
            <tr>
              <td className="cd-table-name cd-title-font" colSpan="4">
                Compare Plans
              </td>
            </tr>
            <tr>
              <td>
                <sup>Please note Capsdesk’s pricing structure</sup>
              </td>
              <td>
                <div className="col w-100">
                  <img src={Dotm} className="img-fluid" alt="" />
                </div>
                Start
              </td>
              <td>
                <div className="col w-100">
                  <img src={Dot4} className="img-fluid cd-dot-table" alt="" />
                </div>
                Grow
              </td>
              <td>
                <div className="col w-100">
                  <img src={Dot8} className="img-fluid cd-dot-table" alt="" />
                </div>
                Scale
              </td>
            </tr>
          </tbody>
        </Table>
        <Accordion className="w-100 text-center ">
          {tables.map((table) => (
            <Accordion.Item key={table.id} eventKey={table.id}>
              <Col>
                <TableBlock data={table} />
              </Col>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
};

export default Compareplans;
