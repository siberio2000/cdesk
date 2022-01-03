import React from "react";
import { Accordion, Table } from "react-bootstrap";

import DotActive from "../assets/dot-active.png";
import DotInactive from "../assets/dot-inactive.png";


/** Cell content component
 * We create cell component and do type checks to define string or value for image or non-image cells
 */

const CellContent = ({ value }) => {
  if (typeof value === "string") {
    return value;
  } else if (typeof value === "boolean") {
    const src = value ? DotActive : DotInactive;
    return <img src={src} className="img-fluid cd-dot-table" alt="DotImage" />;
  }
};


/** Whole table block component
 * In this components we use iteration for table content. All we need is to make sure we have an unique id for each object in tableConten in ComparePlans.js
 * First we iterate over rows in tables 
 * Then we iterate over cells in created rows in tables           
 */

const TableBlock = ({ data }) => {
  const { blockTitle, table } = data;

  return (
    <>
      <Accordion.Header>{blockTitle}</Accordion.Header>
      <Accordion.Body>
        <Table responsive="sm">
          <tbody>
            {table.map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, index) => (
                  <td key={index}>
                    <CellContent value={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Accordion.Body>
    </>
  );
};

export default TableBlock;
