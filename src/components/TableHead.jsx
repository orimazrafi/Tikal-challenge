import React from "react";
const tableHeader = ["Agent ID", "Country", "Address", "Date"];

function TableHead() {
  return (
    <div className="table-head-container">
      {tableHeader.map(head => (
        <div className="table-head" key={head}>
          {head}
        </div>
      ))}
    </div>
  );
}
export default TableHead;
