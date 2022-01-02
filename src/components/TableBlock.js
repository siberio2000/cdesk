import React from "react";
import { Accordion, Table } from "react-bootstrap";

import DotActive from "../assets/dot-active.png";
import DotInactive from "../assets/dot-inactive.png";

// cell content component
const CellContent = ({ value }) => {
  if (typeof value === "string") {
    return value;
  } else if (typeof value === "boolean") {
    const src = value ? DotActive : DotInactive;
    return <img src={src} className="img-fluid cd-dot-table" alt="DotImage" />;
  }
};


// whole table block component
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
