import React from "react";
import TableRow from "./TableRow";

const Table = ({ columns, data, expandable, expandComponent }) => {
  return (
    <div className="table">
      <div className="table-header">
        {columns.map((col) => (
          <h5 key={col.id} className="table-cell">
            {col.title}
          </h5>
        ))}
        {<h5>{expandable ? "-" : "Action"}</h5>}
      </div>
      <div className="table-body">
        {data.length ? (
          data.map((row, index) => (
            <TableRow
              key={index}
              row={row}
              index={index}
              columns={columns}
              expandComponent={expandComponent}
              expandable={expandable}
            />
          ))
        ) : (
          <div className="no-record">Record not found!</div>
        )}
      </div>
    </div>
  );
};

export default Table;
