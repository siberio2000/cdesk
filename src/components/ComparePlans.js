import React, { useState } from "react";
import { Container, Accordion, Table, Col } from "react-bootstrap";
import TableBlock from "./TableBlock";

import Dotm from "../assets/dot-m.png";
import Dot4 from "../assets/dot-4.png";
import Dot8 from "../assets/dot-8.png";

/**
 * We use this place for data in table
 * Data can be dynamically amended.
 * For full optimisation can be potentially done as separate file, or contents can be pulled from the outside with API call
 */

const tableContent = [
  {
    id: 1,
    blockTitle: "Cap table management",
    table: [
      ["Digital cap table", true, false, true],
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
      ["Insert name", true, false, "Custom text"],
      ["Share certificates", false, true, true],
      ["Transaction history", true, false, true],
    ],
  },
  {
    id: 3,
    blockTitle: "Scenario modelling",
    table: [
      ["Digital cap table", true, false, true],
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
      ["Digital cap table", true, false, true],
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
      ["Digital cap table", true, false, true],
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
      ["Digital cap table", true, false, true],
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
      ["Digital cap table", true, false, true],
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
      ["Digital cap table", true, false, true],
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
      <Col md={12}>
        <Container
          className="d-flex justify-content-around flex-column"
          style={{ padding: "7rem 0" }}
        >
          <Table responsive="sm cd-table-top">
            <tbody>
              <tr>
                <td className="cd-table-name cd-title-font" colSpan="4">
                  Compare plans
                </td>
              </tr>
              <tr>
                <td>
                  <sup>Please note Capsdesk???s pricing structure</sup>
                </td>
                <td>
                  <div className="col w-100">
                    <img src={Dotm} className="img-fluid" alt="Dotm" />
                  </div>
                  Start
                </td>
                <td>
                  <div className="col w-100">
                    <img src={Dot4} className="img-fluid cd-dot-table" alt="Dot4" />
                  </div>
                  Grow
                </td>
                <td>
                  <div className="col w-100">
                    <img src={Dot8} className="img-fluid cd-dot-table" alt="Dot8" />
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
      </Col>
    </>
  );
};

export default Compareplans;
