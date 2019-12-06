import React from "react";
import TableBody from "./TableBody";
import TableFooter from "./TableFotter";
function Agent({ agent, index, length }) {
  return (
    <>
      {index !== length - 1 ? (
        <TableBody agent={agent} />
      ) : (
        <>
          <TableBody agent={agent} />
          <TableFooter length={length} />
        </>
      )}
    </>
  );
}
export default Agent;
