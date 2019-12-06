import React from "react";
function TableFooter({ length }) {
  return (
    <div className="table-footer">
      <div className="footer-space"></div>
      <div className="missions-length">{length} missions</div>{" "}
    </div>
  );
}
export default TableFooter;
