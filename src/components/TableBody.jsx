import React from "react";

function TableBody({ agent }) {
  return (
    <div className="table-body-container">
      <div className="table-body">{agent.agent}</div>
      <div className="table-body">{agent.country}</div>
      <div className="table-body">{agent.address}</div>
      <div className="table-body">{agent.date}</div>
    </div>
  );
}
export default TableBody;
